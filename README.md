# Leftover Love

Food waste is a huge issue. More than $140 billion dollars in food is thrown away each year in the US. There are huge economic and environmental impacts that goes along with this. Unfortunately, it's easier and cheaper than any other option for restaurants to just throw away their extra food.

##What is this thing?
Leftover Love allows restaurants to sell this extra food at a discount to customers who are looking for cheap, but high quality meals. So, restaurants post available meals, and then hungry users purchase this food and a text message alert lets them now when it's ready. Includes full Stripe credit card integration.

**See it here:** https://baldwin-leftoverlove.herokuapp.com/#/

**Video proof:** https://www.youtube.com/watch?v=YVInjRZJx0Y&feature=youtu.be

##Features
1. The homepage gives a brief introduction, allows users to go to the sign up/log in page, and browse available meals.

![screen shot 2017-01-09 at 10 40 40 am](https://cloud.githubusercontent.com/assets/18018191/21779345/7da7bc0a-d664-11e6-9c03-2687158a037c.png)

2. Users choose an individual meal to order (searching for specifics in the search box if desired), and this puts the meal in the shopping cart where the user can then walk through the credit card form.

![screen shot 2017-01-09 at 10 40 51 am](https://cloud.githubusercontent.com/assets/18018191/21779355/8ae3a528-d664-11e6-815b-a115fe056bd9.png)

![screen shot 2017-01-09 at 10 41 10 am](https://cloud.githubusercontent.com/assets/18018191/21779402/cac3955e-d664-11e6-96f4-37fcb167c962.png)

3. The logged sale and credit card verification information can be viewed on Stripe's website.

*Note:* I used the Stripe integration in test mode. Stripe provides test card numbers.

![screen shot 2017-01-09 at 10 41 58 am](https://cloud.githubusercontent.com/assets/18018191/21779374/a06d31ca-d664-11e6-97fb-6b83b0561776.png)

4. Restaurants also have a dashboard view that only they can see. They can edit, delete, or add new meals for purchase.

5. A button pops up on an individual meal when the meal has been ordered. The restaurant can click when the meal is ready for pickup. This sends a text message alert to the buyer. The 'total number of pounds' number on this page increments here and also on the home page.

*Note:* Phone numbers have to be verified by Twilio to work, and only one can be verified at a time, so please watch the video for demonstration.

![screen shot 2017-01-09 at 11 18 29 am](https://cloud.githubusercontent.com/assets/18018191/21779385/b1ed97c8-d664-11e6-92d7-7eb9c333d0b9.png)

##Technologies

The app uses a Bootstrap framework with Angular, Angular-Stripe, HTML, and CSS. Node.js, Express to query the PostgreSQL database. Credit card integration is powered by Stripe and the awesome text message feature is courtesy of Twilio's SMS messaging.
