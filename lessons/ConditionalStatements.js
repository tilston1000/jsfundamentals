// If hour between 6 and 12, print "good morning"
// If hour between 12 and 18, print "good afternoon"
// Otherwise: Good Evening

var hour = 5

if(hour >= 6 && hour < 12)
{
    console.log('Good morning')
}
else if(hour >= 12 && hour < 18)
{
    console.log('Good afternoon')
}
else
{
    console.log('Good evening')
}

var ageIsMoreThanEighteen = false
var isUSCitizen = true

if(ageIsMoreThanEighteen || isUSCitizen)
{
    console.log('Customer is eligible for Driving License')
}
else
{
    console.log('Customer is not eligible for Driving License')
}