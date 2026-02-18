"""
OOP Masterclass - Complete Lesson Generator
Generates all 35 Python story-driven lessons
"""

# Module structure and lesson outlines
CURRICULUM = {
    "Module 1: Foundations": [
        ("The Tale of the Messy Kingdom", "King CodeMaster discovers OOP"),
        ("The Royal Blueprint Maker", "Classes as magical blueprints"),
        ("The Living Statues", "Objects come alive from blueprints"),
        ("The Magic Mirror", "'self' keyword explained through reflection"),
("The Wizard's Spell Book", "Constructors as initialization spells")
    ],
    "Module 2: Four Pillars": [
        ("The Secret Treasure Vaults", "Encapsulation - hiding treasures"),
        ("The Royal Guards", "Access modifiers - public, private, protected"),
        ("The Family Tree", "Inheritance - passing traits down"),
        ("The Inheritance Curse", "Problems with deep inheritance"),
        ("Toy Parts vs Family Trees", "Composition over inheritance"),
        ("The Shape-Shifter", "Polymorphism - many forms"),
        ("The Grand Tournament", "Polymorphic behavior in action"),
        ("The Invisible Machinery", "Abstraction - hiding complexity")
    ],
    "Module 3: Advanced Concepts": [
        ("The Royal Contracts", "Interfaces as agreements"),
        ("The Web of Relationships", "Association, aggregation, composition"),
        ("The Twins Who Act Differently", "Method overloading/overriding"),
        ("The Kingdom's Shared Resources", "Static members explained"),
        ("Boxes Within Boxes", "Nested classes")
    ],
    "Module 4: Design Patterns": [
        ("The Pattern Library", "Introduction to design patterns"),
        ("The Factory of Dreams", "Creational patterns"),
        ("The Decorator's Guild", "Structural patterns"),
        ("The Observer's Network", "Behavioral patterns part 1"),
        ("The State Machine Kingdom", "Behavioral patterns part 2"),
        ("The Hall of Shame", "Anti-patterns to avoid")
    ],
    "Module 5: SOLID Principles": [
        ("One Job, One Master", "Single Responsibility"),
        ("Open Gates, Closed Walls", "Open/Closed Principle"),
        ("The Substitution Law", "Liskov Substitution"),
        ("Many Small Doors", "Interface Segregation"),
        ("Depend on Promises", "Dependency Inversion")
    ],
    "Module 6: Architecture": [
        ("The Three-Layer Castle", "Layered architecture"),
        ("The Domain of Kings", "Domain-Driven Design"),
        ("The Kingdom Federation", "Microservices and OOP")
    ],
    "Module 7: Production": [
        ("Testing the Royal Guards", "Testing OOP code"),
        ("The Speed Tournament", "Performance optimization"),
        ("The Code Review Court", "Maintainability wisdom")
    ]
}

print("Curriculum Structure:")
module_id = 1
lesson_id = 1
for module, lessons in CURRICULUM.items():
    print(f"\n{module} (Module {module_id}):")
    for title, desc in lessons:
        print(f"  Lesson {lesson_id}: {title} - {desc}")
        lesson_id += 1
    module_id += 1

print(f"\n✅ Total: {lesson_id - 1} lessons across {module_id - 1} modules")
