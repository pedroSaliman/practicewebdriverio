describe("test keys",()=>{

    it("key",async()=>{

        browser.url("https://the-internet.herokuapp.com/key_presses")
      const input=await $("#target");
      await input.keys("Enter");
      const result=await $("#result");
      console.log(await result.getText())
    
   



    })
})