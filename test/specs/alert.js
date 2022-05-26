describe("test alert",()=>{

        it("alert",async()=>{
    
            browser.url("https://the-internet.herokuapp.com/javascript_alerts")
            const src=await $("button[onclick='jsAlert()']");
            
            await src.click();
            
console.log( browser.isAlertOpen());
browser.acceptAlert();
const dis=await $("button[onclick='jsConfirm()']");
browser.dismissAlert();
const confirm=await $("button[onclick='jsPrompt()']");

browser.sendAlertText("good");

          
    
    
        })
    })