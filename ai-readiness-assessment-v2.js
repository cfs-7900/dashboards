const questions = [
 {category:"Awareness", key:"heard", q:"Have you heard of generative AI?", helper:"ChatGPT, Microsoft Copilot, Claude, Gemini, and similar tools.", answers:[
  [0,"Not really","I thought AI was mostly robots and movie problems."],[1,"Yes, vaguely","People keep saying it in meetings, so it must be important."],[2,"Yes","I understand the basic idea and have seen it used."],[3,"Yes, clearly","I can explain what it does, where it helps, and where it can fail."]]},
 {category:"Awareness", key:"terms", q:"How comfortable are you with common AI terms?", helper:"Examples: prompt, model, hallucination, context, agent, API, automation.", answers:[
  [0,"Not comfortable","That list looked like six separate IT tickets."],[1,"A few terms","I know “prompt” and can nod convincingly at the rest."],[2,"Most basics","I understand several terms in practical use."],[3,"Very comfortable","I can distinguish a chatbot, workflow, integration, and agent."]]},
 {category:"Current Use", key:"frequency", q:"How often do you currently use AI?", helper:"Count both work and personal use.", answers:[
  [0,"Never or almost never","My brain remains fully offline-compatible."],[1,"A few times per month","Usually when someone reminds me it exists."],[2,"Several times per week","It is a regular tool for selected tasks."],[3,"Daily","At this point it probably deserves a seat in the meeting."]]},
 {category:"Current Use", key:"tools", q:"Which best describes the AI tools you use?", helper:"Choose the closest overall answer.", answers:[
  [0,"None","Clean browser history."],[1,"One basic chatbot","Usually free ChatGPT or Copilot."],[2,"Multiple tools","I choose between ChatGPT, Claude, Copilot, or others."],[3,"Advanced tools","I use coding tools, agents, automations, APIs, or custom workflows."]]},
 {category:"Current Use", key:"worktasks", q:"What do you use AI for at work today?", helper:"Choose the most advanced level you use with some consistency.", answers:[
  [0,"Nothing yet","No judgment. This is why we are measuring."],[1,"Writing help","Emails, wording, grammar, or basic summaries."],[2,"Knowledge work","Analysis, planning, research, documents, or presentations."],[3,"Operational work","Repeatable workflows, data handling, coding, system actions, or automation."]]},
 {category:"Prompting", key:"prompt", q:"How do you normally ask AI for something?", helper:"Think about your actual process, not your best-ever prompt.", answers:[
  [0,"I do not use it","The prompt cannot fail if it never existed."],[1,"One quick sentence","I ask once and accept whatever comes back."],[2,"Context plus instructions","I explain the goal, audience, constraints, and desired output."],[3,"Iterative workflow","I refine, critique, provide examples, and verify the result."]]},
 {category:"Prompting", key:"quality", q:"When the first answer is weak, what do you do?", helper:"AI output usually improves through direction and iteration.", answers:[
  [0,"Stop using it","The robot had one chance."],[1,"Try another wording","Usually without explaining what was wrong."],[2,"Give feedback","I identify missing details and ask for a revision."],[3,"Diagnose the failure","I improve context, examples, sources, format, or task structure."]]},
 {category:"Verification", key:"verify", q:"How often do you verify AI-generated facts or recommendations?", helper:"Especially when decisions, clients, money, safety, or policy are involved.", answers:[
  [0,"Rarely","It sounded confident, and confidence is basically a citation."],[1,"Sometimes","When something looks obviously suspicious."],[2,"Usually","I check important facts, calculations, and assumptions."],[3,"Systematically","I require sources, compare records, and keep a human approval step."]]},
 {category:"Verification", key:"hallucination", q:"What does it mean when an AI “hallucinates”?", helper:"No medical degree required.", answers:[
  [0,"I am not sure","The machine needs sleep?"],[1,"It gives a weird answer","Something is off, but I may not know why."],[2,"It invents plausible information","The output can sound certain while being wrong."],[3,"It generates unsupported claims","I know how to reduce, detect, and handle that risk."]]},
 {category:"Security", key:"confidential", q:"Would you paste confidential company or client information into a public AI tool?", helper:"Examples: contracts, employee data, credentials, financial data, private emails, or client records.", answers:[
  [0,"Yes, if it helps","Efficiency first; consequences later."],[1,"Maybe","I am not sure what is allowed or which tools are approved."],[2,"Usually no","I remove sensitive details or avoid the tool."],[3,"No, unless explicitly approved","I follow company policy, permissions, and approved environments."]]},
 {category:"Security", key:"actions", q:"Before letting AI send, publish, purchase, delete, or change a system, what should happen?", helper:"This measures understanding of human approval and control.", answers:[
  [0,"Nothing special","Let it cook."],[1,"Maybe review it","Depending on whether I remember."],[2,"A person should approve","Important actions need a human checkpoint."],[3,"Controlled authorization","Use permissions, logs, testing, approvals, and rollback plans."]]},
 {category:"Automation", key:"automate", q:"Have you ever thought, “I could automate this”?", helper:"Repetitive reports, emails, data entry, reminders, handoffs, or system updates all count.", answers:[
  [0,"No","I simply continue doing tasks forever."],[1,"Yes, but no action","Then I completed it manually for the 400th time."],[2,"Yes, and tested something","The prototype saved 11 minutes after six hours of work."],[3,"Yes, and operationalized it","A repeatable workflow now reduces work or errors."]]},
 {category:"Automation", key:"api", q:"Your relationship with APIs is best described as:", helper:"An API lets systems exchange data or actions through defined rules.", answers:[
  [0,"What is an API?","Peaceful."],[1,"I know they exist","Someone in technology probably handles that."],[2,"I understand practical uses","I know an API can connect tools and reduce duplicate entry."],[3,"I have used one","There was a key. There was documentation. There was fear."]]},
 {category:"Automation", key:"agents", q:"What is an AI agent?", helper:"Choose the closest answer.", answers:[
  [0,"A chatbot with a job title","Possibly wearing a tiny digital headset."],[1,"An AI that answers questions","Close, but incomplete."],[2,"AI that can pursue a task using tools","It may reason, retrieve information, and take bounded actions."],[3,"A controlled autonomous system","It uses tools, memory, rules, permissions, monitoring, and human gates."]]},
 {category:"Tools", key:"github", q:"Have you ever opened GitHub and thought, “I can probably run this”?", helper:"Technical experience is not required for most company roles; this simply identifies advanced users.", answers:[
  [0,"What is GitHub?","A reasonable question."],[1,"I have seen it","It looks like a filing cabinet exploded."],[2,"I have followed a README","Until step three personally betrayed me."],[3,"I use repositories","I can review, run, modify, or manage code-based projects."]]},
 {category:"Tools", key:"copilot", q:"How familiar are you with Microsoft Copilot or AI inside Office 365?", helper:"Examples: Outlook summaries, meeting recaps, Word drafts, Teams, or document search.", answers:[
  [0,"Not familiar","I may have clicked a sparkle icon by accident."],[1,"Aware of it","I know it exists but rarely use it."],[2,"Use selected features","I use it for email, meetings, documents, or summaries."],[3,"Use it strategically","I understand its advantages, limits, permissions, and Microsoft context."]]},
 {category:"Business Value", key:"usecases", q:"Can you identify good AI use cases in your own role?", helper:"Good candidates are frequent, time-consuming, rules-based, document-heavy, or repetitive.", answers:[
  [0,"Not yet","My job feels too specific or physical."],[1,"Maybe one or two","Writing email faster is the main idea."],[2,"Several opportunities","I can point to recurring tasks, decisions, or information bottlenecks."],[3,"Yes, with prioritization","I can compare value, effort, risk, data needs, and implementation difficulty."]]},
 {category:"Business Value", key:"roi", q:"How should the company judge whether an AI project is worthwhile?", helper:"Choose the strongest answer.", answers:[
  [0,"Whether it looks impressive","Preferably with glowing workflow lines."],[1,"Whether people like it","Adoption matters, but is not the whole case."],[2,"Time and quality improvement","Measure labor, speed, errors, service, and consistency."],[3,"Business case plus controls","Baseline cost, expected return, risk, adoption, ownership, and actual results."]]},
 {category:"Training", key:"confidence", q:"How confident are you using AI for a new work task?", helper:"Assume the task is permitted and does not involve sensitive data.", answers:[
  [0,"Not confident","I would rather receive clear instructions first."],[1,"Somewhat unsure","I can try, but may not know how to judge the output."],[2,"Confident","I can structure the request, refine it, and verify the result."],[3,"Very confident","I can design a repeatable method and help others use it."]]},
 {category:"Training", key:"learning", q:"What learning format would help you most?", helper:"This answer is scored by independence, not by which format is “best.”", answers:[
  [0,"Start from the beginning","A plain-language introduction with guided practice."],[1,"Role-specific examples","Show me exactly how this applies to my work."],[2,"Workshop plus practice","Let me work through real scenarios with support."],[3,"Advanced build sessions","I want integrations, agents, automation, governance, or technical labs."]]},
 {category:"Culture", key:"attitude", q:"Which sentence best matches your attitude toward AI at work?", helper:"There is no required enthusiasm level.", answers:[
  [0,"Mostly skeptical or uninterested","I need a clear reason before changing how I work."],[1,"Curious but cautious","Show me useful examples and the rules."],[2,"Positive and practical","I want to use it where it genuinely helps."],[3,"Highly engaged","I actively experiment, build, teach, or advocate for responsible use."]]},
 {category:"Culture", key:"future", q:"How much do you expect AI to affect your role in the next two years?", helper:"Consider tasks and tools—not just job replacement.", answers:[
  [0,"Very little","My role will probably remain mostly unchanged."],[1,"Somewhat","A few tools or tasks may change."],[2,"Significantly","Many workflows and expectations will evolve."],[3,"Fundamentally","AI will reshape how work is organized, measured, and delivered."]]},
 {category:"Rabbit Hole", key:"named", q:"Have you ever named an AI agent?", helper:"This question is scientifically essential and absolutely not targeted at anyone.", answers:[
  [0,"No","Tools do not need names."],[1,"Maybe jokingly","It felt harmless at the time."],[2,"Yes","It improved morale, somehow."],[3,"Yes, multiple agents","They have roles, operating rules, and occasional performance issues."]]},
 {category:"Rabbit Hole", key:"midnight", q:"Have you ever spent most of the night configuring an AI workflow or multi-agent system?", helper:"Be honest. The browser history already knows.", answers:[
  [0,"Absolutely not","I sleep like a responsible adult."],[1,"No, but I see the danger","The slope appears slippery."],[2,"Not most of the night","More like four hours, which is basically restraint."],[3,"Yes","I saw the sunrise and called it system testing."]]} 
];

let index=0;
const responses={};
const profile={};

function show(id){
 document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
 document.getElementById(id).classList.add("active");
 window.scrollTo({top:0,behavior:"smooth"});
}
function startAssessment(){
 const name=document.getElementById("name").value.trim();
 const title=document.getElementById("title").value.trim();
 const department=document.getElementById("department").value;
 const workstyle=document.getElementById("workstyle").value;
 if(!name||!title||!department||!workstyle){alert("Please complete all required respondent fields.");return;}
 Object.assign(profile,{name,title,department,workstyle});
 show("quizScreen");renderQuestion();
}
function renderQuestion(){
 const item=questions[index];
 document.getElementById("sectionText").textContent=`Section: ${item.category}`;
 document.getElementById("countText").textContent=`${index+1} of ${questions.length}`;
 document.getElementById("progress").style.width=`${((index)/questions.length)*100}%`;
 document.getElementById("categoryLabel").textContent=item.category;
 document.getElementById("questionText").textContent=item.q;
 document.getElementById("questionHelper").textContent=item.helper;
 const answers=document.getElementById("answers");answers.innerHTML="";
 item.answers.forEach(([score,label,detail],answerIndex)=>{
   const btn=document.createElement("button");
   btn.className="answer"+(responses[item.key]?.answerIndex===answerIndex?" selected":"");
   btn.innerHTML=`<strong>${label}</strong><span>${detail}</span>`;
   btn.onclick=()=>selectAnswer(item,answerIndex,score,label);
   answers.appendChild(btn);
 });
 document.getElementById("backBtn").style.visibility=index===0?"hidden":"visible";
 document.getElementById("nextBtn").disabled=!responses[item.key];
 document.getElementById("nextBtn").textContent=index===questions.length-1?"Final questions →":"Next →";
}
function selectAnswer(item,answerIndex,score,label){
 responses[item.key]={answerIndex,score,label,category:item.category,question:item.q};
 renderQuestion();
}
function goNext(){
 if(!responses[questions[index].key])return;
 if(index<questions.length-1){index++;renderQuestion()}else{show("commentsScreen")}
}
function goBack(){if(index>0){index--;renderQuestion()}}
function returnToLast(){show("quizScreen");index=questions.length-1;renderQuestion()}
function calculate(){
 const values=Object.values(responses);
 const total=values.reduce((s,r)=>s+r.score,0);
 const max=questions.length*3;
 const overall=Math.round((total/max)*100);
 const categoryData={};
 values.forEach(r=>{
   categoryData[r.category] ||= {score:0,count:0};
   categoryData[r.category].score+=r.score;categoryData[r.category].count++;
 });
 Object.keys(categoryData).forEach(k=>categoryData[k].percent=Math.round(categoryData[k].score/(categoryData[k].count*3)*100));
 return {overall,categoryData};
}
function levelFor(score){
 if(score<25)return {title:"AI Newcomer",copy:"You are at the beginning of the rabbit hole. The best next step is a plain-language introduction focused on safe, immediately useful tasks—not technical jargon.",training:"Foundations + guided examples"};
 if(score<50)return {title:"Practical Beginner",copy:"You have some awareness or basic usage, but your process is still inconsistent. Role-specific examples and simple verification habits should create quick value.",training:"Role-based basics + safe use"};
 if(score<70)return {title:"Capable User",copy:"You use AI productively and understand several important concepts. The next gain comes from repeatable methods, stronger verification, and workflow-level thinking.",training:"Intermediate workflows + verification"};
 if(score<86)return {title:"Advanced Practitioner",copy:"You are well beyond casual chatbot use. You may be able to support pilots, identify use cases, help peers, or contribute to standards and implementation.",training:"Advanced automation + champion track"};
 return {title:"Rabbit Hole Resident",copy:"You are operating at an unusually advanced level. Please remain available for pilots, governance design, integration work—and occasional reminders to go outside.",training:"Technical labs + program leadership"};
}
function finishAssessment(){
 const calc=calculate(),level=levelFor(calc.overall);
 profile.useCase=document.getElementById("useCase").value.trim();
 profile.concern=document.getElementById("concern").value.trim();
 profile.support=document.getElementById("support").value.trim();
 profile.completedAt=new Date().toISOString();
 document.getElementById("scoreValue").textContent=`${calc.overall}%`;
 document.getElementById("scoreRing").style.setProperty("--deg",`${calc.overall*3.6}deg`);
 document.getElementById("resultTitle").textContent=level.title;
 document.getElementById("resultCopy").textContent=level.copy;
 const metrics=document.getElementById("categoryMetrics");metrics.innerHTML="";
 Object.entries(calc.categoryData).forEach(([name,data])=>{
   metrics.innerHTML+=`<div class="metric"><div class="metric-top"><b>${name}</b><span>${data.percent}%</span></div><div class="bar"><i style="width:${data.percent}%"></i></div></div>`;
 });
 const lowest=Object.entries(calc.categoryData).sort((a,b)=>a[1].percent-b[1].percent)[0];
 document.getElementById("trainingCallout").innerHTML=`<strong>Suggested development focus:</strong> ${level.training}. Lowest measured category: <strong>${lowest[0]} (${lowest[1].percent}%)</strong>. This is a directional prototype score, not an employee performance rating.`;
 document.getElementById("summaryRow").innerHTML=`<tr><td>${escapeHtml(profile.name)}</td><td>${escapeHtml(profile.title)}</td><td>${escapeHtml(profile.department)}</td><td>${calc.overall}%</td><td>${level.title}</td><td>${level.training}</td></tr>`;
 profile.result={...calc,level};
 show("resultScreen");
}
function csvEscape(value){const s=String(value??"");return `"${s.replaceAll('"','""')}"`}
function downloadCSV(){
 const calc=profile.result||calculate();const level=calc.level||levelFor(calc.overall);
 const categoryNames=[...new Set(questions.map(q=>q.category))];
 const headers=["completed_at","name","job_title","department","work_setup","overall_score","readiness_level","suggested_training",...categoryNames.map(x=>`category_${x.toLowerCase().replaceAll(" ","_")}`),...questions.map(q=>`q_${q.key}`),"desired_use_case","biggest_concern","requested_support"];
 const row=[profile.completedAt,profile.name,profile.title,profile.department,profile.workstyle,calc.overall,level.title,level.training,...categoryNames.map(x=>calc.categoryData[x]?.percent??""),...questions.map(q=>responses[q.key]?.label??""),profile.useCase,profile.concern,profile.support];
 const csv=headers.map(csvEscape).join(",")+"\n"+row.map(csvEscape).join(",");
 const blob=new Blob([csv],{type:"text/csv;charset=utf-8"});
 const url=URL.createObjectURL(blob);const a=document.createElement("a");
 a.href=url;a.download=`ai-readiness-${profile.name.toLowerCase().replace(/[^a-z0-9]+/g,"-")||"response"}.csv`;
 document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
}
function restart(){
 index=0;Object.keys(responses).forEach(k=>delete responses[k]);
 document.getElementById("useCase").value="";document.getElementById("concern").value="";document.getElementById("support").value="";
 show("startScreen");
}
function escapeHtml(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[m]))}
