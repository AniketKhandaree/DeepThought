import { Selector } from 'testcafe';

fixture`Login Page Tests`
  .page`https://dev.deepthought.education/login`;

// Test 1: Successful login with valid credentials
test('Successful Login with Valid Credentials', async (t) => {
  await t
    .typeText('#username', 'aniketkhandare9533@gmail.com') // Replace with a valid username
    .wait(3000)
    .typeText('#password', 'Aniket@1998') // Replace with a valid password
    .wait(3000)
    .click('#login')
    .wait(3000)
    .expect(Selector('span[class=logo-deep]').exists).ok(); // Replace with a selector for the dashboard screen element
});

// Test 2: Unsuccessful login attempts with invalid credentials
test('Unsuccessful Login Attempts with Invalid Credentials', async (t) => {
  await t
    .typeText('#username', 'aniketkhandare696@gmail.com') // Replace with an invalid username
    .wait(3000)
    .typeText('#password', 'Aniket98@') // Replace with an invalid password
    .wait(3000)
    .click('#login')
    .expect(Selector('#login-error-notify').exists).ok(); // Replace with a selector for the error message element
});

// Test 3: Validate appropriate error messages for invalid login attempts
test('Validate Error Messages for Invalid Login Attempts', async (t) => {
  await t
    .typeText('#username', 'Aniketkhandare@gmail.com') // Replace with an invalid username
    .wait(3000)
    .typeText('#password', 'Aniket123') // Replace with an invalid password
    .wait(3000)
    .click('#login')
    .expect(Selector('#login-error-notify').innerText).contains('Invalid login credentials'); // Replace with the expected error message
});

// Test 4: Validate user redirection to the dashboard screen on successful login
test('Validate Redirection to Dashboard on Successful Login', async (t) => {
  await t
    .typeText('#username', 'aniketkhandare9533@gmail.com') // Replace with a valid username
    .wait(3000)
    .typeText('#password', 'Aniket@1998') // Replace with a valid password
    .wait(3000)
    .click('#login')
    .wait(3000)
    .expect(Selector('span[class=logo-deep]').exists).ok(); // Replace with a selector for the dashboard screen element
});
