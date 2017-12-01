/* eslint-env jest */
/* eslint-disable no-underscore-dangle */

import { connect, disconnect } from '../db/connection';
import { Companies } from '../db/models';
import { companyFactory, fieldFactory } from '../db/factories';

beforeAll(() => connect());

afterAll(() => disconnect());

const check = (companyObj, doc) => {
  expect(companyObj.name).toBe(doc.name);
  expect(companyObj.email).toBe(doc.email);
  expect(companyObj.website).toBe(doc.website);
  expect(companyObj.size).toBe(doc.size);
  expect(companyObj.industry).toBe(doc.industry);
  expect(companyObj.plan).toBe(doc.plan);
};

const generateDoc = () => ({
  name: 'name',
  website: 'http://company.com',
  size: 1,
  industry: 'industry',
  plan: 'pro',
});

describe('Companies model tests', () => {
  let _company;

  beforeEach(async () => {
    _company = await companyFactory();
  });

  afterEach(async () => {
    // Clearing test data
    await Companies.remove({});
  });

  test('Create company', async () => {
    expect.assertions(7);

    // check duplication
    try {
      await Companies.createCompany({ name: _company.name });
    } catch (e) {
      expect(e.message).toBe('Duplicated name');
    }

    const doc = generateDoc();

    const companyObj = await Companies.createCompany(doc);

    check(companyObj, doc);
  });

  test('Update company', async () => {
    expect.assertions(7);

    const doc = generateDoc();

    const previousCompany = await companyFactory({ name: doc.name });

    // test duplication
    try {
      await Companies.updateCompany(_company._id, doc);
    } catch (e) {
      expect(e.message).toBe('Duplicated name');
    }

    // remove previous duplicated entry
    await Companies.remove({ _id: previousCompany._id });

    const companyObj = await Companies.updateCompany(_company._id, doc);

    check(companyObj, doc);
  });

  test('Add customer', async () => {
    let company = await companyFactory({});

    // call add customer
    const customer = await Companies.addCustomer({
      _id: company._id,
      name: 'name',
      website: 'website',
    });

    company = await Companies.findOne({ _id: company._id });

    expect(customer.companyIds).toEqual(expect.arrayContaining([company._id]));
  });

  test('Create company: with company fields validation error', async () => {
    expect.assertions(1);

    const field = await fieldFactory({ validation: 'number' });

    try {
      await Companies.createCompany({
        name: 'name',
        customFieldsData: { [field._id]: 'invalid number' },
      });
    } catch (e) {
      expect(e.message).toBe(`${field.text}: Invalid number`);
    }
  });

  test('Update company: with company fields validation error', async () => {
    expect.assertions(1);

    const field = await fieldFactory({ validation: 'number' });

    try {
      await Companies.updateCompany(_company._id, {
        name: 'name',
        customFieldsData: { [field._id]: 'invalid number' },
      });
    } catch (e) {
      expect(e.message).toBe(`${field.text}: Invalid number`);
    }
  });
});