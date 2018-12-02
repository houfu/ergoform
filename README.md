# ErgoForm

### "I think I am a form, therefore I am a form."

Ergoform is a framework for writing the layout of a form in a readable manner, which is then parsed into a HTML5 form. Using a syntax that is familiar to JSON, Ergoform hopes to make form writing immediately straightforward, and immediately powerful at the same time.

#### How does Ergoform work?

**Easy as pie.** Writing a line that looks like this `"input-box": "Enter a name here"` will simply give you an input box labelled "Enter a name here". Every form item has a shortcut like this, meaning you can write a form in minutes!

**Simplicity can give way to power**. `"input-box": {"label": "Enter your email here", "help": "Letting us have your email will enable us to contact you if we have to!", "inputType": "email"}` will give you an input box labelled "Enter your email here", a little help message underneath it and a HTML5 input box that accept email addresses!

**Mix the simple with the powerful.** There is nothing stopping you from having several items, each in their express and full form.

```
"text-header": "My Ergoform"
"input-box": "Enter a name here"
"input-box": {"label": "Enter your email here", "help": "Letting us have your email will enable us to contact you if we have to!", "inputType": "email"}
"submit-button": "Submit" 
```

#### FAQ

1. **What is the current status of the Project?** At Ergoform version 0.8.1, the project is in Alpha. I am currently working on an Angular implementation of the Ergoform, so this is pretty half-baked at the moment. For now, the base library is complete for a basic implementation, and I would like to work on this before adding any new features. 

2. **Why Ergoform?** I found myself repeatedly tying html code for my forms. It's painful, tiresome, inconsistent and very difficult to maintain. Splitting the form to its business logic and its presentation will also help to make forms easier to test and troubleshoot.

3. **Can I contribute?** To a half-baked project? I will read issues and fix bugs with the current library, but feature requests and opinions will have to wait. It's gotta walk before it can fly. =P


