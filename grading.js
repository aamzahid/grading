var msg = 'Enter The Mark (1 to 100):';

var a = prompt(msg);
if(a>=80)
    {
      document.write('Grade - A+');}

else if(a<80 && a>=75)
    {
      document.write('Grade - A');}

else if(a<75 && a>=70)
    {
      document.write('Grade - A-');}

else if(a<70 && a>=65)
    {
      document.write('Grade - B+');}

else if(a<65 && a>=60)
    {
      document.write('Grade - B');}

else if(a<60 && a>=55)
    {
      document.write('Grade - B-');}

else if(a<55 && a>=50)
    {
      document.write('Grade - C+');}

else if(a<50 && a>=45)
    {
      document.write('Grade - C');}

else if(a<45 && a>=40)
    {
      document.write('Grade - D');}

else
    {
      document.write('Grade - F  failed');}
    