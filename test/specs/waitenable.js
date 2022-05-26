describe("test wait",()=>{

    it("wait",async()=>{

        browser.url("https://the-internet.herokuapp.com/dynamic_controls")
      const click=await $("//button[normalize-space()='Enable']");
      await click.click();
      const input=await $("input[type='text']");
      await input.waitForEnabled();
      await input.setValue("this is good");
      console.log(await input.getText());
      expect(await input).toBeExisting();

    
    
   



    })



})