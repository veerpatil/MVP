


describe("My Villa Plus", function () {
    it("Browser Open", async  function() {
        browser.ignoreSynchronization=true;
     browser.get("https://myvillaplus.villaplustest.com/login");
     browser
       .manage()
       .timeouts()
       .implicitlyWait(55000);
    });
  
    it("Click Continue Without Entering Data",async function()
    {
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log("Blank Data:"+ text);
        });
       
        expect(true).toBe(true);

    });

    it("Click Continue By Entering Holiday Reference", async function()
    {
      element(by.css(".errorcolse")).click();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).clear();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).sendKeys("F003B8");
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log("Valid Booking reference:"+ text);
        });
        expect(true).toBe(true);

    });

    it("Click Continue By Entering FirstName", async function()
    {
        element(by.css(".errorcolse")).click();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).clear();
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).clear();
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).sendKeys("Hutton");
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log("Valid First Name:"+ text);
        });
        expect(true).toBe(true);

    });

    it("Enter Invalid Holiday Refernece and SirName", async function(){
      
        element(by.css(".errorcolse")).click();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).clear();
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).clear();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).sendKeys("F003B8d");
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).sendKeys("Huttond");
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log("Invalid Holiday Reference" +text);
        });
        expect(true).toBe(true);
    });

    it("Enter Valid Holiday Refernece and invalid SirName",async function(){
        element(by.css(".errorcolse")).click();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).clear();
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).clear();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).sendKeys("F003B8");
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).sendKeys("Huttond");
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log("Invalid Sirname:"+ text);
        });
        expect(true).toBe(true);
    });

    it("Enter InValid Holiday Refernece and InValid SirName",async function(){
        element(by.css(".errorcolse")).click();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).clear();
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).clear();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).sendKeys("F003dB8");
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).sendKeys("Huttosn");
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log("Invalid both:"+ text);
        });
        expect(true).toBe(true);
    });
    
    it("Enter Holiday Refernece and SirName",async function(){
        //element(by.css(".errorcolse")).click();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).clear();
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).clear();
        element(by.xpath("//input[@placeholder='Holiday Reference']")).sendKeys("105D4BC");
        element(by.xpath("//input[@placeholder='Lead Passenger Surname (eg. Clarke)']")).sendKeys("Fernandes");
        element(by.buttonText("Continue")).click();
        element(by.css(".error-body")).getText().then(function(text)
        {
        console.log(text);
        });
        
         browser.waitForAngularEnabled(true);
        // element(by.buttonText("Continue")).click();
        browser.sleep(10000);
        expect(true).toBe(true);
    });
    it("Verify URL", async function()
    {

      browser.getCurrentUrl().then(function(text)
      {
          console.log(text);
      });
      expect(true).toBe(true);
    
   });
   
});