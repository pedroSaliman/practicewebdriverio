describe("test waitfor",()=>{

    it("waitfor",async()=>{

        browser.url("https://the-internet.herokuapp.com/add_remove_elements/")
      const click=await $("button[onclick='addElement()']");
      await click.click();
      const target=await $(".added-manually")
      await target.waitForExist();
      console.log(await target.getText())
      

    
    
   



    })



})