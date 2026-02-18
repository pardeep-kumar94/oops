// OOP Masterclass - Complete Interactive Learning Platform
// ALL 35 LESSONS - Python-only with Story-Driven Narratives! 📖🐍

// ============ COMPLETE LESSON DATA (35 Lessons) ============
const LESSONS = [
    // ==================== MODULE 1: FOUNDATIONS ====================
    {
        id: 1,
        module: 1,
        moduleName: "Foundations",
        title: "The Tale of the Messy Kingdom",
        difficulty: "Beginner",
        description: "Discover OOP through the story of King CodeMaster organizing his magical kingdom!",
        content: `
      <h2>📖 The Tale of the Messy Kingdom</h2>
      
      <p>Once upon a time, King CodeMaster ruled a magical kingdom. But he had a HUGE problem.</p>
      
      <h3>❌ The Chaos (Without OOP)</h3>
      <p>The King kept track of every knight, dragon, and wizard on long scrolls. It was a mess!</p>
      <p>If he wanted to record a knight, he wrote: "Bob, Sword, Armor, Horse".</p>
      <p>If he wanted to record a wizard, he wrote: "Merlin, Staff, Robe, Beard".</p>
      
      <div class="callout callout-warning">
          <div class="callout-header">
              <span class="callout-icon">🔥</span>
              <span>The Disaster Scenario</span>
          </div>
          <div class="callout-content">
              <p>One day, the King decided all Knights should have a "Shield".</p>
              <p><strong>He had to manually update 5,000 lines of scrolls!</strong> He missed one, and Sir Lancelot went into battle without a shield! 💀</p>
          </div>
      </div>

      <div class="code-block">
        <div class="code-header">
          <span class="code-language">Python - The Messy Way (Procedural) ❌</span>
          <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <pre><code class="language-python"># Variables are everywhere!
knight1_name = "Arthur"
knight1_weapon = "Excalibur"
knight1_health = 100

knight2_name = "Lancelot"
knight2_weapon = "Lance"
knight2_health = 100

def attack(name, weapon):
    print(f"{name} attacks with {weapon}")

# If we want to add armor, we have to add knight1_armor, knight2_armor...
# It's a nightmare! 😱</code></pre>
      </div>
      
      <h3>✅ The Solution (With OOP)</h3>
      
      <p>The Royal Wizard appeared and said: <strong>"Your Majesty, treat them as OBJECTS!"</strong></p>
      <p>Instead of loose variables, we group them into a <strong>Knight Object</strong>. It holds its OWN data!</p>
      
      <div class="code-block">
        <div class="code-header">
          <span class="code-language">Python - The OOP Way ✅</span>
          <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <pre><code class="language-python">class Knight:
    def __init__(self, name, weapon):
        self.name = name
        self.weapon = weapon
        self.health = 100
        self.armor = "Steel"  # Added easily!
    
    def attack(self):
        print(f"{self.name} swings {self.weapon}!")

# Create knights easily!
arthur = Knight("Arthur", "Excalibur")
lancelot = Knight("Lancelot", "Lance")

arthur.attack()
# Arthur swings Excalibur!</code></pre>
      </div>

      <div class="callout callout-insight">
        <div class="callout-header">
          <span class="callout-icon">💡</span>
          <span>Why is this better?</span>
        </div>
        <div class="callout-content">
          <p>If we want to give EVERY Knight a "Horse", we just add <code>self.horse = True</code> in the Class. All 5,000 knights get a horse instantly! 🐴</p>
        </div>
      </div>
      
      <h2>🎉 Lesson 1 Complete!</h2>
      <p>Next: How to create these magical blueprints! 📜✨</p>
    `
    },

    {
        id: 2,
        module: 1,
        moduleName: "Foundations",
        title: "The Royal Blueprint Maker",
        difficulty: "Beginner",
        description: "Follow the Royal Architect as he teaches the kingdom about blueprints (classes)!",
        content: `
      <h2>🏰 The Royal Architect's Workshop</h2>
      
      <p>The Royal Architect, BlueprintMaster, tried to build houses without a plan. It went terribly!</p>
      
      <h3>❌ The Bad Way (No Blueprints)</h3>
      <p>He told the builders: "Put a door here, a window there... no, wait, move the door!"</p>
      <p>Result? <strong>Every house looked weird and different.</strong> Some had no roofs! 🏠💥</p>

      <div class="code-block">
        <div class="code-header">
          <span class="code-language">Python - Chaos Construction ❌</span>
          <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <pre><code class="language-python"># Building Houses manually... one by one...
house1_door = "Red"
house1_windows = 4
house1_has_roof = True

house2_door = "Blue"
house2_windows = 2
# Oops! Forgot to specify if House 2 has a roof! 
# Rain falls inside! 🌧️</code></pre>
      </div>
      
      <h3>✅ The Good Way (The Class Blueprint)</h3>
      <p>The Architect drew a <strong>MASTER PLAN (Class)</strong>. It says: "Every house MUST have a door, windows, and a roof."</p>

      <div class="code-block">
        <div class="code-header">
          <span class="code-language">Python - The Blueprint ✅</span>
          <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
        </div>
        <pre><code class="language-python">class House:
    def __init__(self, door_color, windows):
        self.door_color = door_color
        self.windows = windows
        self.has_roof = True  # Guaranteed! 🏠

# Now every house is perfect!
my_house = House("Red", 4)
your_house = House("Blue", 2)

print(my_house.has_roof) # True
print(your_house.has_roof) # True (No rain inside!)</code></pre>
      </div>
      
      <div class="callout callout-insight">
        <div class="callout-header">
            <span class="callout-icon">🍪</span>
            <span>The Cookie Cutter</span>
        </div>
        <div class="callout-content">
            <p><strong>Class = Cookie Cutter</strong> (The shape/plan)</p>
            <p><strong>Object = The Cookie</strong> (The delicious result)</p>
            <p>You can make 1,000 cookies from ONE cutter!</p>
        </div>
      </div>

      <h2>🎉 Lesson 2 Complete!</h2>
      <p>Next: Bringing the statues to life! 🗿✨</p>`
    },

    {
        id: 3,
        module: 1,
        moduleName: "Foundations",
        title: "The Living Statues - Objects Come Alive!",
        difficulty: "Beginner",
        description: "Watch as the Royal Sculptor brings stone statues to life!",
        content: `<h2>🗿 The Royal Sculptor's Magic</h2>
        
        <p>The Royal Sculptor, StoneCarver, was tired. He had a warehouse full of statue PARTS. Heads here, arms there.</p>
        
        <h3>❌ The Bad Way (Disconnected Parts)</h3>
        <p>He tried to build King Arthur from a pile of rocks.</p>
        <p>If he kicked a rock, he didn't know if it was Arthur's toe or Merlin's nose!</p>
        
        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Variables Scramble ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python"># Just random variables floating around...
head_1 = "King Arthur"
arm_1 = "Holding Sword"
# ... is this leg_1 for Arthur or leg_2?
leg_5 = "Stone Leg"

# It's impossible to know what belongs to who! 😵</code></pre>
        </div>

        <h3>✅ The Good Way (Cohesive Objects)</h3>
        <p>With OOP, he puts the head, arms, and legs INSIDE the Statue Object.</p>
        <p>If you move the Statue, all its parts move with it!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Object Way ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Statue:
    def __init__(self, hero_name, material):
        self.hero_name = hero_name
        self.material = material
        self.is_alive = False
        
    def bring_to_life(self):
        self.is_alive = True
        print(f"✨ {self.hero_name} awakens!")

# Arthur is ONE package!
arthur = Statue("King Arthur", "marble")
arthur.bring_to_life()
# ✨ King Arthur awakens!</code></pre>
        </div>
        <p>Next: The mysterious 'self' keyword! 🪞</p>`
    },

    {
        id: 4,
        module: 1,
        moduleName: "Foundations",
        title: "The Magic Mirror - Understanding 'self'",
        difficulty: "Beginner",
        description: "Discover why objects need to recognize themselves!",
        content: `<h2>🪞 The Magic Mirror</h2>
        
        <p>A Knight goes to battle. He swings a sword. But WHOSE sword?</p>
        
        <h3>❌ The Bad Way (The Amnesiac Knight)</h3>
        <p>Without <code>self</code>, the knight doesn't know who he is!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Confused Knight ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">def swing_sword():
    # Wait, who is swinging? 
    # Do I swing my sword or your sword?
    print("Someone swings a sword?")

# Madness!</code></pre>
        </div>

        <h3>✅ The Good Way (Self Awareness)</h3>
        <p><code>self</code> is like looking in a mirror. "I am swinging <strong>MY</strong> sword."</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Self-Aware Knight ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Knight:
    def __init__(self, name, weapon):
        self.name = name
        self.weapon = weapon
    
    def introduce(self):
        # self.name means "MY name"
        print(f"I am {self.name}, I wield {self.weapon}!")

arthur = Knight("Arthur", "Excalibur")
arthur.introduce()
# I am Arthur, I wield Excalibur!</code></pre>
        </div>
        <p>Next: Constructors! ⚡</p>`
    },

    {
        id: 5,
        module: 1,
        moduleName: "Foundations",
        title: "The Wizard's Spell Book - Constructors",
        difficulty: "Beginner",
        description: "Learn how __init__ sets up new objects!",
        content: `<h2>📜 The Initialization Spell</h2>
        
        <p>Creating a Wizard is dangerous. If you forget to give him magic, he's just a guy with a stick!</p>
        
        <h3>❌ The Bad Way (The Empty Shell)</h3>
        <p>You create a wizard, but you forget to setup his stats. He tries to cast a spell and... NOTHING happens! Or worse, he explodes!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Broken Wizard ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class BadWizard:
    pass

merlin = BadWizard()
# oops, I forgot to give him mana!
# merlin.cast_fireball() -> CRASH! Error: 'BadWizard' has no 'mana'</code></pre>
        </div>

        <h3>✅ The Good Way (The Constructor)</h3>
        <p>The <code>__init__</code> spell runs AUTOMATICALLY. You CANNOT create a Wizard without giving him magic!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Safe Way ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Wizard:
    def __init__(self, name, element):
        print(f"⚡ Initializing {name}...")
        self.name = name
        self.element = element
        self.mana = 100
    
    def learn_spell(self, spell):
        self.spells.append(spell)

# You MUST provide name and element!
gandalf = Wizard("Gandalf", "Light")
# ⚡ Initializing Gandalf...
print(f"{gandalf.name} has {gandalf.mana} mana")
# Gandalf has 100 mana</code></pre>
        </div>
        <h2>🎉 Module 1 Complete!</h2><p>Next: The Four Pillars! 🏛️</p>`
    },

    // ==================== MODULE 2: THE FOUR PILLARS ====================

    {
        id: 6,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Encapsulation - The Royal Vault",
        difficulty: "Intermediate",
        description: "Learn to hide data and protect your kingdom's secrets!",
        content: `<h2>🏰 The Royal Vault</h2>
        
        <p>King CodeMaster had a massive vault of gold. But he left the door open!</p>
        
        <h3>❌ The Bad Way (Public Data)</h3>
        <p>Anyone could walk in and take gold! A sneaky goblin (or a bad coder) could set the gold to ZERO!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Open Vault ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class BankAccount:
    def __init__(self, owner, balance):
        self.balance = balance # Public!

# SCARY!
account = BankAccount("Alice", 1000)
account.balance = -5000000 
# Alice is now in massive debt! Anyone can do this! 😱</code></pre>
        </div>

        <h3>✅ The Good Way (Encapsulation)</h3>
        <p>The King built a thick steel door (Private Variables). Only the <strong>Bank Teller (Method)</strong> can touch the gold.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Secure Vault ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # Private! (double underscore)
    
    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount
            return True
        return False
    
    def get_balance(self):
        return self.__balance

account = BankAccount("Alice", 1000)
# account.__balance = 99999  # ERROR! Can't touch this! 🛡️
account.deposit(500)
print(account.get_balance())  # 1500</code></pre>
        </div>
        <p>Next: Getters and Setters! 🚪</p>`
    },

    {
        id: 7,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Getters and Setters - The Gatekeepers",
        difficulty: "Intermediate",
        description: "Control how data is accessed and modified!",
        content: `<h2>🚪 The Gatekeepers</h2>
        
        <p>The Vault has a door. You need a Guard (Getter/Setter) to check who enters.</p>
        
        <h3>❌ The Bad Way (No Guards)</h3>
        <p>A player drinks a "Potion of Death" and sets their health to -100. The game physics go crazy!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Out of Control ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Player:
    def __init__(self, name):
        self.health = 100

p = Player("Hero")
p.health = -5000 
# Now the hero is undead? The game glitching! 🧟‍♂️</code></pre>
        </div>

        <h3>✅ The Good Way (The Guard)</h3>
        <p>The Guard says: "Health must be between 0 and 100!"</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Guarded Gate ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Player:
    def __init__(self, name):
        self.__name = name
        self.__health = 100
    
    @property  # Getter (The Spyhole)
    def health(self):
        return self.__health
    
    @health.setter  # Setter (The Guard)
    def health(self, value):
        if 0 <= value <= 100:
            self.__health = value
        else:
            print("🚫 Guard: Health must be 0-100!")

player = Player("Hero")
player.health = 80  # Uses setter
print(player.health)  # Uses getter: 80
player.health = 150  # 🚫 Guard: Health must be 0-100!</code></pre>
        </div>
        <p>Next: Abstraction! 🎩</p>`
    },

    {
        id: 8,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Abstraction - The Magic Show",
        difficulty: "Intermediate",
        description: "Hide complexity, show only what matters!",
        content: `<h2>🎩 The Magic Show</h2>
        
        <p>Do you know how a car engine works? Fuel injection, pistons, sparks... NO! You just turn the key.</p>
        
        <h3>❌ The Bad Way (Too Many Buttons)</h3>
        <p>Imagine a car dashboard with 500 buttons. "Open Value 3", "Ignite Piston 4". You'd crash immediately!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Nightmare Dashboard ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python"># Too much detail exposed!
car.open_fuel_valve()
car.mix_air()
car.spark_plug_1.ignite()
car.piston_move()
# "Boom! Engine flooded!" 💥</code></pre>
        </div>

        <h3>✅ The Good Way (The Start Button)</h3>
        <p><strong>Abstraction</strong> hides the mess. You just press "Start".</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Simple Button ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">from abc import ABC, abstractmethod

class Vehicle(ABC):  # Abstract class
    @abstractmethod
    def start_engine(self):
        pass  # Just one simple command!

class Car(Vehicle):
    def start_engine(self):
        # All the messy details are HIDDEN here!
        print("🚗 Turning key, opening valves, firing sparks... VROOM!")

tesla = Car()
tesla.start_engine()  # 🚗 ... VROOM! Simple!</code></pre>
        </div>
        <p>Next: Inheritance! 👨‍👩‍👧</p>`
    },

    {
        id: 9,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Inheritance - The Royal Family Tree",
        difficulty: "Intermediate",
        description: "Children inherit traits from parents!",
        content: `<h2>👨‍👩‍👧 The Royal Family Tree</h2>
        
        <p>The King, Queen, and Prince all eat, sleep, and breathe.</p>
        
        <h3>❌ The Bad Way (Copy-Paste)</h3>
        <p>Scribes wrote "Breathing Instructions" for the King. Then rewrote them for the Queen. Then for the Prince.</p>
        <p><strong>Problem:</strong> If breathing changes (e.g., underwater), they have to update EVERYONE!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Repetitive Code ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Dog:
    def eat(self):
        print("Eating...")

class Cat:
    def eat(self):
        print("Eating...")
# We are rewriting the same code 100 times! 😫</code></pre>
        </div>

        <h3>✅ The Good Way (Inheritance)</h3>
        <p>Create a Parent "Animal". Dog and Cat inherit from it. ONE place to update!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Inheritance ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Animal:  # Parent
    def eat(self):
        print("Nom nom nom...")

class Dog(Animal):  # Child
    def bark(self):
        print("WOOF!")

buddy = Dog()
buddy.eat()   # Inherited from Animal!
buddy.bark()  # Dog's own method</code></pre>
        </div>
        <p>Next: Method Overriding! 🥊</p>`
    },

    {
        id: 10,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Method Overriding - Surpassing the Master",
        difficulty: "Intermediate",
        description: "Change inherited behavior to fit your needs!",
        content: `<h2>🥊 The Apprentice Surpasses Master</h2>
        
        <p>The Parent "Character" attack does 10 damage. But the "Warrior" wants to be stronger!</p>
        
        <h3>❌ The Bad Way (Stuck in the Past)</h3>
        <p>If you don't override, the Warrior hits like a pillow (10 damage). A dragon laughs at him!</p>

        <h3>✅ The Good Way (Overriding)</h3>
        <p>The Warrior says: "I will use my OWN attack method!"</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Overriding ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Character:
    def attack(self):
        return "Slaps with a glove (2 dmg)"

class Warrior(Character):
    def attack(self):  # OVERRIDE!
        return "Smash with Hammer! (50 dmg) 🔨"

c = Character()
w = Warrior()

print(c.attack()) # Slaps with a glove (2 dmg)
print(w.attack()) # Smash with Hammer! (50 dmg) 🔨</code></pre>
        </div>
        <p>Next: Polymorphism! 🦎</p>`
    },

    {
        id: 11,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Polymorphism - The Shapeshifter",
        difficulty: "Intermediate",
        description: "One interface, many forms!",
        content: `<h2>🦎 The Shapeshifter</h2>
        
        <p>You want to calculate the area of 50 different shapes.</p>
        
        <h3>❌ The Bad Way (If-Else Hell)</h3>
        <p>You have to check the type of EVERY SINGLE shape!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Nightmare ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">shapes = [circle, rect, triangle]

for s in shapes:
    if type(s) == Circle:
        print(s.radius * 3.14)
    elif type(s) == Rect:
        print(s.w * s.h)
    elif type(s) == Triangle:
        print(0.5 * s.b * s.h)
    # If you add a Hexagon, you must edit this code! 😫</code></pre>
        </div>

        <h3>✅ The Good Way (Polymorphism)</h3>
        <p>You just ask the shape: "What is your area?" and it KNOWS!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Flexible Way ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Circle:
    def area(self): return 10
class Rect:
    def area(self): return 20

shapes = [Circle(), Rect()]

for s in shapes:
    # JUST ONE LINE! Works for any shape!
    print(s.area())</code></pre>
        </div>
        <p>Next: Composition! 🧱</p>`
    },

    {
        id: 12,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Composition - Building with Blocks",
        difficulty: "Intermediate",
        description: "HAS-A is often better than IS-A!",
        content: `<h2>🧱 Building with Blocks</h2>
        
        <p>A Car needs an Engine. Should a Car INHERIT from Engine?</p>
        
        <h3>❌ The Bad Way (Weird Inheritance)</h3>
        <p><code>class Car(Engine): ...</code></p>
        <p>This means a Car <strong>IS</strong> an Engine. That's wrong! If you swap the engine, do you swap the car?</p>

        <h3>✅ The Good Way (Composition)</h3>
        <p>A Car <strong>HAS</strong> an Engine. Put the Engine INSIDE the Car!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Modular Design ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Engine:
    def start(self): print("Vroom!")

class Wheels:
    def roll(self): print("Rolling...")

class Car:
    def __init__(self):
        # The Car HAS parts. It is MADE of parts.
        self.engine = Engine()
        self.wheels = Wheels()
    
    def drive(self):
        self.engine.start()
        self.wheels.roll()

c = Car()
c.drive()</code></pre>
        </div>
        <p>Next: Choosing wisely! 🧠</p>`
    },

    {
        id: 13,
        module: 2,
        moduleName: "The Four Pillars",
        title: "Four Pillars Mastered - Choosing Wisely",
        difficulty: "Intermediate",
        description: "When to use each pillar - real-world guidance!",
        content: `<h2>🧠 The Wisdom of Choice</h2>
        
        <h3>❌ The Bad Way (The God Object)</h3>
        <p>Creating one giant class called <code>System</code> that does EVERYTHING. It has 5000 lines and is impossible to read!</p>

        <h3>✅ The Good Way (Separation of Concerns)</h3>
        <p>Use the right tool for the job!</p>
        
        <div class="callout callout-insight">
            <div class="callout-header"><span class="callout-icon">📚</span><span>Cheat Sheet</span></div>
            <div class="callout-content">
                <ul>
                    <li><strong>🔒 Encapsulation</strong>: ALWAYS! Protect your data.</li>
                    <li><strong>👨‍👩‍👧 Inheritance</strong>: ONLY when "IS-A" is 100% true forever. (Dog is Animal).</li>
                    <li><strong>🧱 Composition</strong>: For "HAS-A" relationships. (Car has Engine).</li>
                    <li><strong>🦎 Polymorphism</strong>: When you want to treat different things the same way.</li>
                </ul>
            </div>
        </div>

        <h2>🎉 Module 2 Complete!</h2><p>You've mastered the Four Pillars of OOP! Next: <strong>Advanced Concepts</strong>! 🚀</p>`
    },

    // ==================== MODULE 3: ADVANCED CONCEPTS ====================

    {
        id: 14,
        module: 3,
        moduleName: "Advanced Concepts",
        title: "The Royal Contracts - Interfaces",
        difficulty: "Advanced",
        description: "The Royal Architect demands all builders follow the rules! Learn about Interfaces and Abstract Base Classes.",
        content: `<h2>📜 The Royal Contracts</h2>
        
        <p>The Kingdom was growing fast! Builders were making houses WITHOUT doors! 😱</p>

        <h3>❌ The Bad Way (The Lawless Builders)</h3>
        <p>Builders create "Houses" that are missing walls or doors. People get trapped inside!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Chaos Construction ❌</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Hut:
    def sleep(self): print("Sleeping...")
    # Forgot open_door!
    # Forgot get_address!

# King tries to inspect...
h = Hut()
# h.open_door() -> ERROR! 💥</code></pre>
        </div>

        <h3>✅ The Good Way (Interfaces/ABCs)</h3>
        <p>The King issues a <strong>Contract (Interface)</strong>. "If you want to build, you MUST have a door!"</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Royal Law ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">from abc import ABC, abstractmethod

# The Contract
class Building(ABC):
    @abstractmethod
    def open_door(self): pass  # Must implement!

class Castle(Building):
    def open_door(self):
        print("🏰 Drawbridge lowering!")

# class Hut(Building): pass 
# ERROR! Can't create Hut without open_door! Safe! 🛡️</code></pre>
        </div>
        <p>Next: The Web of Relationships! 🕸️</p>`
    },

    {
        id: 15,
        module: 3,
        moduleName: "Advanced Concepts",
        title: "The Web of Relationships",
        difficulty: "Advanced",
        description: "Understand how objects relate to each other: Association, Aggregation, and Composition.",
        content: `<h2>🕸️ The Web of Relationships</h2>
        <p>Not all friends are family! Objects relate in different ways.</p>

        <h3>❌ The Bad Way (The Lonely String)</h3>
        <p>Representing a heart as just a text variable. It has no behavior!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Human:
    def __init__(self):
        self.heart = "Just a string" # Can't beat!</code></pre>
        </div>

        <h3>✅ The Good Way (Composition - The Strong Bond) 🧠</h3>
        <p><strong>Composition:</strong> One object IS PART OF another. If Human dies, Heart dies.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Composition ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Heart:
    def beat(self): print("💓 Thump-thump!")

class Human:
    def __init__(self):
        self.heart = Heart()  # Created INSIDE!
    
    def live(self):
        self.heart.beat()

p = Human()
p.live() 
# If 'p' is deleted, 'heart' is destroyed too!</code></pre>
        </div>
        
        <h3>✅ Aggregation (The Weak Bond) 🧢</h3>
        <p><strong>Aggregation:</strong> Driver and Car. If Car is destroyed, Driver survives!</p>
        <p>Next: The Twins Who Act Differently! 👯</p>`
    },

    {
        id: 16,
        module: 3,
        moduleName: "Advanced Concepts",
        title: "The Twins Who Act Differently",
        difficulty: "Advanced",
        description: "Method Overloading and Overriding - same name, different actions!",
        content: `<h2>👯 The Twins Who Act Differently</h2>
        
        <h3>❌ The Bad Way (Name Confusion)</h3>
        <p>Creating 50 functions for slightly different things.</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Messy Names ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">def attack_sword(): ...
def attack_bow(): ...
def attack_magic(): ...
# Hard to remember them all!</code></pre>
        </div>

        <h3>✅ The Good Way (Overloading) 🎛️</h3>
        <p>Use ONE name, but handle different inputs! (Python uses Default Arguments).</p>
        
        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Magic Potion ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class PotionMaster:
    # One method to rule them all!
    def brew(self, ing1, ing2=None):
        if ing2:
            print(f"🧪 Mixed {ing1} + {ing2}")
        else:
            print(f"💧 Just brewed {ing1}")

snape = PotionMaster()
snape.brew("Newt Eye")
snape.brew("Frog Leg", "Bat Wing")</code></pre>
        </div>
        <p>Next: The Kingdom's Shared Resources! 🕰️</p>`
    },

    {
        id: 17,
        module: 3,
        moduleName: "Advanced Concepts",
        title: "The Kingdom's Shared Resources",
        difficulty: "Advanced",
        description: "Learn about Static Variables and Methods - things that belong to the Kingdom, not a person!",
        content: `<h2>🕰️ The Town Clock</h2>
        
        <h3>❌ The Bad Way (Personal Clocks)</h3>
        <p>Every villager has their own watch. One says 12:00, another says 12:05. Chaos!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Desync! ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Villager:
    def __init__(self):
        self.time = "12:00" # Instance variable

v1 = Villager()
v2 = Villager()
v1.time = "1:00" 
# v2 still thinks it's 12:00! Missed the meeting!</code></pre>
        </div>

        <h3>✅ The Good Way (Static/Shared)</h3>
        <p>One Giant Clock in the square. If it changes, everyone sees it.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - The Town Clock ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class TownClock:
    time = "12:00 PM"  # STATIC (Shared)

print(TownClock.time) # 12:00 PM
TownClock.time = "1:00 PM"
# Now EVERYONE knows it's 1:00 PM!</code></pre>
        </div>
        <p>Next: Boxes Within Boxes! 📦</p>`
    },

    {
        id: 18,
        module: 3,
        moduleName: "Advanced Concepts",
        title: "Boxes Within Boxes - Nested Classes",
        difficulty: "Advanced",
        description: "Hiding a class INSIDE another class! Perfect for secret helpers.",
        content: `<h2>📦 The Secret Room</h2>
        
        <h3>❌ The Bad Way (Global Clutter)</h3>
        <p>Leaving "Batteries" lying around everywhere. Handlers trip over them.</p>

        <h3>✅ The Good Way (Nested Classes)</h3>
        <p>Put the <code>Battery</code> INSIDE the <code>Robot</code>. It belongs there!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Organized & Secure ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Robot:
    # Inner Class (Hidden away)
    class Battery:
        def charge(self): print("🔋 Charging...")

    def __init__(self):
        self.battery = self.Battery()
    
    def power_up(self):
        self.battery.charge()

robo = Robot()
robo.power_up()</code></pre>
        </div>
        <p>Next: Design Patterns! 🏗️</p>`
    },

    // ==================== MODULE 4: DESIGN PATTERNS ====================

    {
        id: 19,
        module: 4,
        moduleName: "Design Patterns",
        title: "The Pattern Library - Intro",
        difficulty: "Intermediate",
        description: "Why reinvent the wheel? Learn about Design Patterns - proven solutions to common problems.",
        content: `<h2>📚 The Pattern Library</h2>
        <p>The Royal Architects realized they were solving the SAME problems over and over again!</p>
        <p>They decided to write down the BEST solutions in a <strong>Magic Book of Patterns</strong>.</p>

        <h3>❌ The Bad Way (Reinventing the Wheel)</h3>
        <p>Making a unique, messy solution for every problem. "I'll fix this bridge with duct tape!"</p>

        <h3>✅ The Good Way (Using Patterns)</h3>
        <p>Using a proven blueprint. "Ah, the 'Suspension Bridge Pattern'. I'll use that."</p>
        
        <div class="callout callout-insight">
            <div class="callout-header">
                <span class="callout-icon">🏗️</span>
                <span>The Categories</span>
            </div>
            <div class="callout-content">
                <ul>
                    <li><strong>Creational:</strong> Creation (Factory, Singleton)</li>
                    <li><strong>Structural:</strong> Connection (Decorator, Adapter)</li>
                    <li><strong>Behavioral:</strong> Communication (Observer, State)</li>
                </ul>
            </div>
        </div>
        <p>Let's visit the Factory of Dreams! 🏭</p>`
    },

    {
        id: 20,
        module: 4,
        moduleName: "Design Patterns",
        title: "The Factory of Dreams",
        difficulty: "Intermediate",
        description: "The Factory Pattern: Create objects without specifying the exact class.",
        content: `<h2>🏭 The Factory of Dreams</h2>
        <p>You don't build the toy yourself; you just tell the factory: <em>"Make me a Robot!"</em></p>

        <h3>❌ The Bad Way (The If-Else Mess)</h3>
        <p>Every time you want a toy, you write logic. If you add "Car", you have to change your code everywhere!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Messy Client ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python"># Client code
type = "Robot"
if type == "Robot": toy = Robot()
elif type == "Doll": toy = Doll()
# ... repeated 100 times in your app!</code></pre>
        </div>

        <h3>✅ The Good Way (The Factory)</h3>
        <p>Move the creation logic into ONE place.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Clean Factory ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class ToyFactory:
    def get_toy(self, kind):
        if kind == "Robot": return Robot()
        elif kind == "Doll": return Doll()

# Client just calls the factory!
factory = ToyFactory()
toy = factory.get_toy("Robot")
toy.play()</code></pre>
        </div>
        <p>Next: The Decorator's Guild! 🎨</p>`
    },

    {
        id: 21,
        module: 4,
        moduleName: "Design Patterns",
        title: "The Decorator's Guild",
        difficulty: "Advanced",
        description: "The Decorator Pattern: Add powers to objects dynamically!",
        content: `<h2>🎨 The Decorator's Guild</h2>
        
        <h3>❌ The Bad Way (Accessory Explosion)</h3>
        <p>Creating a new class for every combination. <code>FireSword</code>, <code>IceSword</code>, <code>FireIceSword</code>, <code>PoisonFireSword</code>...</p>
        <p>You'll end up with 1,000 classes!</p>

        <h3>✅ The Good Way (Wrappers)</h3>
        <p>Wrap the object with a power up! <code>Fire(Ice(Sword()))</code>.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Decorators ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Sword:
    def damage(self): return 10

class FireDecorator:
    def __init__(self, weapon):
        self.weapon = weapon # Wrap it!
    
    def damage(self):
        return self.weapon.damage() + 5 # Add fire!

s = Sword()
fire_s = FireDecorator(s)
print(fire_s.damage()) # 15</code></pre>
        </div>
        <p>Next: The Observer's Network! 📡</p>`
    },

    {
        id: 22,
        module: 4,
        moduleName: "Design Patterns",
        title: "The Observer's Network",
        difficulty: "Advanced",
        description: "The Observer Pattern: Notify subscribers when something happens.",
        content: `<h2>📡 The Royal Messengers</h2>
        
        <h3>❌ The Bad Way (The Nagger)</h3>
        <p>Calling the King every second: "Is the pizza ready? Is the pizza ready?"</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Polling ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">while True:
    if king.is_pizza_ready():
         eat()
    sleep(1) # Wasting time!</code></pre>
        </div>

        <h3>✅ The Good Way (Don't Call Us, We'll Call You)</h3>
        <p>The King keeps a list of people. When Pizza is ready, HE tells THEM!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Observer ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class King:
    subscribers = []
    def subscribe(self, person):
        self.subscribers.append(person)
    
    def announce(self, msg):
        for p in self.subscribers:
            p.hear(msg)

king = King()
king.subscribe(Bob())
king.announce("Pizza!") # Bob is notified instantly!</code></pre>
        </div>
        <p>Next: The State Machine Kingdom! 🎭</p>`
    },

    {
        id: 23,
        module: 4,
        moduleName: "Design Patterns",
        title: "The State Machine Kingdom",
        difficulty: "Advanced",
        description: "The State Pattern: Objects act differently based on their mood.",
        content: `<h2>🎭 The Many Moods of the Hero</h2>
        
        <h3>❌ The Bad Way (If-Else Monster)</h3>
        <p>Checking the state everywhere!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Spaghetti Logic ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">def move(self):
    if self.state == "Healthy": run()
    elif self.state == "Injured": walk()
    elif self.state == "Dead": pass
    # Hard to add new states!</code></pre>
        </div>

        <h3>✅ The Good Way (State Objects)</h3>
        <p>Delegate the action to the State Object.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - State Pattern ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class Healthy:
    def move(self): print("Run!")

class Injured:
    def move(self): print("Crawl...")

class Hero:
    state = Healthy()
    def move(self): self.state.move()

h = Hero()
h.move() # Run!
h.state = Injured()
h.move() # Crawl...</code></pre>
        </div>
        <p>Next: The Singleton Throne! 👑</p>`
    },

    {
        id: 24,
        module: 4,
        moduleName: "Design Patterns",
        title: "The Singleton Throne",
        difficulty: "Advanced",
        description: "The Singleton Pattern: Ensuring there is only ONE of something.",
        content: `<h2>👑 The Singleton Throne</h2>
        
        <h3>❌ The Bad Way (The Clone Army)</h3>
        <p>Creating 50 Database connections. The server crashes!</p>

        <h3>✅ The Good Way (The Immortal King)</h3>
        <p>Ensure only ONE instance exists, no matter how many times you ask.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Singleton ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">class King:
    _instance = None
    
    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

k1 = King()
k2 = King()
print(k1 is k2) # True (Same Object)</code></pre>
        </div>
        
        <h2>🎉 Module 4 Complete!</h2>
        <p>You've mastered Design Patterns! Next: <strong>SOLID Principles</strong>! 🛡️</p>`
    },

    // ==================== MODULE 5: SOLID PRINCIPLES ====================

    {
        id: 25,
        module: 5,
        moduleName: "SOLID Principles",
        title: "One Job, One Master (SRP)",
        difficulty: "Expert",
        description: "Single Responsibility Principle: A class should have only one reason to change.",
        content: `<h2>👨‍🍳 The Chef Who Did Too Much</h2>
        
        <h3>❌ The Bad Way (The God Object)</h3>
        <p>A Chef who cooks, cleans, and does taxes. If tax laws change, the Chef stops cooking to learn the new laws.</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - The God Class ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Chef:
    def cook(self): ...
    def clean(self): ...
    def do_taxes(self): ...
# Too many responsibilities!</code></pre>
        </div>

        <h3>✅ The Good Way (Specialization)</h3>
        <p>One person, One Job.</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - SRP ✅</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Chef:
    def cook(self): ...
class Janitor:
    def clean(self): ...
class Accountant:
    def do_taxes(self): ...</code></pre>
        </div>
        <p>Next: Open Gates, Closed Walls! 🏰</p>`
    },

    {
        id: 26,
        module: 5,
        moduleName: "SOLID Principles",
        title: "Open Gates, Closed Walls (OCP)",
        difficulty: "Expert",
        description: "Open/Closed Principle: Open for extension, closed for modification.",
        content: `<h2>🏰 The Castle Wall</h2>
        
        <h3>❌ The Bad Way (Breaking the Wall)</h3>
        <p>Modifying the core class every time you want a new feature. You might break it!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Fragile Code ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Payment:
    def pay(self, type):
        if type == "Credit": ...
        elif type == "PayPal": ...
        # Need to edit this file for every new method!</code></pre>
        </div>

        <h3>✅ The Good Way (Extensions)</h3>
        <p>Add new code, don't touch the old code!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - OCP ✅</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Payment(ABC):
    @abstractmethod
    def pay(self): pass

class Credit(Payment):
    def pay(self): ...

# Want Bitcoin? Create a new class!
# No need to touch Credit or Payment!
class Bitcoin(Payment): ...</code></pre>
        </div>
        <p>Next: The Substitution Law! 🎭</p>`
    },

    {
        id: 27,
        module: 5,
        moduleName: "SOLID Principles",
        title: "The Substitution Law (LSP)",
        difficulty: "Expert",
        description: "Liskov Substitution Principle: Children must behave like their parents.",
        content: `<h2>🦆 The Rubber Duck Problem</h2>
        
        <h3>❌ The Bad Way (The Fake Duck)</h3>
        <p>A "Rubber Duck" inherits from "Duck", but it can't fly. If you toss it off a roof, it won't fly, it will fall!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Crash! ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Duck:
    def fly(self): ...

class RubberDuck(Duck):
    def fly(self): raise Error("Can't fly!")

def make_fly(d): d.fly()
# make_fly(RubberDuck()) -> CRASH!</code></pre>
        </div>

        <h3>✅ The Good Way (Honest Types)</h3>
        <p>Only inherit if you can do EVERYTHING the parent does.</p>
        <p>Next: Many Small Doors! 🚪</p>`
    },

    {
        id: 28,
        module: 5,
        moduleName: "SOLID Principles",
        title: "Many Small Doors (ISP)",
        difficulty: "Expert",
        description: "Interface Segregation Principle: Don't force clients to use methods they don't need.",
        content: `<h2>🎛️ The Giant Remote Control</h2>
        
        <h3>❌ The Bad Way (Bloated Interface)</h3>
        <p>A "Machine" interface that forces a Printer to also Scan and Fax.</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Forced Methods ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Machine:
    def print(self): pass
    def scan(self): pass

class OldPrinter(Machine):
    def print(self): print("Printing")
    def scan(self): raise Error("I can't scan!")</code></pre>
        </div>

        <h3>✅ The Good Way (Small Interfaces)</h3>
        <p>Break it down! <code>Printer</code>, <code>Scanner</code>.</p>
        <p>Next: Depend on Promises! 🤝</p>`
    },

    {
        id: 29,
        module: 5,
        moduleName: "SOLID Principles",
        title: "Depend on Promises (DIP)",
        difficulty: "Expert",
        description: "Dependency Inversion Principle: Depend on abstractions, not concrete classes.",
        content: `<h2>🔌 The Power Socket</h2>
        
        <h3>❌ The Bad Way (Hardwired)</h3>
        <p>Soldering a lamp directly to the wall. You can't unplug it!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Rigid Code ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Switch:
    def __init__(self):
        self.bulb = LightBulb() # Stuck with Bulb!</code></pre>
        </div>

        <h3>✅ The Good Way (Plugs & Sockets)</h3>
        <p>Use a plug (Interface). You can plug in a Lamp, a Fan, or a Toaster!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Flexible DIP ✅</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">class Switch:
    def __init__(self, device: Switchable):
        self.device = device # Can be anything!

s = Switch(Fan())
s.operate()</code></pre>
        </div>

        <h2>🎉 Module 5 Complete!</h2>
        <p>You've mastered SOLID! Next: <strong>Architecture</strong> - Building the Kingdom! 🏙️</p>`
    },

    // ==================== MODULE 6: ARCHITECTURE ====================

    {
        id: 30,
        module: 6,
        moduleName: "Architecture",
        title: "The Clean Kingdom",
        difficulty: "Expert",
        description: "Clean Architecture: Protecting your core logic from the outside world.",
        content: `<h2>🏰 The Layers of the Kingdom</h2>
        <p>A Kingdom has layers. The King (Core Logic) sits in the center.</p>
        <p>He doesn't care if the roads are made of stone or dirt (Database). He just rules!</p>

        <h3>❌ The Bad Way (The Spaghetti Castle)</h3>
        <p>The King is digging ditches! The Blacksmith is baking bread! Chaos!</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Mixed Concerns ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python"># UI code calls SQL directly! Scrambled eggs!
def register_user():
    name = input("Name: ")
    # SQL inside the UI function?! 😱
    db.execute(f"INSERT INTO users VALUES ('{name}')")</code></pre>
        </div>
        
        <h3>✅ The Good Way (The Onion Rule) 🧅</h3>
        <p>Dependencies point INWARD. The Core doesn't know about the Database. The Database knows about the Core.</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Clean Architecture ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python"># 1. CORE (Pure Logic) - Knows NOTHING about SQL
class User:
    def __init__(self, name):
        self.name = name

# 2. USE CASE (Rules) - Uses Abstract Repo
class RegisterUser:
    def __init__(self, repo):
        self.repo = repo
        
    def execute(self, name):
        user = User(name)
        self.repo.save(user)

# 3. INFRASTRUCTURE (Details) - Implements Repo
class SQLRepo:
    def save(self, user):
        print(f"INSERT INTO users VALUES ('{user.name}')")</code></pre>
        </div>
        <p>Next: The Traffic Controller! 🚦</p>`
    },

    {
        id: 31,
        module: 6,
        moduleName: "Architecture",
        title: "The Traffic Controller (MVC)",
        difficulty: "Expert",
        description: "Model-View-Controller: Organizing your app into logical sections.",
        content: `<h2>🚦 The Traffic Controller</h2>
        
        <h3>❌ The Bad Way (The Mixed-Up Chef)</h3>
        <p>Imagine a waiter who takes your order, cooks the food, AND eats it for you.</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - Messy Code ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python"># Everything in one pile
price = 10
print(f"Pizza costs \${price}") # View mixed with Data!</code></pre>
        </div>

        <h3>✅ The Good Way (MVC)</h3>
        <ul>
            <li><strong>Model:</strong> The Data ("I am a Pizza") 🍕</li>
            <li><strong>View:</strong> The Display ("Here is a picture of Pizza") 🖼️</li>
            <li><strong>Controller:</strong> The Boss ("Show the Pizza!") 🧠</li>
        </ul>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - MVC ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python"># MODEL
class Pizza:
    def get_price(self): return 10

# VIEW
class PizzaView:
    def show(self, price): print(f"💰 Cost: \${price}")

# CONTROLLER
class Controller:
    def run(self):
        p = Pizza()
        v = PizzaView()
        v.show(p.get_price())

c = Controller()
c.run()</code></pre>
        </div>
        <p>Next: The Trading Villages! 🏘️</p>`
    },

    {
        id: 32,
        module: 6,
        moduleName: "Architecture",
        title: "The Trading Villages (Microservices)",
        difficulty: "Expert",
        description: "Microservices vs Monolith: Breaking the castle into specialized villages.",
        content: `<h2>🏘️ The Trading Villages</h2>
        
        <h3>❌ The Monolith Castle (The Bad Way)</h3>
        <p><strong>One Huge Castle.</strong> 5,000 people live inside.</p>
        <p>If the kitchen catches fire, the <strong>WHOLE CASTLE BURNS DOWN!</strong> 🔥</p>

        <h3>✅ Microservices (The Good Way?)</h3>
        <p><strong>A Village of Specialists.</strong></p>
        <ul>
            <li>Village of Bakers (User Service)</li>
            <li>Village of Smiths (Payment Service)</li>
        </ul>
        <p>They trade with wagons (HTTP Requests). If the Bakery burns, the Smiths are fine! 🛠️</p>

        <div class="callout callout-warning">
            <div class="callout-header">
                <span class="callout-icon">⚠️</span>
                <span>Complexity Warning</span>
            </div>
            <div class="callout-content">
                <p>Microservices are HARD. Lost wagons (Network Failures). Slow horses (Latency). Don't start with this unless you are HUGE!</p>
            </div>
        </div>

        <p>Next: The Royal Archives! 📜</p>`
    },

    // ==================== MODULE 7: PRODUCTION ====================

    {
        id: 33,
        module: 7,
        moduleName: "Production",
        title: "The Royal Archives (Logging)",
        difficulty: "Pro",
        description: "Logging: Keeping a history so you can solve mysteries later.",
        content: `<h2>📜 Sherlock Holmes Needs Clues</h2>
        
        <h3>❌ The Bad Way (The Silent Crash)</h3>
        <p>Your app crashes at 3 AM. No error message. The user just says "It broke".</p>
        <div class="code-block">
            <div class="code-header"><span class="code-language">Python - No Clues ❌</span><button class="copy-button" onclick="copyCode(this)">📋 Copy</button></div>
            <pre><code class="language-python">try:
    gold / 0
except:
    print("Oops") # Printed to nowhere! Logic Lost!</code></pre>
        </div>

        <h3>✅ The Good Way (Logging)</h3>
        <p>The Royal Scribe records everything!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Logging ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">import logging
logging.basicConfig(level=logging.ERROR)

try:
    1 / 0
except ZeroDivisionError:
    logging.error("💥 Math Explosion!", exc_info=True)
# Writes timestamp, error, and line number to a file! 📂</code></pre>
        </div>
        <p>Next: The Guard Dogs! 🐕</p>`
    },

    {
        id: 34,
        module: 7,
        moduleName: "Production",
        title: "The Guard Dogs (Testing)",
        difficulty: "Pro",
        description: "Unit Testing: Training dogs to bite bugs before they enter the castle.",
        content: `<h2>🐕 Guard Dogs (Tests)</h2>
        
        <h3>❌ The Bad Way (Testing in Production)</h3>
        <p>"I'll just change this code and deploy it. What could go wrong?"</p>
        <p>USER: "My money is gone!" 💸</p>

        <h3>✅ The Good Way (Unit Tests)</h3>
        <p>Release the Guard Dogs (Tests) BEFORE you open the gates!</p>

        <div class="code-block">
            <div class="code-header">
                <span class="code-language">Python - Unit Tests ✅</span>
                <button class="copy-button" onclick="copyCode(this)">📋 Copy</button>
            </div>
            <pre><code class="language-python">import unittest

def add(a, b): return a + b

class TestMath(unittest.TestCase):
    def test_add(self):
        # The Guard Dog Checks:
        self.assertEqual(add(2, 2), 4) # ✅ Pass
        self.assertNotEqual(add(2, 2), 5) # ✅ Pass

# If this fails, the deploy stops! 🛑</code></pre>
        </div>
        
        <p>Next: The Infinite Kingdom! 👑</p>`
    },

    {
        id: 35,
        module: 7,
        moduleName: "Production",
        title: "The Infinite Kingdom (Scaling)",
        difficulty: "Pro",
        description: "Scaling & Optimization: Growing from a village to an Empire.",
        content: `<h2>👑 The Infinite Kingdom</h2>
        <p>Your App is popular! Millions of users! The gates are jammed!</p>
        
        <h3>❌ The Bad Way (The Giant Horse - Vertical Scaling)</h3>
        <p>Buying a BIGGER server. One giant horse.</p>
        <p>Eventually, you can't find a bigger horse! And if it gets sick, you are doomed!</p>

        <h3>✅ The Good Way (Army of Horses - Horizontal Scaling)</h3>
        <p>Buying 100 NORMAL horses. If one gets sick, the others keep pulling!</p>

        <h3>The Strategy:</h3>
        <ol>
            <li><strong>Load Balancer:</strong> The Gatekeeper sending traffic to different servers. 🚪</li>
            <li><strong>Caching:</strong> Storing popular data (Bread) near the gate. 🍞</li>
            <li><strong>Replication:</strong> Multiple copies of the Database (Books). 📚</li>
        </ol>

        <div style="margin-top: 40px; padding: 30px; background: linear-gradient(135deg, #10B981 0%, #059669 100%); border-radius: 12px; text-align: center;">
            <h1 style="color: white; margin-bottom: 10px;">🎓 CONGRATULATIONS!</h1>
            <p style="color: white; font-size: 1.2rem;">You have completed the OOP Masterclass!</p>
            <p style="color: white; opacity: 0.9;">You started as a Novice, and now you are a Master of the Object-Oriented Kingdom.</p>
            <div style="font-size: 3rem; margin: 20px;">🏆</div>
            <p style="color: white;">Go forth and build amazing things!</p>
        </div>`
    }
];

// ============ STATE AND UTILITY FUNCTIONS ============
let state = {
    currentLesson: 1,
    completedLessons: new Set(),
    theme: 'dark',
    searchTerm: ''
};

function saveState() {
    localStorage.setItem('oopMasterclassState', JSON.stringify({
        currentLesson: state.currentLesson,
        completedLessons: Array.from(state.completedLessons),
        theme: state.theme
    }));
}

function loadState() {
    try {
        const saved = localStorage.getItem('oopMasterclassState');
        if (saved) {
            const parsed = JSON.parse(saved);
            state.currentLesson = parsed.currentLesson || 1;
            state.completedLessons = new Set(parsed.completedLessons || []);
            state.theme = parsed.theme || 'dark';
        }
    } catch (e) {
        console.error('Error loading state:', e);
        // Reset state on error
        state = {
            currentLesson: 1,
            completedLessons: new Set(),
            theme: 'dark',
            searchTerm: ''
        };
    }
}

function getModules() {
    const modules = {};
    LESSONS.forEach(lesson => {
        if (!modules[lesson.module]) {
            modules[lesson.module] = {
                id: lesson.module,
                name: lesson.moduleName,
                lessons: []
            };
        }
        modules[lesson.module].lessons.push(lesson);
    });
    return Object.values(modules);
}

function getLesson(id) {
    return LESSONS.find(lesson => lesson.id === id);
}

function getNextLesson(currentId) {
    const currentIndex = LESSONS.findIndex(l => l.id === currentId);
    return currentIndex < LESSONS.length - 1 ? LESSONS[currentIndex + 1] : null;
}

function getPreviousLesson(currentId) {
    const currentIndex = LESSONS.findIndex(l => l.id === currentId);
    return currentIndex > 0 ? LESSONS[currentIndex - 1] : null;
}

function calculateProgress() {
    return Math.round((state.completedLessons.size / LESSONS.length) * 100);
}

function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    const modules = getModules();

    nav.innerHTML = modules.map(module => `
    <div class="module ${state.currentLesson && getLesson(state.currentLesson).module === module.id ? 'expanded' : ''}" data-module="${module.id}">
      <div class="module-header" onclick="toggleModule(${module.id})">
        <span class="module-title">
          <span class="module-icon">${getModuleIcon(module.id)}</span>
          ${module.name}
        </span>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="module-badge">${module.lessons.length}</span>
          <span class="chevron">▶</span>
        </div>
      </div>
      <div class="lesson-list">
        ${module.lessons.map(lesson => `
          <div class="lesson-item ${lesson.id === state.currentLesson ? 'active' : ''} ${state.completedLessons.has(lesson.id) ? 'completed' : ''}" 
               onclick="loadLesson(${lesson.id})">
            ${lesson.title}
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

function renderLesson(lessonId) {
    const lesson = getLesson(lessonId);
    if (!lesson) return;

    const contentArea = document.getElementById('contentArea');
    const nextLesson = getNextLesson(lessonId);
    const prevLesson = getPreviousLesson(lessonId);

    contentArea.innerHTML = `
    <div class="lesson-header">
      <div class="lesson-meta">
        <span class="badge badge-module">${lesson.moduleName}</span>
        <span class="badge badge-difficulty">⭐ ${lesson.difficulty}</span>
      </div>
      <h1 class="lesson-title">${lesson.title}</h1>
      <p class="lesson-description">${lesson.description}</p>
    </div>
    
    <div class="lesson-content">
      ${lesson.content}
    </div>
    
    <div class="lesson-navigation">
      ${prevLesson ? `
        <div class="nav-button nav-button-prev" onclick="loadLesson(${prevLesson.id})">
          <div>
            <div class="nav-label">← Previous</div>
            <div class="nav-title">${prevLesson.title}</div>
          </div>
        </div>
      ` : '<div></div>'}
      
      ${nextLesson ? `
        <div class="nav-button nav-button-next" onclick="loadLesson(${nextLesson.id})">
          <div>
            <div class="nav-label">Next →</div>
            <div class="nav-title">${nextLesson.title}</div>
          </div>
        </div>
      ` : ''}
    </div>
  `;

    state.completedLessons.add(lessonId);
    saveState();
    updateProgress();
    contentArea.scrollIntoView({ behavior: 'smooth', block: 'start' });

    if (window.Prism) {
        Prism.highlightAll();
    }
}

function updateProgress() {
    const progress = calculateProgress();
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = progress + '%';
}

function getModuleIcon(moduleId) {
    const icons = {
        1: '🎯',
        2: '🏛️',
        3: '🚀',
        4: '🎨',
        5: '💎',
        6: '🏗️',
        7: '🏆'
    };
    return icons[moduleId] || '📚';
}

function toggleModule(moduleId) {
    const module = document.querySelector(`.module[data-module="${moduleId}"]`);
    module.classList.toggle('expanded');
}

function loadLesson(lessonId) {
    state.currentLesson = lessonId;
    saveState();
    renderSidebar();
    renderLesson(lessonId);
}

function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    document.getElementById('themeIcon').textContent = state.theme === 'dark' ? '🌙' : '☀️';
    document.getElementById('themeText').textContent = state.theme === 'dark' ? 'Dark' : 'Light';
    saveState();
}

function searchLessons(term) {
    state.searchTerm = term.toLowerCase();

    if (!term) {
        renderSidebar();
        return;
    }

    const nav = document.getElementById('sidebarNav');
    const modules = getModules();

    nav.innerHTML = modules.map(module => {
        const matchingLessons = module.lessons.filter(lesson =>
            lesson.title.toLowerCase().includes(state.searchTerm) ||
            lesson.description.toLowerCase().includes(state.searchTerm)
        );

        if (matchingLessons.length === 0) return '';

        return `
      <div class="module expanded" data-module="${module.id}">
        <div class="module-header">
          <span class="module-title">
            <span class="module-icon">${getModuleIcon(module.id)}</span>
            ${module.name}
          </span>
          <span class="module-badge">${matchingLessons.length}</span>
        </div>
        <div class="lesson-list">
          ${matchingLessons.map(lesson => `
            <div class="lesson-item ${lesson.id === state.currentLesson ? 'active' : ''} ${state.completedLessons.has(lesson.id) ? 'completed' : ''}" 
                 onclick="loadLesson(${lesson.id})">
              ${lesson.title}
            </div>
          `).join('')}
        </div>
      </div>
    `;
    }).join('');
}

function copyCode(button) {
    const codeBlock = button.parentElement.nextElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '✅ Copied!';
        button.style.background = 'var(--success)';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = 'var(--primary-500)';
        }, 2000);
    });
}

// ==== INITIALIZATION ====
console.log('🚀 App.js starting execution...');

document.addEventListener('DOMContentLoaded', () => {
    try {
        console.log('DOM Content Loaded - Initializing...');
        loadState();
        document.documentElement.setAttribute('data-theme', state.theme);
        document.getElementById('themeIcon').textContent = state.theme === 'dark' ? '🌙' : '☀️';
        document.getElementById('themeText').textContent = state.theme === 'dark' ? 'Dark' : 'Light';

        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                searchLessons(e.target.value);
            });
        }

        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
        }

        renderSidebar();
        renderLesson(state.currentLesson);
        updateProgress();

        console.log('🎉 OOP Masterclass loaded! 2 lessons ready, 33 more coming!');
    } catch (e) {
        console.error('CRITICAL ERROR during initialization:', e);
        alert('Something went wrong starting the app. Check console for details.');
    }
});
