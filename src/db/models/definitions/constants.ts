export const CONVERSATION_STATUSES = {
  NEW: 'new',
  OPEN: 'open',
  CLOSED: 'closed',
  ALL: ['new', 'open', 'closed'],
};

export const TAG_TYPES = {
  CONVERSATION: 'conversation',
  CUSTOMER: 'customer',
  ENGAGE_MESSAGE: 'engageMessage',
  COMPANY: 'company',
  INTEGRATION: 'integration',
  ALL: ['conversation', 'customer', 'engageMessage', 'company', 'integration'],
};

export const MESSENGER_KINDS = {
  CHAT: 'chat',
  NOTE: 'note',
  POST: 'post',
  ALL: ['chat', 'note', 'post'],
};

export const SENT_AS_CHOICES = {
  BADGE: 'badge',
  SNIPPET: 'snippet',
  FULL_MESSAGE: 'fullMessage',
  ALL: ['badge', 'snippet', 'fullMessage'],
};

export const METHODS = {
  MESSENGER: 'messenger',
  EMAIL: 'email',
  ALL: ['messenger', 'email'],
};

export const FORM_LOAD_TYPES = {
  SHOUTBOX: 'shoutbox',
  POPUP: 'popup',
  EMBEDDED: 'embedded',
  DROPDOWN: 'dropdown',
  SLIDEINLEFT: 'slideInLeft',
  SLIDEINRIGHT: 'slideInRight',
  ALL: ['', 'shoutbox', 'popup', 'embedded', 'dropdown', 'slideInLeft', 'slideInRight'],
};

export const FORM_SUCCESS_ACTIONS = {
  EMAIL: 'email',
  REDIRECT: 'redirect',
  ONPAGE: 'onPage',
  ALL: ['', 'email', 'redirect', 'onPage'],
};

export const KIND_CHOICES = {
  MESSENGER: 'messenger',
  FORM: 'form',
  FACEBOOK: 'facebook',
  GMAIL: 'gmail',
  CALLPRO: 'callpro',
  ALL: ['messenger', 'form', 'facebook', 'gmail', 'callpro'],
};

// messenger data availability constants
export const MESSENGER_DATA_AVAILABILITY = {
  MANUAL: 'manual',
  AUTO: 'auto',
  ALL: ['manual', 'auto'],
};

export const ACTIVITY_CONTENT_TYPES = {
  CUSTOMER: 'customer',
  COMPANY: 'company',
  USER: 'user',
  DEAL: 'deal',
  TICKET: 'ticket',
  TASK: 'task',

  ALL: ['customer', 'company', 'user', 'deal', 'ticket', 'task'],
};

export const PUBLISH_STATUSES = {
  DRAFT: 'draft',
  PUBLISH: 'publish',
  ALL: ['draft', 'publish'],
};

export const ACTIVITY_TYPES = {
  CUSTOMER: 'customer',
  COMPANY: 'company',
  INTERNAL_NOTE: 'internal_note',
  CONVERSATION: 'conversation',
  SEGMENT: 'segment',
  DEAL: 'deal',
  EMAIL: 'email',
  TICKET: 'ticket',
  TASK: 'task',
  BRAND: 'brand',

  ALL: ['customer', 'company', 'internal_note', 'conversation', 'segment', 'deal', 'email', 'ticket', 'task', 'brand'],
};

export const ACTIVITY_ACTIONS = {
  CREATE: 'create',
  UPDATE: 'update',
  DELETE: 'delete',
  MERGE: 'merge',
  SEND: 'send',

  ALL: ['create', 'update', 'delete', 'merge', 'send'],
};

export const ACTIVITY_PERFORMER_TYPES = {
  SYSTEM: 'SYSTEM',
  USER: 'USER',
  CUSTOMER: 'CUSTOMER',
  DEAL: 'DEAL',

  ALL: ['SYSTEM', 'USER', 'CUSTOMER', 'DEAL'],
};

export const PRODUCT_TYPES = {
  PRODUCT: 'product',
  SERVICE: 'service',
  ALL: ['product', 'service'],
};

export const PIPELINE_VISIBLITIES = {
  PUBLIC: 'public',
  PRIVATE: 'private',
  ALL: ['public', 'private'],
};

export const FIELDS_GROUPS_CONTENT_TYPES = {
  CUSTOMER: 'customer',
  COMPANY: 'company',
  ALL: ['customer', 'company'],
};

export const CUSTOMER_LEAD_STATUS_TYPES = [
  '',
  'new',
  'open',
  'inProgress',
  'openDeal',
  'unqualified',
  'attemptedToContact',
  'connected',
  'badTiming',
];

export const CUSTOMER_LIFECYCLE_STATE_TYPES = [
  '',
  'subscriber',
  'lead',
  'marketingQualifiedLead',
  'salesQualifiedLead',
  'opportunity',
  'customer',
  'evangelist',
  'other',
];

export const COMPANY_LEAD_STATUS_TYPES = [
  '',
  'new',
  'open',
  'inProgress',
  'openDeal',
  'unqualified',
  'attemptedToContact',
  'connected',
  'badTiming',
];

export const COMPANY_LIFECYCLE_STATE_TYPES = [
  '',
  'subscriber',
  'lead',
  'marketingQualifiedLead',
  'salesQualifiedLead',
  'opportunity',
  'customer',
  'evangelist',
  'other',
];

export const COMPANY_BUSINESS_TYPES = [
  '',
  'Analyst',
  'Competitor',
  'Customer',
  'Integrator',
  'Investor',
  'Partner',
  'Press',
  'Prospect',
  'Reseller',
  'Other',
];

export const COMPANY_INDUSTRY_TYPES = [
  '',
  'Advertising/Public Relations',
  'Aerospace, Defense Contractors',
  'Agriculture',
  'Airlines',
  'Alcoholic Beverages',
  'Alternative Energy Production & Services',
  'Architectural Services',
  'Attorneys/Law Firms',
  'Automotive',
  'Banks',
  'Bars & Restaurants',
  'Books, Magazines & Newspapers',
  'Builders/General Contractors',
  'Business Services',
  'Car Manufacturers',
  'Coal Mining',
  'Colleges, Universities & Schools',
  'Commercial TV & Radio Stations',
  'Computer Software',
  'Construction',
  'Dairy',
  'Doctors & Other Health Professionals',
  'Education',
  'Energy & Natural Resources',
  'Finance, Insurance & Real Estate',
  'Food & Beverage',
  'Foundations, Philanthropists & Non-Profits',
  'Health',
  'Hotels, Motels & Tourism',
  'Insurance',
  'Internet',
  'Lawyers / Law Firms',
  'Meat processing & products',
  'Medical Supplies',
  'Mining',
  'Mortgage Bankers & Brokers',
  'Music Production',
  'Natural Gas Pipelines',
  'Nursing Homes/Hospitals',
  'Phone Companies',
  'Postal Unions',
  'Printing & Publishing',
  'Private Equity & Investment Firms',
  'Publishing & Printing',
  'Real Estate',
  'Retail Sales',
  'Schools/Education',
  'Sports, Professional',
  'Telecom Services & Equipment',
  'Textiles',
  'Tobacco',
  'Transportation',
  'TV / Movies / Music',
];

export const PROBABILITY = {
  TEN: '10%',
  TWENTY: '20%',
  THIRTY: '30%',
  FOURTY: '40%',
  FIFTY: '50%',
  SIXTY: '60%',
  SEVENTY: '70%',
  EIGHTY: '80%',
  NINETY: '90%',
  WON: 'Won',
  LOST: 'Lost',
  ALL: ['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', 'Won', 'Lost'],
};

export const STATUSES = {
  ACTIVE: 'Active',
  DELETED: 'Deleted',
  ALL: ['Active', 'Deleted'],
};

export const BOARD_TYPES = {
  DEAL: 'deal',
  TICKET: 'ticket',
  TASK: 'task',
  ALL: ['deal', 'ticket', 'task'],
};

// module constants
export const NOTIFICATION_TYPES = {
  CHANNEL_MEMBERS_CHANGE: 'channelMembersChange',
  CONVERSATION_ADD_MESSAGE: 'conversationAddMessage',
  CONVERSATION_ASSIGNEE_CHANGE: 'conversationAssigneeChange',
  CONVERSATION_STATE_CHANGE: 'conversationStateChange',
  DEAL_ADD: 'dealAdd',
  DEAL_REMOVE_ASSIGN: 'dealRemoveAssign',
  DEAL_EDIT: 'dealEdit',
  DEAL_CHANGE: 'dealChange',
  DEAL_DUE_DATE: 'dealDueDate',
  DEAL_DELETE: 'dealDelete',
  TICKET_ADD: 'ticketAdd',
  TICKET_REMOVE_ASSIGN: 'ticketRemoveAssign',
  TICKET_EDIT: 'ticketEdit',
  TICKET_CHANGE: 'ticketChange',
  TICKET_DUE_DATE: 'ticketDueDate',
  TICKET_DELETE: 'ticketDelete',
  TASK_ADD: 'taskAdd',
  TASK_REMOVE_ASSIGN: 'taskRemoveAssign',
  TASK_EDIT: 'taskEdit',
  TASK_CHANGE: 'taskChange',
  TASK_DUE_DATE: 'taskDueDate',
  TASK_DELETE: 'taskDelete',
  CUSTOMER_MENTION: 'customerMention',
  COMPANY_MENTION: 'companyMention',
  ALL: [
    'channelMembersChange',
    'conversationAddMessage',
    'conversationAssigneeChange',
    'conversationStateChange',
    'dealAdd',
    'dealRemoveAssign',
    'dealEdit',
    'dealChange',
    'dealDueDate',
    'dealDelete',
    'ticketAdd',
    'ticketRemoveAssign',
    'ticketEdit',
    'ticketChange',
    'ticketDueDate',
    'ticketDelete',
    'taskAdd',
    'taskRemoveAssign',
    'taskEdit',
    'taskChange',
    'taskDueDate',
    'taskDelete',
    'customerMention',
    'companyMention',
  ],
};

export const NOTIFICATION_CONTENT_TYPES = {
  TASK: 'task',
  DEAL: 'deal',
  COMPANY: 'company',
  CUSTOMER: 'customer',
  TICKET: 'ticket',
  CHANNEL: 'channel',
  CONVERSATION: 'conversation',
  ALL: ['task', 'deal', 'company', 'customer', 'ticket', 'channel', 'conversation'],
};
