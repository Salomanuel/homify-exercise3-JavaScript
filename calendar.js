function calendar()
{
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth();
  var year = date.getYear();
  if(year<=200)
  {
    year += 1900;
  }
  months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
  days_in_month = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
  if(year%4 == 0 && year!=1900)
  {
    days_in_month[1]=29;
  }
  total = days_in_month[month];
  var date_today = day+' '+months[month]+' '+year;
  beg = date;
  beg.setDate(1);
  if(beg.getDate()==2)
  {
    beg=setDate(0);
  }
  beg = beg.getDay();
  document.write('<table><tbody><tr><th colspan="7">'+date_today+'</th></tr>');
  document.write('<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>');
  week = 0;
  for(i=1;i<=beg;i++)
  {
    document.write('<td>'+(days_in_month[month-1]-beg+i)+'</td>');
    week++;
  }
  for(i=1;i<=total;i++)
  {
		if(week==0)
		{
      document.write('<tr>');
		}
		if(day==i)
		{
      document.write('<td class="cal_today">'+i+'</td>');
		}
		else
		{
      document.write('<td>'+i+'</td>');
		}
		week++;
		if(week==7)
		{
      document.write('</tr>');
      week=0;
		}
  }
  for(i=1;week!=0;i++)
  {
    document.write('<td>'+i+'</td>');
    week++;
    if(week==7)
    {
      document.write('</tr>');
      week=0;
    }
  }
  document.write('</tbody></table>');
  return true;
}