using System.Collections.Generic;
using Shared;
using System;
using System.Linq;

namespace Main
{
    class Program
    {
        static void Main(string[] args)
        {
            var speaker = GetSpeaker();
            System.Console.WriteLine(speaker);

            foreach (var session in speaker.Sessions)
            {
                string startTime = session.StartTime.ToString("hh:mm");
                string endTime = session.EndTime.ToString("hh:mm");
                System.Console.WriteLine($"\n\n\nSession {session.Id} ({session.Title}) {startTime} - {endTime}");
                Session overlap = GetOverlap(session, speaker.Sessions);

                if (overlap != null)
                {
                    System.Console.Write($"ERROR {session.Id} overlaps {overlap.Id}");
                }
            }
        }

        static Session GetOverlap(Session targetSession, List<Session> sessions)
        {
            return sessions
                // Ignore the target session itself
                .Where(s => s.Id != targetSession.Id)
                .Where(s => s.EndTime > targetSession.StartTime && s.StartTime < targetSession.EndTime)
                .FirstOrDefault(s => true);
        }

        static Speaker GetSpeaker()
        {
            var speaker = new Speaker()
            {
                Name = "John Doe",
                Birthday = new DateTime(1955, 6, 4),
                Sessions = new List<Session>() {
                    new Session() {
                        Title = "C# Is Cool",
                        Length = TimeSpan.FromMinutes(60),
                        StartTime = new DateTimeOffset(2020, 3, 6, 10, 0, 0, TimeSpan.Zero),
                    },
                    new Session() {
                        Title = "JS is Pretty Neat Too",
                        Length = TimeSpan.FromMinutes(65),
                        StartTime = new DateTimeOffset(2020, 3, 6, 11, 0, 0, TimeSpan.Zero),
                    },
                    new Session() {
                        Title = "Third Session of the Day",
                        Length = TimeSpan.FromMinutes(15),
                        StartTime = new DateTimeOffset(2020, 3, 6, 12, 0, 0, TimeSpan.Zero),
                    },
                    new Session() {
                        Title = "Last Session",
                        Length = TimeSpan.FromMinutes(50),
                        StartTime = new DateTimeOffset(2020, 3, 6, 12, 15, 0, TimeSpan.Zero),
                    },
                }
            };

            return speaker;
        }
    }
}
