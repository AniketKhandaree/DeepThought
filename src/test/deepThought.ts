import {Selector} from "testcafe";
import { idText } from "typescript";

const usernameInput=Selector('input[type=text][id=username]')
const passwordInput=Selector('input[type=password][id=password]')
const loginButton=Selector('button[id=login][type=submit]');


fixture `test structure1`
.page  `https://dev.deepthought.education/login`;

test('enter username and password',async t =>{
    await t
    .typeText(usernameInput,'aniketkhandare9533@gmail.com')
    .wait(3000)
    .typeText(passwordInput,'Aniket@1998')
    .wait(3000)
    .click(loginButton)
    .wait(3000);


});
test('enter username and password',async t =>{
    await t
    .typeText(usernameInput,'aniketkhandare969@gmail.com')
    .wait(3000)
    .typeText(passwordInput,'Aniket@1998')
    .wait(3000)
    .click(loginButton)
    .wait(3000);


});