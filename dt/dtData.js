const flashcardsFrontBack = [
`Iterative design:
A cyclic aproach where each itteration of a design is tested and evaluated then chganges are made, leading to new itterations.`,

`Advantages of iterative design:
- It is more likely that problems with the design will be discovered and dealt with earlier.
- It encourages focus on the most critical aspects of a product's design.
- Evidence of progress can be easily provided to stakeholders.`,

`Disadvantages of iterative design:
- Designers can be so focused on the current iteration that they sometimes lose sight of the bigger design picture.
- It can be time consuming.`,

`User-centered design:
An aproach where the needs and wants of the end user are considered extensively at each stage of the design process.`,

`Advantages of user-centered design:
- The end user feels listened to and so has a greater sense if ownership of the final product.
- Listening to the end user at each design stage means it is more likely that the final product will meet users' expectations.`,

`Disadvantages of user-centered design:
- It requires extra time to meet and hold discussions with users and then alter design as a result of user feedback.
- If the design becomes too focused on a particular end user's requirements, it may become unviable to sell to the wider public.`,

`Systems thinking:
Often used when designing electronic, mechanical and mechatronic systems.
It is a top-down approach that  starts with an overview of the overall system in terms of its input, process and output subsystems.`,

`Advantages of a systens approach:
- It does not require specialist knowledge of electronic or mechanical components to design the system overview.
- The top-down approach makes it easy to communicate how the system will work to non-technical specialists, such as clients and stakeholders.
- The system is designed in blocks, so it is easier to find errors or faults.`,

`Disadvantages of a systems approach:
- It can lead to the use of components that are not necessary, resulting in larger systems at extra cost.`,

`Structure of a system:
Electronic systems are usually made up of input device, process and output device stages. Some systems include a driver stage.`,

`Structure of a system:
- Input devices take a signal such as light sound or movement, and turn it into an electrical signal, such as a voltage or current.
~ Switches and sensors
- Processes act like the 'brain' of a system. They alter tje electronic signal to create functions such as timing and counting.
~ Microcontrollers
- Drivers increase the signal going into the output stage. This ensures that output devices draw the required amount of current to work effectively.
- Output devices take an electrical signal and turn it into a real-world signal
~ Lights, speakers, motors`,

`Systems block diagrams:
Block diagrams that represent an overview of the system and how it will work.`,

`Harry Beck:
Designed the London Underground map in 1931, influenced by the layouts used in electronic schematics. The design has been widely copied for use in public transport systems around the world.`,

`Marcel Breuer:
An early student of the Bauhaus design school. Invented a new type of steel furniture inspired by bicycle handles. One famous example is the Wassily Chair.`,

`Coco Chanel:
A French fashion designer who founded the Chanel brand, which specialises in luxury items, fashion accessories and ready-to-wear clothing.`,

`Norman Foster:
A British architect and founder of Foster + Partners. Designed the high-tech 'Gherkin' building in the City of London, which uses less than half of the energy of a similar sized building.`,

`Sir Alec Issigonis:
A British-Greek car designer who designed the Mini, which is still hugely popular to this day. Also worked on the Morris Minor.`,

`Charles Rennie Mackintosh:
A Scottish architect and designer who was an influence on the Art Nouveau movement. He was influenced by modernist and Japanese architecture. He designed 'The Lighthouse' in Glasgow.`,

`Aldo Rossi:
Italian designer successful in product design architecture, drawing and design theory. Author of the seminal urban design book, The Architecture of the City, published in 1966.`,

`Philippe Starck:
A French designer who is known for his interior product and furniture designs. Designed the 'Juicy Salif' lemon squeezer in 1990 for Alessi, which is now widely seen as a design icon.`,

`Raymond Templier:
A French jewellery designer inspiredby the Art Deco movement. He tipically paired dark stones with precious white metals to create bold geometric pieces.`,

`Louis Comfort Tiffany:
American designer and metalworker associated with the Art Nouveau movement. Worked as design director at Tiffany and Co. who are well known for their jewellery and lamp designs.`,

`Apple:
A multinational consumer electronics company in California, USA. Founded by Steve Jobs, Steve Wozniak, and Ronald Wayne  in 1976. Initially sold personal computers, such as Macintosh. This was extremely innovative at the time due to the use of a graphical user interface with a mouse. Later produced the iconic iMac G3, the iPod and the hugely successful iPhone, which combined elements of both the G3 and the iPod with a touch screen phone.`,

`Dyson:
A British design engineering company. Formed by James Dyson in 1991 as a way of bringing his new bagless vacuum cleaner invention to the market. By 2001 over 47% of all vacuum cleaners sold in the UK were Dysons. Dyson vacuum cleaners do not lose suction due to their unique cyclone dust-separation technology. Dyson has ssince diversified its product line to include hheaters, bladeless fans and even hair dryers.`,

`Primark:
An international clothing retailer with its main base in Dublin, Ireland. Known for low-cost yet fashionable products, and its contribution to the modern 'fast fashion' trend. Clothes are made in places such as China, India and Bangladesh. It does not own the factories that produce its clothing.`,

`Under Armour:
An American sportswear company formed in 1996 by Kevin Plank, former American football player. Developed moisture wicking sportswear that uses microfibres to keep athletes cool and dry. Now also sells footwear and accessories.`,

`Zara:
A Spanish clothing and accessories company founded by Amancio Ortega and Rosalina Mera. Sells products that react to current consumer trends, using a 'just-in-time' production approach. Began working with Greenpeace in 2011 to eliminate harmful toxins from its clothing.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- Some raw materials are mined, which can cause erosion and soil contamination. Others are farmed. Over-farming and pesticides can lead to death of wildlife.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- Oil is needed to make plastics. Oil spills can have devistating effects.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- Carbon is released into the atmosphere from producing products. This is widely accepted as a cause of global warming.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- Deforestation results in loss of habitats for species, and impacts climate change.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- It is important that workers who manufacture products are kept safe while doing so. The UK has legislation to ensure employers look after their workers. But, workers in some other countries do not have the same protections.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- Atmosphere pollution occurs when pollutants are released into the atmosphere. It has been linked to respiratory illnesses, e.g. lung cancer, asthma.`,

`Ecological and Social Issues in the Design and Manufacture of Products:
- Ocean pollution happens when chemicals and other industrial waste is released into the oceans.`,

`The 6 Rs:
- Reduce
- Rethink
- Refuse
- Recycle
- Reuse
- Repair`,

`Reduce:
How can the amount of materials and components used in the product be reduced?
Is the product itself necessary?`,

`Rethink:
How can the design be changed to be less harmful to the environment?
Can better ways be found?`,

`Refuse:
Should the product be produced if it is not sustainably designed?
Is the packaging necessary?`,

`Recycle:
Is the product made using recycled materials?
Could the materials be recycled once the product is no longer useful?`,

`Reuse:
Could the product be used in a different way once its current use has expired?
Could the parts be reused?`,

`Repair:
Is the product easy to repair?
Are replacement components readily available in case of failure?`,

`Fair trade:
A movement that works to help people in developing countries get a fair deal for the products they produce.`,

`Fair trade:
- Producers are paid an agreed minimum rate for many products. This gets paid even if global prices fall.
- They also receive a Fairtrade Premium payment that they can use to invest in areas such as local education and healthcare.
- Many consumers like to buy fair trade products as it fits with their values and principles.
- The Fairtrade Certification Mark shows that a product meets fair traid standards.`,

`Research and invesigation:
- Market research is carried out to find out whether there is a place in the market for a proposed product. A product that is first to market can become very successful. An example is the first mobile phone made by Motorola in 1973, which propelled them into market leaders.
- It is important tp discuss the client's requirements directly with them. Interviews can be face-to-face or via virtual meeting technology.
- A focus group can be assembled to discuss and give feedback on a product or design idea.
- Product analysis is the detailed investigation or analysis of current or previous designs.`
];

const flashcardsQA = [

];
