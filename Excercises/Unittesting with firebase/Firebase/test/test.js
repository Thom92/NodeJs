const assert = require('assert');
const firebase = require('@firebase/testing');

const myProjectId = 'alertbox-9860e';
const myAccountId = "account1"
const myUserId = "user1"
const doc3 = "3"
const theirId = "4"
const userNumberId = "3"
const anotherId = "3"
const myAdminAuth = {uid: myAccountId}
const myUserAuth = {uid: myUserId}
/*beforeEach(async() =>
{
    await firebase.clearFirestoreData({projectId: myProjectId});
})*/
function getFirestore(auth)
{

    return firebase.initializeTestApp({projectId: myProjectId, auth: auth}).firestore();
}
describe("Alert box rule testing", ()=>{

    it('Can read items in the read-only collection', () =>
    {
        const db = getFirestore(null)
        const testDoc = db.collection("Users").doc("testDoc2");
        firebase.assertSucceeds(testDoc.get())
    });
    it("Can write to a user document with the same id as the userid from within the account collection", async()=>
    {
        const db = getFirestore(myUserAuth)
        const testDoc = db.collection("accounts").doc(myAccountId);
        firebase.assertSucceeds(testDoc.get())
    });
    it("Can write to a different account than it's own", async()=>
    {
        const db = getFirestore(myAdminAuth);
        const testDoc = db.collection("accounts").doc(anotherId);
        await firebase.assertFails(testDoc.set({foo: "new name"}));

    });
    it("Can write to a user document with a different id than the userid", async()=>
    {
        const db = getFirestore(myUserAuth)
        const testDoc = db.collection("Users").doc(theirId);
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    });
});

/*after(async() => 
{
    await firebase.clearFirestoreData({projectId: myProjectId});
});*/