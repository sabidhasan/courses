# Date and Time Fundamentals

**Noda Time** is a date time library for C#.

The **DateTime** struct is the built in class for dealing with date and time, representing an instant in time (date and time). **This is for more or less time-zone naïve date times**



## Parsing DateTimes (Without Timezones)

To parse from a string, there is `Parse` and `TryParse`. Parsing is overloaded with a few signatures - string alone or a string and a culture. Parsing uses **system settings** when no culture is provided.

The `CultureInfo` library includes localization information.

```c#
var k = DateTime.Parse("2/2/2021 11:11:11 PM");
var m = DateTime.ParseExact("2/2/2021 11:11:11 PM", "M/d/yyyy h:mm:ss tt");
var d = DateTime.Parse("2/2/2021 11:11:11 PM", CultureInfo.GetCultureInfo("en-GB"));
```

The DateTime object is time zone naive. Do not use it if you are doing timezone conversions



To get the current date time for the computer, use `DateTime.Now`.

---

To convert DateTime to string, the `LongDateString` method can be used:

```C#
Console.WriteLine(d.ToLongDateString());
```

Alternatively, we can use `ToString` with a format string.



## Timezones

To bring timezones into the picture, use the `System.TimeZoneInfo` class, which simply represents a timezone. Then, `TimeZoneInfo` has a static method `ConvertTime` to convert a DateTime object:

```C#
var now = DateTime.Now;
var tz = TimeZoneInfo.FindSystemTimeZoneById("Canada/Eastern");
var easternTime = TimeZoneInfo.ConvertTime(now, tz)
```



## DateTime Offsets (Timezones)

The `DateTimeOffset` class is like the `DateTime` class, but it is **timezone-aware**, and provides a timezone offset for times based off of UTC. 

The `TimeSpan` class represents a **span of time**. Coupled with `ToOffset` on the DateTimeOffset class, we can convert a datetime from one timezone to another.

To convert a date time from one timezone to another:

```C#
var date = "2/5/2021 11:22:44 PM";
var dateTime = DateTimeOffset.ParseExact(date, "M/d/yyyy h:mm:ss tt", CultureInfo.InvariantCulture);
// Convert to +10 hours offset from UTC
var converted = dateTime.ToOffset(TimeSpan.FromHours(10));
```

To get the **current UTC timezone-aware time**, use `DateTimeOffset.UtcNow`

Any time can be converted to local time by calling `ToLocalTime()` on it or to universal time by using `ToUniversalTime()`



# Date and Time Arithmetic

