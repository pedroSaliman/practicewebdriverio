describe("test drag",()=>{

    it("draganddrop",async()=>{

        browser.url("https://the-internet.herokuapp.com/drag_and_drop")
        const src=await $("#column-a");
        const target=await $("#column-b");
        await src.dragAndDrop(target);


    })
})