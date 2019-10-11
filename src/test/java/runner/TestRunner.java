package runner;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/resources/FeatureFiles/WeatherForecastApplicationNegativefeature.",
		plugin = {"pretty","json:target/pmi.json",			
		"html:target/HTML-Report"}
		
		)

public class TestRunner {

	
}





