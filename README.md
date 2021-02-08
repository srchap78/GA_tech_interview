# QA Challenge!

Hello!<br>

Be ready to be wowed by the power of automation! 

While the challenege says an end to end test with a certain workflow, I decided to write these how I would if I were to be making the actual test suite. This means small workflows (helps avoid flakiness) and certain features get their own test file. I also used page objects to help with managing the test suite if there are any changes to the DOM... Because now there is one place to change a selector instead of all throughout the tests.

This was more challenging than I expected. Every website is different and what works for one doesn't mean it works for all. A big challenge I faced ended up being uploading a .pdf. It kept failing halfway through the upload. I thought it might be an encoding problem but nope, cypress just doesn't like my cover letter. I used a different .pdf and all is well. I wish I had tried that sooner.

Before each test a login is made. This login is made through the UI. This is NOT optimal. It can take forever and text entry can be flakey. Logging in through a restful API request is the way to go. While sending the request is not a problem for me, finding what cookies or tokens to keep is a bit advanced for me (right now) without help. 

This suite has an order in which it needs to be ran. This is set in a config file if you decide you want to run them from the command line.

Spec file order if you decide to run them individually:
1. login.spec.js",
2. document.spec.js",
3. addRecipient.spec.js",
4. verifyDoc.spec.js"


## The Challenge:
   Create an E2E test that test the following:
   1. Login to GetAccept 
   2. Press "new document" button 
   3. Upload a small pdf document WIP
   4. Add a recipient x
   5. Verify that document name is the same as pdf x
   6. Verify that recipient has been added x
   7. Verify that new document is in draft list in document list view x

## Node modules used (follow links for documentation):
1. [cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) 
2. [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload)

<br>
If you have cloned the repo they are dev dependencies but...
Don't have them installed? Type this:

```
npm install cypress cypress-file-upload
```
<br>

## Open cypress runner
```
npm run cyopen
```

## Run cypress tests from command line
```
npm test

```
## Test Email account login/password: <br>
rtspnett@baybabes.com/1234Abcd
<br>
<br>
