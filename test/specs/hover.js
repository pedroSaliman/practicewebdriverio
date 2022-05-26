describe("test hover",()=>{

    it("hover",async()=>{

        browser.url("https://the-internet.herokuapp.com/hovers")
      const displ=await $("//div[@class='example']//div[1]//img[1]");
     await displ.moveTo();
     const message=await $("//h5[normalize-space()='name: user1']");
     console.log(await message.getText())



    })
})