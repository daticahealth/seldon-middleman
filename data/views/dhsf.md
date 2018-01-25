## What is the Digital Health Success Framework?
The Digital Health Success Framework (DHSF) is a simple guide for healthcare products. There are many resources out there to to help turn ideas into products or businesses, but things are a little different in the wild wild west of digital health technology. There are considerations in this industry not found in any others, and no one has time to learn them all. We've simplified the unique complexities with this framework to help you get your digital health products from napkin scribble to market without any hitches.

It purposefully has a narrow scope, giving guidance around five main topics:

* Compliance: Understanding why HIPAA matters, and how to make it an asset, not a liability.
* Infrastructure: Adopting, and gaining the advantages of, the cloud in healthcare is uniquely complex but possible.
* Application: How to ensure your application meets the security requirements for healthcare data.
* Integration: Exchanging data with legacy systems is a critical requirement for digital health success. But it's also a mess. We'll open the black box and explain how to make sense of it.
* Pilots: B2C is possible, but B2B is the scaling model that usually succeeds. Buyers are often health systems. We'll talk through the importance of pilots and how to set them up for success.

### What this framework is not

Don't mistake the DHSF as an all-encompassing guide to successful company-building. A successful business succeeds along innumerable dimensions, outside of compliance, infrastructure, or integration. This framework is not those ingredients:

* Fundraising advice
* Company formulation practices
* Lean startup principles
* How to hire
* How to develop a strategy
* And so on

That's what incubators like YCombinator or Gener8tor do, or programs like Cedars-Sinai+TechStars, focus on..

Specific to healthcare, this framework does not go deep into FDA regulations or life science particulars like GxP. While there is significant overlap with our expertise in compliance, we aren't yet experts in those arenas to provide a detailed guide on navigating the FDA or meeting GxP requirements. We will furnish helpful external resources to learn more elsewhere, however.

### How We Became Experts
Over the last 4-plus years, Datica has engaged with thousands of digital health organizations, from single-founder startups to groups within Fortune 100 companies like Johnson & Johnson or UnitedHealthcare. We often with them as they are figuring out how to deal with HIPAA compliance or data exchange. Some were far enough along with their idea to become customers, but many did not as they first searched for traction.

Over the course of several thousand conversations, we started to see clear patterns emerge around topics like technology, infrastructure, compliance, and interoperability. This framework is the distillation of what matters to the success of digital health products.

Datica is not going to pretend we know the entire scope of what it takes to make a successful business—things like capitalization strategies or Lean Startup advice—or the best methodologies for product development—like debating waterfall vs. agile, or outcome-driven innovation. But we _do_ have one of the most credible points of view on the technological underpinnings of digital health. Companies and teams, ideas and innovations, can look to this framework to obtain a stronger handle on an intelligent way to manage the underlying burdens unique to digital health products.

[sidebar:]
### Company Snapshot
*(Current as of May 1, 2017)*

* 3,196 unique organizations, companies, groups, and individuals with which we have engaged via a business relationship. Each one we heard their story, understood their needs, and observed their trajectory.
* Hundreds of digital health customers
* More than 200 integration partners

----

## Compliance Strategy
For better or worse, healthcare is a highly-regulated industry with HIPAA as the tentpole framework. Compliance is the place to start. To start your strategy anywhere else is a mistake. Your compliance strategy should come first.

### Does HIPAA matter?
HIPAA kicks in when a digital health product handles Protected Health Information (PHI). There are several different categories of PHI, like someone's name, home address, or phone number. When a digital health product stores, processes, or transmits PHI, HIPAA asserts rules to how it should handle a multitude of security, privacy, and policy procedures, called "controls". Demonstrating that a company and its digital health product meets all those controls is how it can call itself compliant.

For a digital health organization, you can organize HIPAA controls into three levels: infrastructure, application, and company.

At the infrastructure level, the organization needs to meet certain controls around encryption, backup and disaster recovery, OS hardening, and so on. It's a robust list.

At the application level, the organization needs to do basic security and privacy best practice, i.e. don't store plaintext passwords. Some products exist to help these controls, but for the most part, it's up to the organization to do the right things and to coordinate an external audit to prove compliance at this level. There is also the broad concept of "access" that fits into this level: Does the product ensure that only authorized people have access to only certain sets of data? Oftentimes this is implemented using Access Control Lists, or ACLs. It's a broad topic but is an important component to HIPAA compliance as well. Often a health organization—like a hospital trying to buy a digital health product—will do their own security audit to assess this level.

At the company level, it's about implementing administrative policies. Some products exist to establish and then continuously administer these controls. Datica open sourced our company policies under a creative commons license, which hundreds of organizations have used as a starting point for their own company-level policies used in their own audits.

[callout: policies]

A quick note: Some digital health companies set about on a strategy to not use any PHI in an effort to skirt HIPAA entirely. Datica holds a controversial point of view about PHI that many digital health companies don't want to hear: This story will not fly with Covered Entities, like hospitals or payers, who are the buyers of digital health. Their universal view is that all products they engage with have the possibility that they COULD have PHI, even if accidentally. Therefore if a digital health vendor comes to them and brushes off HIPAA compliance because of a story that they do not plan to handle PHI, the Covered Entity will almost always choose to not work with that vendor. Another way to think about it: There are almost no B2B business models that exist where a digital health product does not handle PHI.

So yes, HIPAA matters. Step one is devising a plan to satisfy all its rules, with the end goal demonstrating credibility that you have met them. _That's_ compliance.

#### Helpful Links
* HIPAA Compliance Guide - A condensed guide to HIPAA you can finish in a single coffee break.
* The Academy - Dozens of in-depth articles on the intricacies of HIPAA.

### Understand BAAs and draft your own
A Business Associate Agreement (BAA) is the contract that outlines risk between two healthcare organizations with a relationship. An organization called a Covered Entity, like a hospital or insurance company, might sign a BAA with an organization called a Business Associate, like a telemedicine solution. The BAA signed between the two will delineate who is ultimately responsible for certain parts of HIPAA compliance.

It's funny to think about it this way, but a BAA genuinely is the definition of "compliance". It outlines who is compliant where, and transfers risk around so that liability is defined should someone fail along the chain of compliance. With more health technologies and data leveraging the cloud and 3rd parties like APIs, BAAs are more relevant today than ever before.

One of the first exercises for a new digital health is to draft their own BAA which will be used when negotiating with customers or partners.

Included in Datica's open source company policies is our BAA which we use as the foundation of all our customer relationships. The value of our BAA is it was written with cloud-first technology in mind. We were one of the first cloud-only technology firms to develop a BAA in this way that has subsequently been audited and HITRUST CSF Certified. Hundreds of digital health companies have used it as a starting point for their own BAA to great success.

#### Helpful Links
* BAA Series on our blog
* Link to our BAA in our company policies

### HITRUST
HITRUST is an industry-led initiative that defines a common, prescriptive framework, and associated requirements, for HIPAA compliance. The crazy thing about HIPAA is there does not exist an exact definition of what it means to be "compliant". It's one entity's lawyer, or Privacy Officer, arguing with another. As you can imagine, this creates business inefficiencies as buyers (like a hospital) try to ensure that a seller (like a telemedicine solution) are compliant.

HITRUST aims to fix that. It lists hundreds of controls that map to HIPAA's rules, as well as standards like NIST, a format they call a Common Security Framework, or CSF. Any company being audited by a third-party auditor, like Coalfire who audits Datica, can request the auditor use the HITRUST CSF as the basis of their audit. Results are then exchanged with the HITRUST Alliance, with the eventual outcome being a HITRUST CSF Certification, good for one year. (Datica has been HITRUST CSF Certified twice.)

The value of the HITRUST CSF Certification is that organizations can use it as a way to accelerate relationships with other healthcare organizations. Let’s take a basic example: Say you are a telemedicine solution and you want to sell to a giant healthcare system. Before, you'd spend months working with the health system who wants to audit your tech stack, controls, etc. It could take six months or more to get past that stage. But with a HITRUST CSF Certification, the compliance officer at the health system will oftentimes effectively sign off that you are indeed compliant in an accelerated fashion. An auditing process truncated from months down to weeks helps everyone involved, or even hours in some instances.

A neat thing about HITRUST is it now supports inheritance. Going back to the three buckets in the previous segment, an organization who wants to be HITRUST CSF Certified who is also a customer of Datica can effectively inherit all the infrastructure-level controls from the Datica platform. Therefore the cost and time requirements for their own HITRUST certification are greatly reduced.

It is important to remember that HITRUST is not a requirement for digital health companies. But, since time is money and digital health organizations are usually short on both, HITRUST can be a critical accelerant to success. Therefore the second step for a compliance strategy is devising a HITRUST story and plan.

#### Helpful Links
* HITRUST guide - Understand the basics of HITRUST in a single coffee break
* How much does a HITRUST certification cost? We discuss in this blog post.
* Datica's own HITRUST case study - how we became HITRUST CSF Certified

### Demonstrate compliance to the market with a full company audit
At some point, you will want to get audited. If you choose not to go down the path of HITRUST Certification, you can choose to have 3rd party auditor test your security and compliance posture against HIPAA. It is the mature way to demonstrate you take compliance seriously to the full extent. Vendors can help with a portion of it, but ultimately for an entire company scope, you must get your own audit done.

Be prepared for it to be painful. A typical audit can take around 100 full-time hours.

Direct costs typically hover around $20,000 but we've heard from others it get as high as $35,000, depending on your auditor. Gap Assessments can be found for as low as $10,000.

When finished, you'll have materials to put in front of any relationship to prove your compliance. The one caveat to this is that audits, and 3rd party auditors, are not all created equal so you may find pushback if your audit is not done properly and lacks rigor. This lack of standardization was a driving force behind HITRUST.

#### Helpful Links
* Cost of a HIPAA audit blog post

### Continuous Compliance
Compliance is never finished, which can be a challenging realization for digital health organizations. Even if you do become audited or HITRUST certified, it's only good for one year and you must do it again.

Plus, risk is a 24/7 notion. For example, let's say you get audited in February 2017, technically valid for one year. Six months later, in summer 2017, your technology team makes an update to their infrastructure that breaks encryption a certain way, and you get hacked with thousands of patient records stolen. Since encryption of PHI is a HIPAA control that you took on the risk per your BAA with all your customers, you are now not in compliance and liable to be sued.

Compliance is a 24/7/365 requirement. The more risk you take on, the more you are liable any time technology is changed. The last step of a compliance strategy is to understand how to manage compliance in a continuous fashion, along with identifying areas where you can offload risk to trusted partners or vendors.

The easiest starting point for continuous compliance is to develop and implement a process of doing regular risk assessments of your organization and technology. These are a bit like internal audits and ensure you are covering your bases as you org and product evolves. They are also helpful in proving to your customers that you take security and compliance seriously.

## Infrastructure Strategy
An infrastructure strategy can be best summarized as taking the unique and making it standard. HIPAA has many controls that are particular about certain infrastructure duties, like encryption or logging. Covered Entities like hospitals are looking to ensure a digital health product is achieving the highest quality in security and privacy. Managing the unique complexity and turning it into a standard approach to support scale is the objective of an infrastructure strategy.

### Understand the different requirements once PHI is involved
As discussed in the HIPAA overview segment, the world is very different once Protected Health Information, or PHI, is involved.

At the highest level, infrastructure-centric HIPAA controls map to these broad topics:

1. Physical safeguards to make sure no one breaks into the data center.
2. A certain way to manage the firewall.
3. Encryption of data in transit and at rest.
4. Logging of application data in a compliant way, because there could be PHI in the logs.
5. Vulnerability scanning.
6. Intrusion detection.
7. Disaster recovery procedures.
8. Backups at a certain cadence, and housed in a certain compliant way.
9. Partitioning of certain components of the tech stack so that one unauthorized system is unable to access another.
10. Patch management, which needs to be done a certain way to maintain compliance.
11. And a blend of administrative-level policies restricting and managing unauthorized human access to various levels of the stack.

The first step of a solid infrastructure strategy is to devise a plan on how you will satisfy each of these broad topics generally, and each of HIPAA's controls specifically.

Utilizing AWS, Microsoft Azure, Heroku, or other infrastructure vendors is standard when PHI is not involved. But once you start managing PHI, know that none of those vendors will satisfy all controls required and it is on your shoulders to fill in the gap.

#### Helpful Links
* TCO for hosting, tbd

### Understand options: IaaS, BaaS, PaaS, SaaS, MSPs
Okay, so your product will manage PHI and you're bought into the importance of complying with HIPAA. What options do you have? Let's walk through the main service paradigms and how they fit into a digital health product.

#### Infrastructure as a Service (IaaS):
Amazon Web Services (AWS), Microsoft Azure, IBM SoftLayer, Google Cloud, and Rackspace are example options. These vendors will sign a BAA with you, but will only take on the risk of a small portion of HIPAA's requirements. Broadly, they take on the risk for the physical safeguards and the firewall. You can absolutely use one of these vendors to host your product, but the rest of the infrastructure controls are your obligation to satisfy.

#### Backend as a Service (BaaS):
Parse is the most popular example. A BaaS is a specific type of server technology that manages the entirety of a "backend"—meaning data storage and lookup, authentication, and files—and exposes the managed backend via APIs. Typically a BaaS is a great fit for mobile application products where the entirety of user experiences is contained within a mobile device. A BaaS vendor will sign a BAA with you and will take on the risk for the controls they manage in their backend. Often a BaaS product will be a great way to prototype or to manage an early-stage product but will become too restricting or limiting as a product matures for two reasons: First, the nature of the product is exposed APIs, and if done immaturely by the vendor, will require your product to conform to their data models. Lack of control at this level can be too limiting for mature products. The mature vendors will have flexible data models, however. Second, BaaS vendor business models often charge per API call, which doesn't scale well. A BaaS partner can be a perfect fit for mHealth prototypes, but you will want to look for an enterprise-focused vendor to meet your scaling needs as you grow.

#### Platform as a Service (PaaS):
Heroku is the most famous example. A PaaS vendor exposes more development options than a BaaS vendor but is more "opinionated" about infrastructure-level components compared to an IaaS cloud. A PaaS can be extremely useful when trying to develop quickly, however. The key understanding with a PaaS vendor is you can only use technologies they will allow you to use, so it is important to confirm with a PaaS vendor that they can support your digital health product. For example, historically Heroku has only ever allowed Postgres databases by default, and couldn't support MongoDB until 3rd-party add-ons allowed for it. Lastly, as with IaaS and BaaS vendors, a PaaS vendor will need to sign a BAA with you. In this case, take extra precaution to understand which controls they are agreeing to take on the risk because in some cases, if they don't agree to take on the risk of a specific control (encryption in transit), but also don't grant you access to make changes in that area by the nature of being a PaaS, you could inherently be setting yourself up to be consistently non-compliant.

* Software as a Service (SaaS): SaaS isn't necessarily at the infrastructure level, and will be discussed in the next topic, Application Strategy.
* Managed Service Providers (MSPs): An MSP can be a helpful expert with initially setting up a strategy.  They also provide great support in an ongoing basis, but is very expensive. You can think of them as consultants who have their own product and specialize in custom versions of that product per customer. The biggest consideration with MSPs is how their relationship scales over time with you.

<div class="callout drop" markdown=1>

Datica’s approach to infrastructure has proven to be compliant, cost-effective, and smart for our customers. Here’s how it works: Datica sits on top of the IaaS clouds like AWS, Azure, and IBM / SoftLayer. Those IaaS vendors agree to about 1/10th of the controls outlined by HIPAA. Datica satisfies the other 9/10ths to a PaaS-like offering that configures and automates the entirety of HIPAA controls at the infrastructure level. Customers sign one BAA with Datica and inherit the BAA of Amazon, Microsoft, IBM, etc., and offload the risk, expense, and attention paid to compliance requirements to our team. It has proven to be a great fit with development teams focused on building their product, not re-inventing the wheel of compliance.

</div>

Picking your service partners is an important step towards an infrastructure strategy because it will inform the types of BAAs you will sign, which in turn will inform your responsibilities, which in turn shape your internal resource distribution.

### Security and Privacy
There are many objectives at the infrastructure level for any company: Reduce waste and costs, the "abilities" of flexibility, adaptability, scalability, reliability, empowering teams to move quickly, and so on.

So why call out security and privacy?

We've consistently heard this list as the top areas of focus for enterprise healthcare CIOs:

1. CapEx/OpEx management as old infrastructure ages and new infrastructure like the cloud emerges.
2. Empowering teams with new technologies while maintaining control of processes and procedures.
3. Security, especially consistent and transparent security that aligns with the overall security and compliance posture of the CIOs organization.

The ultimate pressing need for Covered Entities (like hospitals) working with Business Associates (like digital health products) boils down to security. They will not work with anyone they deem to be a potential threat vector. Fears of hacks and ransomware are as high as they have ever been, and for good reason: It's bad news in healthcare. The things hacked and stolen are people's medical information—their very lives—that can't be re-issued like a new credit card. Plus, media outlets don't write stories if a hospital's old infrastructure; when was the last time you read an article about inflexible tools for development teams? But the bad press never ends when they are hacked, and that translates to a tarnished brand, drop in revenue, and firings. A focus on security and privacy have both altruistic and selfish reasons for being priority number one when it comes to assessing external partnerships with digital health companies.

This step in an infrastructure strategy is all about highlighting how a digital health organization approaches security and privacy. Be prepared to tell, and prove, your story.

### Helpful Links
?

### What compliance in the cloud looks like
There are many types of environments—physical, virtualized, and cloud—that a service provider might maintain in a compliant fashion. A large portion of service providers today offer their products to customers utilizing the cloud-based deployment model. There are multiple types of cloud environments to which an organization should become familiar. These cloud environments can be a private cloud, community cloud, or public cloud.

In a private cloud, the cloud infrastructure is operated for a single organization. It can be managed by the organization or by a third-party provider and may be on premise or off-premise. In a private cloud, the infrastructure is dedicated to the use of that one identified entity and the organization’s data is physically segmented from all other organizations using the provider.

In a community cloud, the infrastructure is shared by multiple organizations and supports a specific business community with shared requirements or similar concerns (i.e. by type of business model, security requirements, or compliance considerations). Similar to the private cloud, the community alternative may be managed by the organization or a third party and may be on or off-premise.

In a public cloud, the infrastructure is made available to the general public or a large industry group that is owned by the organization selling cloud services. The public cloud infrastructure exists solely on the premise of the cloud provider.

These cloud environments are important factors that an organization should consider when selecting a service provider that operates in the cloud. One important consideration that an organization needs to consider is the topic of multi-tenancy in the cloud, whether it is a private, community, or public. In a multi-tenant cloud environment, there are multiple customers or organizations that are sharing the same resources (i.e. infrastructure, data stores, virtual components, etc.) of the environment. An important note to remember about multi-tenancy in the cloud is that customers do not generally have any knowledge or insight into the customers with whom they are sharing resources. Additionally, customers do not have any knowledge or insight into the ways the other customer organizations are employing security of their internal environments used to access the cloud.

Compliance in the cloud is possible in any scenario as long as it addresses controls in the main five HIPAA Omnibus categories:

* Administrative Safeguards (§ 164.308)
* Physical Safeguards (§ 164.310)
* Technical Safeguards (§ 164.312)
* Organizational Safeguards (§ 164.314)
* Policies and Procedures and Documentation Safeguards (§ 164.316)

As well as additional security provisions within References 13402 of the HITECH Act.

Being on the cloud is critical today, and critical for the future. Cloud-enabled digital health products will be prepared for an interoperable future.

#### Helpful Links

* HIPAA Compliance in the Cloud white paper
* [Healthcare’s migration to the cloud](https://datica.com/blog/accelerating-migration-to-the-healthcare-cloud/)
* [What is Cloud Computing](https://datica.com/blog/what-is-cloud-computing-and-why-it-matters-for-compliance/)

### Preparing for scale

As long as you are cloud-based, the basics of scaling are straight forward: spin up resources as needed; manage projected costs; maintain compliance.

Here are a few orthogonal considerations to contemplate in addition to the basics:

* **What does the growth of your application or tech stack look like?** For example, are you expecting to add a Machine Learning component to the product? If so, have you built a game plan for how to handle Hadoop in a compliant way? Or how to handle compliance within the Machine Learning algorithm?
* **As you scale resources, you might be scaling vendors or partners.** With each new relationship comes a new Business Associate Agreement (BAA). Is your organization prepared to manage the complex alignment of multiple BAAs? This can get murky, so bear with us for this example: You may choose to use one vendor for application hosting but another vendor to manage a Hadoop instance. Vendor A managing the app infrastructure is full stack (like Datica). Vendor B managing the Hadoop infrastructure uses another vendor, Vendor C, to manage its logs in a HIPAA compliant way. If Vendor A and B both have a breach notification policy of 4 hours, precisely meeting your hospital customer demands, what if Vendor C managing unique logs has a 24-hour breach notification policy? How do you manage that? The point is each new vendor you take on, the complexity of BAA management intensifies, so as you scale, watch this.
* **Health IT is vast and varied.** Inevitably as your product scales, you'll encounter new technological requirements. Do you have the team expertise to support these new technologies? For example, DevOps for compliant application hosting is one thing; but DevOps for hosting and managing an integration engine like Mirth is truly a different beast with different expertise requirements.

----

## Application Strategy
This section is not a guide for design best principles, advice on user experience, or even commentary on what makes a good product. Instead, it's an outline of the under-the-hood considerations that a digital health application must manage if it doesn't expect to falter during an audit process, or when engaging with healthcare customers.

### Understand how and where the application will be used, and by whom

#### Application Access
The concept of access or availability to an application can be taken for granted in today's technology climate. As is the theme throughout, healthcare is not the same as other industries. It's not as simple as listing an application in the Apple App Store, or one-click installs on Google Play. The interface isn't necessarily commodity hardware like an iPhone, Sony PlayStation, or Windows home PC. It's likely legacy, locked-down PCs or specialty consoles. If you are a mobile app, chances are iOS or Android won't be available; instead, you'll be dealing with old Java-based middleware, obsolete Blackberries, or Symbian.

* **How will your application be accessible to users from hospital systems?**  Understand the the environment of the health system. Are you providing your own hardware like Vocera, or iPads for waiting rooms with your app installed? Or will you instead need to support VPNs, firewalls, and Virtualization as a way to tunnel access to your app? Does Clinical Care Object Workgroup matter to you?
* **How will your application manage access?** Depending on the form factor supporting the application, additional access protocols might be required to support compliant administration of the product. For example, if you are a telehealth solution providing iPads with your app pre-installed, do you have a plan to work with each hospital's IT staff to manage inventory, installation, and ownership of the devices?

### Credentials and Provisioning
The value of a digital health product is the personal experience bestowed upon each user. That can't happen without authentication and authorization.

##### Considerations
* How will you onboard new users?
* Will you send an email? Is that email noncompliant or a security thread vector?
* Will you need to integrate with existing LDAP/SSO systems?
* How often will you require password updates and other changes?
* Will everything be self-service or will you need to work with hospital IT?

### Access Control Lists
Access Control Lists, or ACLs, are a concept that manage what data can be seen by which users. ACLs are enormously complicated because there are many variables: People, roles, geography, employment, BAAs, and more factor into who should see what when. It's such a tricky thing to manage that is also disastrous when uncalibrated by even the smallest degree either way: On one side, you might get angry people who are upset they are blocked from seeing some data they should see. On the other side, if too much data is exposed, you violate HIPAA compliance and those people are even more angry.

ACLs are an application-level concern, and a central part of the design of the app.

##### Considerations
* Who can see what data? Figure out right balance of ease of use and compliance.
* Does it change situationally by user role or location?
* Ensure future scenarios are planned out today. It is hard to undo ACLs once the decided approach is set in motion.

### Auditing
Continuous auditing at the infrastructure and application levels is a requirement for compliance. At the infrastructure level, it’s things like process logging. At the application level, it's things like tracking which authenticated user saw what data when.

##### Considerations
* Track who saw what and when.
* Are there situations in which you should let someone "break the glass" and access sensitive PHI? If so, indicate these.
* If sensitive information is involved, consider writing reports to track for known unusual behavior.

### Alignment with customer processes and needs
Never forget the customers of digital health are most often behemoth organizations who have instituted endless processes and controls for every anticipated scenario—the definition of bureaucracy. A digital health application will be more successful if it understands how to align with basic processes put upon its users.

#### Business Continuity
We spend all this time thinking about what happens when users use our digital health product. What what happens when they don't or can't use it?

It's a provocative thought, but one that enterprises think about. Those processes all wrap up into a "contingency plans", or more formally what's called Business Continuity, which is a way of summarizing what happens with the application is unavailable, and the path to take to make it available again. One important consideration with digital health in particular is how to deal with data loss.

##### Considerations
* What should users do in the event of a downtime?
* How can data be backloaded into the system when systems are available again?

#### User Training and Support
Training and onboarding are so fundamental an entire industry exists with billion dollar consultancies focused on managing the process. Your product will be no different: You must have a plan to train new users of the application.

##### Considerations
* How will you train users on your application? Online? In Person?
* How will users get support if they are having difficulties? What is your SLA on providing that assistance?

#### Data Onboarding and Backload
Starting with a blank slate with an application is difficult, especially for complex patients or situations where longitudinal data matters (e.g. Pediatrics). Backloading past patient data is typically a requirement to adoption of the product. Without it, users won't find value.

##### Considerations
* Consider onboarding data through interfaces, flat files or manual transcription to reduce the burdens on the most complicated patients.
* Run a basic cost benefit analysis on using automated technology vs. humans.

### Importance of collecting user and outcomes data
"Lock-in" doesn't happen as much as one would guess with healthcare software. Because of the complexity of landing a deal with a hospital or similar enterprise, the assumption is that once you're in, you're in. The truth is software turnover in those settings is quite common. Even EHRs, which can take years to implement and cost upwards of $20 million, have been known to be ripped out and replaced if they expose a critical failure or are deemed too cost inefficient.

A similar metaphor are sports teams. A common practice is once a new coach is hired, he or she prefers to bring in players that are "his or her" players, often cutting existing athletes from the team. A very common similar scenario exists within healthcare: When a new CIO or CTO is hired at, say, a hospital, it's common that all old technology is "on watch" since it's not his or her preferred choice.

Thus, this step of the application strategy is important for continued plan use: collect user data and outcomes data on a continuous basis so it can be demonstrated the successful impact on patient care and successful reduction in costs the product is delivering. If the digital health application is not collecting this data to help tell that story, then it is at risk of being replaced, which is more often than you might think: The average tenure of a CIO at a hospital is around three years.

### Upgrading: How to update the application after deployed at a customer site
If the digital health product is a Software-as-a-Service application where the delivery and access model is wholly owned, then upgrading is simple. In fact, it's one of the main selling points of SaaS, and a reason SaaS as a paradigm has taken the world by storm.

The bigger concern is if the digital health product is deployed on-premises ("on-prem") on technology where you, as the owner of the digital health application, don't have control over its delivery or access. Upgrade cycles become an ongoing issue.

Hardware-based digital health products are another story altogether. Repairs, returns, replacements are all a thing software-only products don't have to consider. It's an ongoing concern that is also a cost center: shipping, new parts, and labor for repairs are all unpredictable costs software doesn't have.

The point is understanding how updates and fixes to the digital health product will be administered is the key last step of an application strategy before you are off and running towards market adoption.

----

## Integration Strategy
Behold this truth to be self-evident: B2B digital health business models will likely fail without an educated integration strategy. It might sound provocative, but it's true. Data exchange with hospitals, payers, or other systems becomes a central component to a successful digital health product because often so much of the value derived from the product is how it fits into the existing health system data and workflows. Specifically, either gathering data from multiple sources or writing data back into those same sources. With digital health, value creation is synonymous with data creation, but value actualization is synonymous with how that data flows back into an existing system. Remember, most health systems have invested millions, and sometimes billions, of dollars and years of time to implement electronic health records systems; integrating with EHRs helps add value and ROI to that massive investment of time and money.

The challenge is in completing integrations, which are not straightforward. A magic API will not create interoperability like it might integrating into a CRM or Facebook. Instead, the path towards integration is filled with dozens of obstacles, with the crux being authorization and power: You can't complete an integration until your customer—like a hospital—gives you the okay to do so. EHRs, by and large, are silos, so integrating to each one involves a project and a process. Integrating to a middleware API is trivial; integrating to an EHR, or multiple EHRs, is the hard part.

### Your business plan and product workflow dictates needs
"Integration" is a broad term. There are many forms and formats of integration. As step one of an integration strategy, the key is to understand what integration needs your business model demands.

For example, let's say you are a telemedicine product, and you desire to integrate into EHRs, like Epic. It is wise to understand where within Epic's interface your data will exist. Similarly, you'll want to know the workflows within Epic that your product will fit, which can dictate the types of interfaces you'll read from and write to.

There is no one-size-fits-all to digital health. Each product, each solution, each idea mixes and matches different requirements for integration. Step one is to ensure you understand what data requirements exist for your business model to be successful.

One additional important business model consideration is how you price your product. If you price it very low per provider or per facility, then the revenue you generate may actually be lower than the cost, in time and technology, to do an integration. We’ve seen this play out with multiple prospects. If integration is a requirement for your product, you need to plan for that with your pricing model. Our biggest recommendation would be to not add integration as a line-item expense. Selling integrations as a line-item expense has two negative impacts: first, it puts a price on an integration which can create an apples to oranges situation in pricing. Second, it doesn’t communicate the value of the integration well. Here’s an example. If a telemedicine or patient portal product wants to roll out e-visits, this is functionality that definitely requires integration. However, selling the e-visits and the integration separately creates a strange product situation in which a customer could not understand that these concepts or the value of this functionality is not mutually exclusive. The value of having e-visits isn’t the integration; it’s the fact that you can now serve patients for non-acute reasons outside your walls. It just so happens that you need integration to make this work. Baking the price of the integration into the “e-visits” module will increase the likelihood of success of selling integrations (and by proxy, your product).

### Understand technology landscape: EHRs, workflows, standards, interfaces, VPNs, data storage and backup, security, and compliant infrastructure

There are a lot of industry terms of art flying around within the world of interoperability, a.k.a. integration. Let's walk through them.

* **EHRs stand for Electronic Health Records**. Think of these as the a digital version of a paper patient chart of hospitals and health enterprises. EHRs aimed to digitize patient care but were lightly adopted in the 1990s and early 2000s. Then the government mandated, through a mix of carrots and sticks, a program called Meaningful Use, which gave ~$20 billion to clinicians to buy EHRs, thus creating the market maturity we see today. EHRs are a big deal because they are the central data repository of patient care, and are often the main software for customers of digital health products. Reading and writing data with the EHR becomes a critical component to the success of a digital health product.
* Workflows are a term to mean the specific path of patient care a clinician administers. Someone like a hospital technologist or an external consultant will configure innumerable workflows per organization. The crazy thing is often no two workflows are the same: Hospital ABC usually has a custom way to handle a certain workflow because they think that's the best way while Hospital XYZ will design a different workflow for the same pathway because they believe it to be better. With a lack of workflow standardization, complexity across the industry exponentially increases. This is a major reason that "integrations don't scale"—a scary truth that digital health organizations tend to ignore. EHR workflows are the central work path for clinical care so integrating into the right workflow can make or break the adoption and scale of digital health.
* **Data standards in healthcare exist but are often lacking or complex.** While industry standards like HL7v2 worked for their initial use cases, their application in the modern era is often lacking. The HL7 version 2 specification was written in 1988, one year before Tim Berners-Lee wrote his proposal for the World Wild Web. It was never designed with the internet, let alone modern programming toolsets and security requirements, in mind. Also, despite indications that healthcare interoperability should be as easy as using the ATM, it’s far more semantically complex. It’s a lot easier to define the balance of a bank account than to define the type of cancer a patient has or to determine which variation and dose of a given medication a patient is taking. Understanding how much you need to understand health data will be crucial; something that seems very simple may in fact be complex.     
* **Interfaces are similarly archaic.** For example, HL7 has 18 major message types, like ADT for admissions/discharges/transfers, or ORM for orders. These interfaces are the channel in and out of hospitals and their EHRs. Each interface has its own way of writing vs. reading, so you can think of it as each interface itself has two different ways of doing an integration. Furthermore, interfaces work at the port-level, meaning each interface is a unique integration happening at a unique port. Yet another reason "integrations don't scale".
* **VPNs, or virtual private networks,** are the most common secure method to communicate with the network at a hospital. While you may have other options (like SFTP or HTTPS), most hospitals use VPNs to explicitly whitelist authorization to endpoints and to manage the encryption of unencrypted data feeds like HL7 TCP feeds. While it would be nice if hospitals could encrypt data using more modern conventions, this is probably a non-negotiable item in how you will exchange health data with them. 
* **Storage and backup:** Integrations are what we call "transaction-based", but logging and storing the data from the transactions becomes both a base compliance necessity and a smart business decision.
* **Security with integrations is nebulous.** There is no inherent security protocols or procedures out of the box with typical integrations. It's up to you to work with your integration provider to ensure a solid security plan exists.
* **Don't forget that the transaction of data, the processing of the transactions, and the storing of data are all still governed by HIPAA.** You will need a compliance strategy to support integration as much as you need one to support your application. If you do your own integration work in-house, using an integration engine like Mirth or Iguana, it must be placed somewhere compliant. If you use an integration provider, you must press hard on them to ensure they are compliant.

#### Helpful Links
* TCO Integrations
* [HL7 Primer](https://datica.com/academy/hl7-101-a-primer/)

### The importance of getting your first integration
Typically, the hardest problem with integrations is going from 0 to 1. It's a lot like having your first baby... before the baby's born you read all the books and think you're ready. Then the baby's finally here and you realize that there is a whole lot you truly didn't know. Just as in parenting, the learning curve in integrations going from 0 to 1 is steep.

Going from 0 to 1 is a very different problem than end-game planning. The sole focus of the product should be landing its first integration instead of planning for the future.

A simple data point to paint a story:

Many digital health organizations start out thinking how to scale to hundreds, or thousands, of integrations. But scaling secure connectivity in healthcare is non-trivial, and non-repeating. For example, a Fortune 100 enterprise is one of the smartest companies we've met in healthcare. We know they have less than 2,000 total unique secure integrations across all of healthcare, a number that is shocking. What's more shocking is it's by far the highest we've ever encountered from a non-EHR organization, so for a digital health product team to plan for more than one integration at an early stage is a waste of focus.

Instead, at this stage of an integration strategy, it is all about completing that first integration, going from 0 to 1, to support proving out the product. Throw all your weight behind landing that first deal, or succeeding at your first pilot..

### How to scale integrations
Okay, so you've gone from 0 to 1, and are now scaling. That's great! What does scaling integrations look like?

Well, it's not what it seems. Sadly, "integrations don't scale" is this framework's drumbeat, and for good reason. Scalability within healthcare is a myth. There is no magic bullet for scale. There is no magic API for EHRs. There is no Easy button.

Instead, since connections are point-to-point, scaling integrations takes on a different meaning. Scaling integrations means making the internal aspects of your infrastructure as repeatable as possible.

* Don't re-invent the wheel on compliance
* Use an integration engine that can handle the load
* Employ the cloud so new resources are available at the click of a button
* Work with someone to ensure VPN setup is as streamlined as possible
* Test in the same way with every integration
* Pick a partner who has streamlined the human project management side of an integration

"Scale" of integrations does not mean integrating once to an API and expecting to be plugged into every hospital.

Scaling integrations means ensuring your resources are aligned so the process of an integration can match the speed at which you land and implement new business deals.

----

## Pilot Strategy

Pilots are a big deal. Almost all transactions with a hospital or health system won't happen unless a pilot has happened first, so understanding how the pilot game works is crucial to success. Simply landing a pilot isn't enough, though: there is an entire strategy around setting it up for success.

Put a lot of thought into your first pilot target, but don’t put all your eggs in one basket. Landing Kaiser for a pilot sounds like a dream path, but then you run the risk of spending all your time and money trying to land a massive organization like Kaiser, which can take months or years. Be smart and go after pilot organizations that can ideally move quickly while providing you with a case study if successful.

### How to land a pilot: Demonstrate credibility

Universal feedback says finding an internal champion is priority number one in order to lend credibility to the product. Without a champion, a pilot probably won't happen.

Everything talked about in the other strategy tracks matter here:

* Demonstrate compliance
* Present a credible story around security and privacy
* Have an integration plan; understand the technologies and where you fit
* Be prepared to detail out how the pilot will occur, including timelines and milestones
* Be ready to explain what will happen should the pilot be successful

The goal is building credibility so the IT team, and especially the CIO and/or CTO, are willing to work with you.

Looking for more ways to demonstrate credibility and create IT buy-in?

1. Know the data you require. A digital health organization who requests a pilot but can't articulate precisely which data they need in order to be successful—and where to find it, how to exchange it, and what you'll do with it—won't land the pilot.
2. Cyber security is paramount. Information security, network security, user security are all dimensions of cyber security to which you should have a story.
3. Understand how your architecture is compatible with the hospital's architecture. Are you both operating under similar modern architectural decisions? Is it sustainable or will you need to iterate soon? CIOs don't want someone who comes in using Cobalt, but they also don't want someone who is using flavor-of-the-month libraries that need to be yanked out months later.
4. Show you are a company who will be around 5 years from now. CIOs HATE to work with companies that fold in a few months time, requiring them to replace or decommission you. Demonstrate the founders are credible, the business has funding and, better yet, the business model is successful.

### 4 keys to managing a successful pilot

1. Find a clinical champion. While a basic champion that is a believer in the product is one thing, if that champion isn't clinical, it’ll likely fail. Operationally, for either short-term use or long-term adoption, a senior clinical champion who is also willing to take time to use the product gives immediate credibility in the eyes of stakeholders.
2. IT administrators at hospitals and health systems are not focused on your product. They are busy managing complicated mergers or Meaningful Use, worrying about ransomware or resource distribution, or dealing with bureaucracy. You'll need deep interfaces into their systems and data to be successful, so getting their attention and buy-in is required.
3. Find a project manager who knows how these things work. The technologists at hospitals won't push this along. You must project manage it.
4. Success metrics will make or break a pilot. Outline success criteria up front. Here's a tip: Tell the hospital what success looks like; don't wait for them to tell you. You take control, and you outline what success looks like defined by some metrics, then work with them to buy into your position. You'll wither on the vine waiting for a hospital to tell you what success looks like.

### Demonstrate outcomes from the pilot
Hopefully, you have been collecting data throughout the pilot. Now be prepared to present it to demonstrate the pilot matched the outcomes needed to prove its success.

Don't get caught in "pilot purgatory" where you bounce from one pilot to the next. That can be death for the product. You need to know if the pilot was successful and there will be a business engagement, or if the prospect will pass. Sometimes metrics are so-so, or buy-in was inflated, and the engagement will be repositioned in another pilot. Be wary!

### Have a rollout plan ready to go
A rollout plan is more than just scaling technology, although having technical resources available to scale as necessary is important.

Often a solid rollout plan more than just scaling servers. It can also mean scaling process, which is even harder once humans get involved.

Take training, for example. If the digital health product is a telehealth solution meant to be used by nurses in a certain workflow, training all the nurses in the system on the new tool and new workflow is a critical requirement of transitioning from pilot to go-live.

Or take billing, for example. Perhaps the pilot focused on proving out the design and value of the use case, and it passed with flying colors. But now a mechanism by which the hospital can bill for your product is a requirement to go-live. This is just one example of a potential additional technical requirement you must manage if you plan to transition to adoption.

### Thoughts about pricing a pilot
Oftentimes, in order to land a pilot, digital health products will be marketed for free or highly reduced prices. While this makes sense in some cases, most healthcare organizations know that there is no such thing as “free”. Even if the product is free, it will take resources to help implement, train, and use the digital health product. Don’t get burned by presenting your pilot as “free” and no cost to your customer. There is always a cost.

Also, if you highly discount your price you run the risk of creating a chasm between the value proposition of your product and the cost somebody has to pay for it. You can quickly lose credibility if this chasm is too wide.

It’s certainly OK and often smart to discount your product to land your first pilot. But, be careful not to devalue your product and don’t devalue the time and resources of your customer.
