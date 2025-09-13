var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Matthew Leingang Department of Mathematics New York University  Last Updated:       "
},
{
  "id": "sec-ps01",
  "level": "1",
  "url": "sec-ps01.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 1",
  "body": " Problem Set 1   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Matthew Leingang  2025-08-18  https:\/\/dhsp.math.lsa.umich.edu\/exams\/116exam1\/w24\/p4.pdf  This source is used under a Creative Commons License (CC-BY-NC-SA-4.0).    Avery is measuring the volume of water in their backyard on the day of a rainstorm.   Let be the total amount of rainwater in Avery's backyard, in cubic feet, hours after 12:00 a.m.    Let be the rate at which the rain adds water to Avery's backyard, in cubic feet per hour, hours after 12:00 a.m.    Let be the rate at which water drains or evaporates from Avery's backyard, in cubic feet per hour, hours after 12:00 a.m.   The functions , , and are all differentiable functions. Assume there is no water in Avery's backyard at 12:00 a.m.     Write a sentence in English which explains the equality .    Another name for the second fundamental theorem of calculus is the “net change theorem.” The integral of a rate of change over an interval gives the total change over that interval. The quantity integrated here is , the rate at which water drains or evaporates from Avery's backyard. Therefore, the equation says that the total amount of water that drains or evaporates from Avery's backyard between 4:00 a.m. and 10:00 a.m. is 8000 cubic feet.      Write an integral expression which gives the total amount of rainwater in cubic feet, in Avery's backyard at 7:00 a.m.    The rate at which the water in Avery's backyard is changing at time is the rate at which rain adds water, minus the rate at which water drains or evaporates. This is . Therefore, the total amount of rainwater in Avery's backyard at 7:00 is       Write an expression which gives the average amount of rainwater, in cubic feet, in Avery's backyard between 6:00 a.m. and 9:00 a.m.    The average value of a function on the interval is . In this context, the function we want the average value of is , the total amount of rainwater in Avery's backyard at time . That is,   This is not the same thing as the average rate of change of the amount of rainwater in Avery's backyard. That would be        Estimate the area under the curve from to using four rectangles.     Use right endpoints . Sketch the graph and the rectangles.    The width of each rectangle is . The right endpoints are . The heights of the rectangles are , , , . The area of each rectangle is width times height. So the total area is . The sketch is below.     f(x)=1\/x  NyuViolet=\"#57068c\"  MediumViolet1=\"#702b9d\"  MediumViolet2=\"#7b5aa6\"  LightViolet1=\"#ab82c5\"  LightViolet2=\"#eee6f3\"                  Repeat the estimation using left endpoints .    The width of each rectangle is . The left endpoints are . The heights of the rectangles are , , , . The area of each rectangle is width times height. So the total area is . The sketch is below.     f(x)=1\/x  NyuViolet=\"#57068c\"  MediumViolet1=\"#702b9d\"  MediumViolet2=\"#7b5aa6\"  LightViolet1=\"#ab82c5\"  LightViolet2=\"#eee6f3\"                  Explain why one estimate is an overestimate and the other is an underestimate.    The function is decreasing on the interval . Therefore, the left endpoints are always higher than the right endpoints. This means that the rectangles formed using left endpoints are always taller than those formed using right endpoints. So the left endpoint estimate is an overestimate and the right endpoint estimate is an underestimate.       Let . Find the exact value of .      A particle's velocity is given by (in meters\/second) for .     Find the displacement of the particle over the interval.    Displacement is given by the integral of velocity. The displacement is 4 meters.      Find the total distance traveled by the particle over the interval.    Total distance is the integral of speed , which is the magnitude or absolute value of velocity. First, we need to find where . . The velocity is zero at and , positive on and , and negative on .  To evaluate the integral of the absolute value, we split the integral at these points. . We have The total distance is meters.       Evaluate the definite integral using an appropriate substitution. You must show the change in the limits of integration.     "
},
{
  "id": "umich_2024-02-12_0116_4",
  "level": "2",
  "url": "sec-ps01.html#umich_2024-02-12_0116_4",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Matthew Leingang  2025-08-18  https:\/\/dhsp.math.lsa.umich.edu\/exams\/116exam1\/w24\/p4.pdf  This source is used under a Creative Commons License (CC-BY-NC-SA-4.0).    Avery is measuring the volume of water in their backyard on the day of a rainstorm.   Let be the total amount of rainwater in Avery's backyard, in cubic feet, hours after 12:00 a.m.    Let be the rate at which the rain adds water to Avery's backyard, in cubic feet per hour, hours after 12:00 a.m.    Let be the rate at which water drains or evaporates from Avery's backyard, in cubic feet per hour, hours after 12:00 a.m.   The functions , , and are all differentiable functions. Assume there is no water in Avery's backyard at 12:00 a.m.     Write a sentence in English which explains the equality .    Another name for the second fundamental theorem of calculus is the “net change theorem.” The integral of a rate of change over an interval gives the total change over that interval. The quantity integrated here is , the rate at which water drains or evaporates from Avery's backyard. Therefore, the equation says that the total amount of water that drains or evaporates from Avery's backyard between 4:00 a.m. and 10:00 a.m. is 8000 cubic feet.      Write an integral expression which gives the total amount of rainwater in cubic feet, in Avery's backyard at 7:00 a.m.    The rate at which the water in Avery's backyard is changing at time is the rate at which rain adds water, minus the rate at which water drains or evaporates. This is . Therefore, the total amount of rainwater in Avery's backyard at 7:00 is       Write an expression which gives the average amount of rainwater, in cubic feet, in Avery's backyard between 6:00 a.m. and 9:00 a.m.    The average value of a function on the interval is . In this context, the function we want the average value of is , the total amount of rainwater in Avery's backyard at time . That is,   This is not the same thing as the average rate of change of the amount of rainwater in Avery's backyard. That would be     "
},
{
  "id": "exercise-area-approximation",
  "level": "2",
  "url": "sec-ps01.html#exercise-area-approximation",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Estimate the area under the curve from to using four rectangles.     Use right endpoints . Sketch the graph and the rectangles.    The width of each rectangle is . The right endpoints are . The heights of the rectangles are , , , . The area of each rectangle is width times height. So the total area is . The sketch is below.     f(x)=1\/x  NyuViolet=\"#57068c\"  MediumViolet1=\"#702b9d\"  MediumViolet2=\"#7b5aa6\"  LightViolet1=\"#ab82c5\"  LightViolet2=\"#eee6f3\"                  Repeat the estimation using left endpoints .    The width of each rectangle is . The left endpoints are . The heights of the rectangles are , , , . The area of each rectangle is width times height. So the total area is . The sketch is below.     f(x)=1\/x  NyuViolet=\"#57068c\"  MediumViolet1=\"#702b9d\"  MediumViolet2=\"#7b5aa6\"  LightViolet1=\"#ab82c5\"  LightViolet2=\"#eee6f3\"                  Explain why one estimate is an overestimate and the other is an underestimate.    The function is decreasing on the interval . Therefore, the left endpoints are always higher than the right endpoints. This means that the rectangles formed using left endpoints are always taller than those formed using right endpoints. So the left endpoint estimate is an overestimate and the right endpoint estimate is an underestimate.    "
},
{
  "id": "p-2",
  "level": "2",
  "url": "sec-ps01.html#p-2",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Let . Find the exact value of .   "
},
{
  "id": "p-4",
  "level": "2",
  "url": "sec-ps01.html#p-4",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  A particle's velocity is given by (in meters\/second) for .     Find the displacement of the particle over the interval.    Displacement is given by the integral of velocity. The displacement is 4 meters.      Find the total distance traveled by the particle over the interval.    Total distance is the integral of speed , which is the magnitude or absolute value of velocity. First, we need to find where . . The velocity is zero at and , positive on and , and negative on .  To evaluate the integral of the absolute value, we split the integral at these points. . We have The total distance is meters.    "
},
{
  "id": "p-3",
  "level": "2",
  "url": "sec-ps01.html#p-3",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate the definite integral using an appropriate substitution. You must show the change in the limits of integration.   "
},
{
  "id": "ps02",
  "level": "1",
  "url": "ps02.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 2",
  "body": " Problem Set 2   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Evaluate the indefinite integral . You must show all steps of the integration by parts process.      Evaluate the definite integral .      A particle moves along a straight line with velocity meters per second. Find the displacement of the particle over the interval .      Evaluate the integral .      Evaluate the indefinite integral .      Evaluate the indefinite integral .     First, make a substitution to simplify the integral.    Use the substitution . Then , which means . This substitution simplifies the integral to .      Evaluate the simplified integral.    To evaluate , we must use integration by parts. Let . Let and . Then and . So   Now, we use the Pythagorean identity :   Notice that the integral of has reappeared. We can now solve for .   Finally, we substitute back into the expression. We must also remember the from the initial substitution.       "
},
{
  "id": "ps02-01",
  "level": "2",
  "url": "ps02.html#ps02-01",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Evaluate the indefinite integral . You must show all steps of the integration by parts process.   "
},
{
  "id": "ps02-02",
  "level": "2",
  "url": "ps02.html#ps02-02",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Evaluate the definite integral .   "
},
{
  "id": "ps02-03",
  "level": "2",
  "url": "ps02.html#ps02-03",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  A particle moves along a straight line with velocity meters per second. Find the displacement of the particle over the interval .   "
},
{
  "id": "ps02-04",
  "level": "2",
  "url": "ps02.html#ps02-04",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Evaluate the integral .   "
},
{
  "id": "ps02-05",
  "level": "2",
  "url": "ps02.html#ps02-05",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate the indefinite integral .   "
},
{
  "id": "ps02-06",
  "level": "2",
  "url": "ps02.html#ps02-06",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Evaluate the indefinite integral .     First, make a substitution to simplify the integral.    Use the substitution . Then , which means . This substitution simplifies the integral to .      Evaluate the simplified integral.    To evaluate , we must use integration by parts. Let . Let and . Then and . So   Now, we use the Pythagorean identity :   Notice that the integral of has reappeared. We can now solve for .   Finally, we substitute back into the expression. We must also remember the from the initial substitution.     "
},
{
  "id": "ps03-section",
  "level": "1",
  "url": "ps03-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 3",
  "body": " Problem Set 3  Trigonometric Substitution and Partial Fractions   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. Although the final answer is important, being able to convey you understand the underlying concepts is more important. So show your work and explain your steps. Write complete sentences in English to connect your mathematical statements. Do not use the three-dots notation (∴ or ∵) when you mean therefore or because . Do not use an arrow (→) when you mean equals (=) or this implies or and now the next step is… . Use the worked examples in the textbook, or on solution sets to worksheets or previous problem sets, as a guide for how to write your solutions.  Written work should be neat and legible. Other than being written in longhand, your work should be as clean as something you would turn in for one of your writing classes. Write in linear order from left to right and top to bottom. Leave ample space for graders to write their comments. (Do not upload the exercise sheet with your answers written in the margins.) Setting aside one page per exercise is a good rule of thumb.  Prepare a single PDF and submit it to Gradescope. Mark the page of each exercise when you upload your pset. Make sure each page is in the proper orientation.      Evaluate the definite integral . Explain your steps and justify your choices for trigonometric substitution.      Evaluate the indefinite integral .      Evaluate the indefinite integral .      Evaluate the indefinite integral .      Evaluate the definite integral .      Evaluate the indefinite integral .     "
},
{
  "id": "ex-trig-sub-definite-x-squared-plus-four",
  "level": "2",
  "url": "ps03-section.html#ex-trig-sub-definite-x-squared-plus-four",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Evaluate the definite integral . Explain your steps and justify your choices for trigonometric substitution.   "
},
{
  "id": "ex-trig-sub-completing-the-square",
  "level": "2",
  "url": "ps03-section.html#ex-trig-sub-completing-the-square",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Evaluate the indefinite integral .   "
},
{
  "id": "ex-partial-fractions-long-division",
  "level": "2",
  "url": "ps03-section.html#ex-partial-fractions-long-division",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Evaluate the indefinite integral .   "
},
{
  "id": "ex-trig-sub-one-over-x-sqrt",
  "level": "2",
  "url": "ps03-section.html#ex-trig-sub-one-over-x-sqrt",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Evaluate the indefinite integral .   "
},
{
  "id": "ex-partial-fractions-repeated-quadratic",
  "level": "2",
  "url": "ps03-section.html#ex-partial-fractions-repeated-quadratic",
  "type": "Exercise",
  "number": "5",
  "title": "",
  "body": "  Evaluate the definite integral .   "
},
{
  "id": "ex-partial-fractions-u-sub",
  "level": "2",
  "url": "ps03-section.html#ex-partial-fractions-u-sub",
  "type": "Exercise",
  "number": "6",
  "title": "",
  "body": "  Evaluate the indefinite integral .   "
},
{
  "id": "ps04-section",
  "level": "1",
  "url": "ps04-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 4",
  "body": " Problem Set 4  Approximate Integration and Improper Integrals   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Use Simpson's Rule with to approximate the definite integral .      Determine if the integral converges or diverges. If it converges, find its value.      Use the Trapezoidal Rule with to approximate the definite integral .      Determine if the integral converges or diverges. If it converges, find its value.     "
},
{
  "id": "ex-simpsons-rule-revised",
  "level": "2",
  "url": "ps04-section.html#ex-simpsons-rule-revised",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Use Simpson's Rule with to approximate the definite integral .   "
},
{
  "id": "ex-improper-integral-type-2",
  "level": "2",
  "url": "ps04-section.html#ex-improper-integral-type-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Determine if the integral converges or diverges. If it converges, find its value.   "
},
{
  "id": "ex-trapezoidal-rule",
  "level": "2",
  "url": "ps04-section.html#ex-trapezoidal-rule",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the Trapezoidal Rule with to approximate the definite integral .   "
},
{
  "id": "ex-improper-integral-type-1",
  "level": "2",
  "url": "ps04-section.html#ex-improper-integral-type-1",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Determine if the integral converges or diverges. If it converges, find its value.   "
},
{
  "id": "ps06-section",
  "level": "1",
  "url": "ps06-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 6",
  "body": " Problem Set 6  Volume by Cylindrical Shells and Arc Length   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Find the volume of the solid generated by rotating the region bounded by , , and the -axis about the -axis.      Find the exact length of the curve given by for .      Find the volume of the solid generated by rotating the region bounded by and the -axis about the line .      Find the length of the curve defined by from to .     "
},
{
  "id": "ex-shells-method",
  "level": "2",
  "url": "ps06-section.html#ex-shells-method",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the volume of the solid generated by rotating the region bounded by , , and the -axis about the -axis.   "
},
{
  "id": "ex-arc-length-revised",
  "level": "2",
  "url": "ps06-section.html#ex-arc-length-revised",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the exact length of the curve given by for .   "
},
{
  "id": "ex-shells-method-2",
  "level": "2",
  "url": "ps06-section.html#ex-shells-method-2",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the volume of the solid generated by rotating the region bounded by and the -axis about the line .   "
},
{
  "id": "ex-arc-length-2",
  "level": "2",
  "url": "ps06-section.html#ex-arc-length-2",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the length of the curve defined by from to .   "
},
{
  "id": "ps07-section",
  "level": "1",
  "url": "ps07-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 7",
  "body": " Problem Set 7  Ordinary Differential Equations   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Solve the differential equation with the initial condition .      Solve the differential equation , where . This models exponential growth or decay.      Solve the differential equation with the initial condition .      Match the differential equation with its slope field.               Three different slope fields       "
},
{
  "id": "ex-sep-variables-1",
  "level": "2",
  "url": "ps07-section.html#ex-sep-variables-1",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Solve the differential equation with the initial condition .   "
},
{
  "id": "ex-sep-variables-2",
  "level": "2",
  "url": "ps07-section.html#ex-sep-variables-2",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Solve the differential equation , where . This models exponential growth or decay.   "
},
{
  "id": "ex-sep-variables-3",
  "level": "2",
  "url": "ps07-section.html#ex-sep-variables-3",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Solve the differential equation with the initial condition .   "
},
{
  "id": "ex-slope-field",
  "level": "2",
  "url": "ps07-section.html#ex-slope-field",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Match the differential equation with its slope field.               Three different slope fields     "
},
{
  "id": "ps08-section",
  "level": "1",
  "url": "ps08-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 8",
  "body": " Problem Set 8  Sequences and Series   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Determine whether the sequence converges or diverges. If it converges, find its limit.      Determine if the series converges or diverges. If it converges, find its sum.      Use the Integral Test to determine if the series converges or diverges.      Use the Direct Comparison Test to determine whether the series converges or diverges.     "
},
{
  "id": "ex-sequence-convergence-revised",
  "level": "2",
  "url": "ps08-section.html#ex-sequence-convergence-revised",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Determine whether the sequence converges or diverges. If it converges, find its limit.   "
},
{
  "id": "ex-geometric-series-revised",
  "level": "2",
  "url": "ps08-section.html#ex-geometric-series-revised",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Determine if the series converges or diverges. If it converges, find its sum.   "
},
{
  "id": "ex-integral-test",
  "level": "2",
  "url": "ps08-section.html#ex-integral-test",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the Integral Test to determine if the series converges or diverges.   "
},
{
  "id": "ex-comparison-test",
  "level": "2",
  "url": "ps08-section.html#ex-comparison-test",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Use the Direct Comparison Test to determine whether the series converges or diverges.   "
},
{
  "id": "ps09-section",
  "level": "1",
  "url": "ps09-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 9",
  "body": " Problem Set 9  Alternating Series and the Ratio Test   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Determine whether the series converges or diverges.      Determine whether the series is absolutely convergent, conditionally convergent, or divergent.      Use the Ratio Test to determine if the series converges or diverges.      Use the Root Test to determine if the series converges or diverges.     "
},
{
  "id": "ex-alternating-series-test-revised",
  "level": "2",
  "url": "ps09-section.html#ex-alternating-series-test-revised",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Determine whether the series converges or diverges.   "
},
{
  "id": "ex-absolute-convergence",
  "level": "2",
  "url": "ps09-section.html#ex-absolute-convergence",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Determine whether the series is absolutely convergent, conditionally convergent, or divergent.   "
},
{
  "id": "ex-ratio-test-revised",
  "level": "2",
  "url": "ps09-section.html#ex-ratio-test-revised",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Use the Ratio Test to determine if the series converges or diverges.   "
},
{
  "id": "ex-root-test",
  "level": "2",
  "url": "ps09-section.html#ex-root-test",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Use the Root Test to determine if the series converges or diverges.   "
},
{
  "id": "ps10-section",
  "level": "1",
  "url": "ps10-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 10",
  "body": " Problem Set 10  Power Series   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      Find the radius of convergence and interval of convergence for the series .      Find a power series representation for the function and determine its radius of convergence.      Find a power series representation for the function and find its radius of convergence.      Find a power series representation for .     "
},
{
  "id": "ex-power-series-convergence-revised",
  "level": "2",
  "url": "ps10-section.html#ex-power-series-convergence-revised",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the radius of convergence and interval of convergence for the series .   "
},
{
  "id": "ex-representing-function-as-power-series-revised",
  "level": "2",
  "url": "ps10-section.html#ex-representing-function-as-power-series-revised",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Find a power series representation for the function and determine its radius of convergence.   "
},
{
  "id": "ex-diff-power-series",
  "level": "2",
  "url": "ps10-section.html#ex-diff-power-series",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find a power series representation for the function and find its radius of convergence.   "
},
{
  "id": "ex-integral-power-series",
  "level": "2",
  "url": "ps10-section.html#ex-integral-power-series",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find a power series representation for .   "
},
{
  "id": "ps11-section",
  "level": "1",
  "url": "ps11-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 11",
  "body": " Problem Set 11  Parametric Curves and Polar Coordinates   This problem set consists not only of problems similar to what you've seen, but also of unique problems you may not have seen before. The purpose of the latter is for you to apply the concepts you've previously learned to new, unfamiliar, and usually more interesting situations. In some cases, problems connect ideas from multiple learning objectives.  Write full, clear solutions to the problems below. It is important that the logic of how you solved these problems is clear. Although the final answer is important, being able to convey you understand the underlying concepts is more important.  Prepare a single PDF and submit it to Gradescope.      A curve is defined by the parametric equations and . Find and .      Convert the polar equation to a Cartesian equation.      Find the length of the curve given by the parametric equations and for .      Convert the Cartesian equation to a polar equation.     "
},
{
  "id": "ex-parametric-derivatives",
  "level": "2",
  "url": "ps11-section.html#ex-parametric-derivatives",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  A curve is defined by the parametric equations and . Find and .   "
},
{
  "id": "ex-polar-to-cartesian",
  "level": "2",
  "url": "ps11-section.html#ex-polar-to-cartesian",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Convert the polar equation to a Cartesian equation.   "
},
{
  "id": "ex-parametric-arc-length",
  "level": "2",
  "url": "ps11-section.html#ex-parametric-arc-length",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the length of the curve given by the parametric equations and for .   "
},
{
  "id": "ex-cartesian-to-polar",
  "level": "2",
  "url": "ps11-section.html#ex-cartesian-to-polar",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Convert the Cartesian equation to a polar equation.   "
},
{
  "id": "ps12-section",
  "level": "1",
  "url": "ps12-section.html",
  "type": "Section",
  "number": "",
  "title": "Problem Set 12",
  "body": " Problem Set 12  Integration in Polar Coordinates   This problem set focuses on applications of integration in polar coordinates, including finding areas and arc lengths of polar curves.  These problems are for pratice only, and will not be collected or graded. Solutions will be released before the final exam.      Find the area enclosed by one loop of the four-leaved rose given by the polar equation .      Find the length of the spiral for .      Find the area of the region that lies inside the circle and outside the cardioid .      Find the length of the cardioid .     "
},
{
  "id": "ex-polar-area",
  "level": "2",
  "url": "ps12-section.html#ex-polar-area",
  "type": "Exercise",
  "number": "1",
  "title": "",
  "body": "  Find the area enclosed by one loop of the four-leaved rose given by the polar equation .   "
},
{
  "id": "ex-polar-arc-length",
  "level": "2",
  "url": "ps12-section.html#ex-polar-arc-length",
  "type": "Exercise",
  "number": "2",
  "title": "",
  "body": "  Find the length of the spiral for .   "
},
{
  "id": "ex-polar-area-between-curves",
  "level": "2",
  "url": "ps12-section.html#ex-polar-area-between-curves",
  "type": "Exercise",
  "number": "3",
  "title": "",
  "body": "  Find the area of the region that lies inside the circle and outside the cardioid .   "
},
{
  "id": "ex-polar-arc-length-2",
  "level": "2",
  "url": "ps12-section.html#ex-polar-arc-length-2",
  "type": "Exercise",
  "number": "4",
  "title": "",
  "body": "  Find the length of the cardioid .   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
