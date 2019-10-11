package PageObjects;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Then;
import runner.WeatherFeatureSteps;

public class WeatherForecastApp {

	public static WebDriver driver;
	public static int totalRows;
	public static WebDriverWait wait ;
	
	@FindBy(how=How.XPATH, using="//h1[text()='Five Day Weather Forecast for']")
	public static WebElement PageHeader;
	
	@FindBy(how=How.ID, using="city")
	public static WebElement CityInputField;
	
	public static void CheckPageHeader()
	{
		driver=WeatherFeatureSteps.driver;
		PageFactory.initElements(driver, WeatherForecastApp.class);
		Assert.assertTrue(PageHeader.isDisplayed());
	}
	
	public static void EnterCityName(String CityName)
	{
		driver=WeatherFeatureSteps.driver;
		wait=new WebDriverWait(driver, 10);
		PageFactory.initElements(driver, WeatherForecastApp.class);
		wait.until(ExpectedConditions.elementToBeClickable(CityInputField));
		CityInputField.clear();
		CityInputField.sendKeys(CityName);
		CityInputField.sendKeys(Keys.ENTER);	
	}

	public static void CityNotFound(String CityName) {
			try {
				CityInputField.clear();
				CityInputField.sendKeys(CityName);
				CityInputField.sendKeys(Keys.ENTER);
	    } catch  (java.lang.NullPointerException e){
	        System.out.println("City not found!");
	    }
	}

	public static void VerifyFiveDayData()
	{
		int DayRows = driver.findElements(By.xpath("//div[@class='summary']")).size();
		Assert.assertTrue(DayRows==5);	
	}
	
	public static void checkThreehourDetails(String DisplayCOndition,String DayNum)
	{
		String Xpath= "//span[@data-test='day-"+DayNum+"']/../../following-sibling::div[@class='details']";
		if (DisplayCOndition.toLowerCase().equals("displayed")) {
			Assert.assertTrue(driver.findElement(By.xpath(Xpath)).isDisplayed());
		} else {
			Assert.assertFalse(driver.findElement(By.xpath(Xpath)).isDisplayed());
		}
	}
	
	public static void CheckWeatherConditionSummary(String DayNum)
	{
		String Xpath = "//span[@data-test='day-"+DayNum+"']/../../following-sibling::div[@class='details']/div[1]/span[2]//*[name()='svg']";
		String firstCondition = driver.findElement(By.xpath(Xpath)).getAttribute("aria-label");
		String XpathforSummary = "//span[@data-test='day-"+DayNum+"']/../../span[2]//*[name()='svg']";
		String SummaryCondition = driver.findElement(By.xpath(XpathforSummary)).getAttribute("aria-label");
		Assert.assertEquals(firstCondition, SummaryCondition);
	}
	
	public static void checkWindspeedSummary(String DayNum)
	{
		String SummaryWindXpath = "//span[@data-test='speed-"+DayNum+"']";
		String summarywindspeed = driver.findElement(By.xpath(SummaryWindXpath)).getText();	
		String firstthreehourWindspeedxpath = "//span[@data-test='speed-"+DayNum+"-1']";
		String firstthreehourWindspeed = driver.findElement(By.xpath(firstthreehourWindspeedxpath)).getText();
		Assert.assertEquals(summarywindspeed, firstthreehourWindspeed);
		String DirSummaryXpath = "//span[@data-test='direction-"+DayNum+"']/*";
		String DirSummaryStyle = driver.findElement(By.xpath(DirSummaryXpath)).getAttribute("style");
		String firstthreehourDirxpath = "//span[@data-test='direction-"+DayNum+"-1']/*";
		String firstthreehourDirVal = driver.findElement(By.xpath(firstthreehourDirxpath)).getAttribute("style");
		Assert.assertEquals(DirSummaryStyle, firstthreehourDirVal);
	}
	
	public static void CheckMaxMinTemp(String DayNum)
	{
		int MaxTempSummary = Integer.valueOf(driver.findElement(By.xpath("//span[@data-test='maximum-"+DayNum+"']")).getText().replace("�", ""));
		int MinTempSummary = Integer.valueOf(driver.findElement(By.xpath("//span[@data-test='minimum-"+DayNum+"']")).getText().replace("�", ""));
		totalRows = driver.findElements(By.xpath("//div[@class='detail']/span[3]/span[contains(@data-test,'maximum-"+DayNum+"')]")).size();
		int CurrentMax;
		int Maxthreehour=0;
		int CurrentMin;
		int Minthreehour=1000;
		System.out.println("Total 3 hour data rows="+totalRows);	
		for(int i=1;i<totalRows+1;i++)
		{
			System.out.println("Running for loop");
			CurrentMax = Integer.valueOf(driver.findElement(By.xpath("(//div[@class='detail']/span[3]/span[contains(@data-test,'maximum-"+DayNum+"')])["+i+"]")).getText().replace("�", ""));
			System.out.println("CurrentMax is"+CurrentMax);
			if (CurrentMax>Maxthreehour) {
				Maxthreehour = CurrentMax;
				System.out.println("Maxthreehour is set as:"+CurrentMax);
			}
			CurrentMin = Integer.valueOf(driver.findElement(By.xpath("(//div[@class='detail']/span[3]/span[contains(@data-test,'minimum-"+DayNum+"')])["+i+"]")).getText().replace("�", ""));
			if (CurrentMin<Minthreehour) {
				Minthreehour = CurrentMin;
			}
		}
		System.out.println("3 hours max temp:"+Maxthreehour);
		System.out.println("Summary max temp:"+MaxTempSummary);
		Assert.assertEquals(Maxthreehour, MaxTempSummary);
		System.out.println("3 hours minimum temp:"+Minthreehour);
		System.out.println("Summary minimum temp:"+MinTempSummary);
		Assert.assertEquals(Minthreehour, MinTempSummary);
	}
	
	public static void checkRainfallSummary(String DayNum)
	{
		String rainfallSummaryVal = driver.findElement(By.xpath("//span[@data-test='rainfall-"+DayNum+"']")).getText();
		int threehourRanfalltotal=0;
		for(int i=1;i<totalRows+1;i++)
		{
			threehourRanfalltotal = threehourRanfalltotal + Integer.valueOf(driver.findElement(By.xpath("(//div[@class='detail']/span[5]/span[contains(@data-test,'rainfall-"+DayNum+"')])["+i+"]")).getText().replace("mm", ""));
		}
		Assert.assertEquals(rainfallSummaryVal,threehourRanfalltotal+"mm");
	}
}
