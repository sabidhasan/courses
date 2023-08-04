# DDD

This contains notes from various sources on my journey to domain driven design.

# Sources
- https://www.youtube.com/watch?v=kbGYy49fCz4 (9 minute crash course intro)
- https://www.youtube.com/watch?v=p1Nl2k9ZZf0 (Paul Rayner talk at DDD Europe)
- https://www.youtube.com/watch?v=pMuiVlnGqjk (Eric Evans' talk at DDD Europe)

- https://www.youtube.com/watch?v=94Atco5-tRQ (DDD in Rails)



# Introduction
- DDD is a software design approach that models software to match a domain according to input from domain experts
- Coined in 2003 by Eric Evans' blue book
- DDD is split into two spheres:
  1. Strategic DDD (Ubiquitous language and bounded contexts)
  2. Tactical DDD (all of the technical stuff)

## Bounded Context
- A `bounded context` ensures we can split our domain/model into multiple domains/models
- Each context has its own `ubiquitous language`, and refers to set of related problems in the domain
- Also relates to microservices architecture

## Context Maps
- Contexts relate to each other via `context maps`


## Ubiquitous Language
- A `ubiquitous language` is an unambiguous language decided upon by the business and development
- If the language changes, the code should change, too.


