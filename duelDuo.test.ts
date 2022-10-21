import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)

    await driver.sleep(2000)
})

test('Choices show up for draw', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    
    await drawBtn.click()
    
    const choices = await driver.findElement(By.id('choices'))

    const choicesUp = await choices.isDisplayed()
    expect(choicesUp).toBe(true)

    await driver.sleep(4000)
})

test('Bot goes into team', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))

    await drawBtn.click()

    const addBtn = await driver.findElement(By.className('bot-btn'))

    await addBtn.click()

    const yourDuo = await driver.findElement(By.id('player-duo'))

    const yourDuoUp = await yourDuo.isDisplayed()
    expect(yourDuoUp).toBe(true)

    await driver.sleep(4000)

})