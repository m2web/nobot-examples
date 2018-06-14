const querystring = require('querystring');

const apiHost = 'https://jira.mycompany.com/rest/api/latest/searchable?jql=';

const jqlParams = {
  assignee: 'Mark McFadden',
  startAt: 2,
  maxResults: 2
};

const apiUrl = `${apiHost}"${querystring.stringify(jqlParams)}"`;

console.log(`My JQL api call is ${apiUrl}`);
