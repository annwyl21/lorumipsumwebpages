# How old is my dog in human years?

my_dog_name = 'Genie'
my_dog_age = 6.5

# calculating human age of dog's first 2 years of life
childhood = 2
childhood *= 10.5

# calculating human age of dogs years after childhood
adulthood = my_dog_age - 2
adulthood *= 4

# calculating the age of my dog in human years
adjusted_age = childhood + adulthood

#string interpolation
print(f"My dog is called {my_dog_name}. {my_dog_name} is {my_dog_age:.1f} in real life which is {adjusted_age:.0f} in human years. WOW!")
