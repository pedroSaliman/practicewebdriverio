describe("test state",()=>{

    it("state",async()=>{

        browser.url("https://the-internet.herokuapp.com")
      const displ=await $("a[href='/tinymce']");
      console.log(await displ.isDisplayedInViewport());
      console.log(await displ.isEnabled());
      console.log(await displ.isExisting());



    })
})