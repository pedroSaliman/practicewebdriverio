describe("test scroll",()=>{

    it("scroll",async()=>{

        browser.url("https://demo.nopcommerce.com/")
        const src=await $("a[href='/contactus']");
        await src.scrollIntoView();
        await src.click();
      


    })
})