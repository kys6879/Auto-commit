const Git = require('nodegit');

const getMostRecentCommit = function (repository) {
  console.log(repository);
  return repository.getBranchCommit("master");
};

Git.Repository.open('nodegit')
  .then(m => {
    console.log(m);
  })

Git.Repository.open('nodegit')
  .then(getMostRecentCommit)
  .then(message => {
    console.log(message);
  });