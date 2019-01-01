Given("I am at the website") do
  visit root_path
end

When("I click start button") do
  click_on "start-fight-button"
end

Then(/^I should see the (.*)$/) do |string|
  display = string.include?("pre") ?
    find_by_id("prefight-display", visible: true) :
    find_by_id("fight-display", visible: true)
  expect(display.style("display")).to eq({"display"=>"flex"})
end
