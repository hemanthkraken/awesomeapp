Feature: Settings Screen
	@Settings
	Scenario: Settings Screen Validation
		Given I press the Settings tab of the App
		Then The Settings tab should load with all the expected contents
