export const CasesIncidentFormConfig = {
    "working": {
        label: "Where are you working?",
        type: "select",
        options: [
            { text: "In the office", value: "Office" },
            { text: "At Home", value: "Home" },
        
        ]
    },
    "requesttype": {
        label: "Request Type",
        type: "select",
        options: [
            { text: "New", value: "New" },
            { text: "Move", value: "Move" },
            { text: "Refresh", value: "Refresh" },
            { text: "loaner", value: "loaner" }

        ]
    },

    "shortdescription": { label: "Request Description and Business Justification", type: "textarea" },
    "destination": {
        label: "Destination",
        type: "select",
        options: [
            { text: "Operation", value: "Operation" },
            { text: "Support Area", value: "Support Area" },
          
        ]
    },
 "requestforuser": {
        label: "Request for user",
        type: "select",
        options: [
            { text: "Harish", value: "Harish" },
            { text: "Vivek", value: "Vivek" },
            { text: "Sachin", value: "Sachin" }
        ]
    },
    "Other User": {
        label: "Other User",
        type: "text",
    },
    
    "callbacknumber": {
        label: "Callback number",
        type: "textarea",
        options: [
            { text: "--None--", value: "" },
        ]
    },
   
    "workstationnumber": { label: "Workstation Number", type: "text", },
    "requestduration": {
        label: "Request Duration",
        type: "select",
        options: [
            { text: "Permanent", value: "Permanent" },
            { text: "Temporary", value: "Temporary" },
           

        ]
    },
    "otheruser": {
        label: "Other User",
        type: "select",
        options: [
            { text: "--None--", value: "" },
        ]
    },
   
    "otherusercallbacknumber": {
        label: "Callback number",
        type: "select",
    },
    
    "program": {
        label: "Program (FA)",
        type: "select",
        options: [
            { text: "None selected", value: "" },
            { text: "Serivce Delivery", value: "Serivce Delivery" },
            { text: "1 Life Healthcare", value: "1 Life Healthcare" },
            { text: "23andMe", value: "23andMe" },
        ]
    },
    "sitelocation": {
        label: "Site Location",
        type: "select",
        options: [
            { text: "None Selected", value: "" },
            { text: "Barcelona", value: "Barcelona" },
            { text: "Bratislava", value: "Bratislava" },
            { text: "Capigmini (Not use)", value: "capigmini" },
            { text: "CC360", value: "CC360" },
            { text: "Essen Digital", value: "Essen Digital" },
            { text: "Holiday AT INT", value: "Holiday AT INT" },
            { text: "IE BG Telepoint", value: "IE BG Telepoint" },
            { text: "Ohter (not listed)", value: "Ohter (not listed)" },
            { text: "Riga", value: "Riga" },
            { text: "TC3", value: "TC3" },
            { text: "Telus-TENA", value: "Telus-TENA" },
            { text: "TI Enterprise", value: "TI Enterprise" },
            { text: "TIAI Ballina Office", value: "TIAI Ballina Office" },
            { text: "TIAI Copenhagen-AI", value: "TIAI Copenhagen-AI" },
            { text: "TIAI London", value: "TIAI London" },
            { text: "TIAI Seattle", value: "TIAI Seattle" },
            { text: "TIAI Seoul", value: "TIAI Seoul" },
            { text: "TIAI Singapore", value: "TIAI Singapore" },
            { text: "TIAI Tampere Office", value: "TIAI Tampere Office" },
            { text: "TIAI Tampere Warehouse", value: "TIAI Tampere Warehouse" },
            { text: "TIAI Tokyo-Gengo", value: "TIAI Tokyo-Gengo" },
            { text: "TICA GT Interamericas", value: "TICA GT Interamericas" },
            { text: "TICA GT Pradera", value: "TICA GT Pradera" },
            { text: "TICA GT Pradera East", value: "TICA GT Pradera East" },
            { text: "TICA GT Pradera West", value: "TICA GT Pradera West" },
            { text: "TICA GT Xela", value: "TICA GT Xela" },
            { text: "TICA SV Cascades", value: "TICA SV Cascades" },
            { text: "TICA SV Plaza Merliot", value: "TICA SV Plaza Merliot" },
            { text: "TICAN Calgary", value: "TICAN Calgary" },
            { text: "TICAN Edmonton", value: "TICAN Edmonton" },
            { text: "TICAN Montreal", value: "TICAN Montreal" },
            { text: "TICAN Toronto", value: "TICAN Toronto" },
            { text: "TICAN Chengdu", value: "TICAN Chengdu" },
            { text: "TIE- DE Essex", value: "TIE- DE Essex" },
            { text: "TIE- TR Istanbul", value: "TIE- TR Istanbul" },
            { text: "TIE BG Hermes Park", value: "TI BG Hermes Park" },
            { text: "TIE BG Infinity Tower", value: "TIE BG Infinity Tower" },
            { text: "TIE BG Plovdir", value: "TIE BG Plovdir" },
            { text: "TIE BG Telepoint", value: "TIE BG Telepoint" },
            { text: "TIE BG Telus Tower", value: "TIE BG Telus Tower" },
            { text: "TIE RO Bucharest", value: "TIE RO Bucharest" },
            { text: "TIE RO Craiova", value: "TIE RO Craiova" },
            { text: "TII Bangaluru", value: "TII Bangaluru" },
            { text: "TII Noida 135", value: "TII Noida 135" },
            { text: "TII Noida 54", value: "TII Noida 54" },
            { text: "TIP Araneta", value: "TIP Araneta" },
            { text: "TIP Discovery", value: "TIP Discovery" },
            { text: "TIP IIoilo (DO NOT USE)", value: "TIP IIoilo (DO NOT USE)" },
            { text: "TIP Market-Market", value: "TIP Market-Market" },
            { text: "TIP Mckinley", value: "TIP Mckinley" },
            { text: "TIP Mckinley West", value: "TIP Mckinley West" },
            { text: "TIP Pavia- IIoilo", value: "TIP Pavia- IIoilo" },
            { text: "TIP Strata- IIoilo", value: "TIP Strata- IIoilo" },
            { text: "TIP Vertis North", value: "TIP Vertis North" },
            { text: "TIUS Folsom", value: "TIUS Folsom" },
            { text: "TIUS Los Angeles", value: "TIUS Los Angeles" },
            { text: "TIUS Miami", value: "TIUS Miami" },
            { text: "TIUS Nevada", value: "TIUS Nevada" },
            { text: "TIUS North Charleston", value: "TIUS North Charleston" },
            { text: "Triple C Holding", value: "Triple C Holding" },
            { text: "US & Canada At Home", value: "US & Canada At Home" },
            { text: "Vienna", value: "Vienna" },
            { text: "Voxpro Cork", value: "Voxpro Cork" },
            { text: "Voxpro Dublin", value: "Voxpro Dublin" },
            { text: "Work Anywhare- NA", value: "Work Anywhare- NA" },
        ]
    },
    "realdate": {
        label: "End Duration Date",
        type: "select",
    },
    "descriptionofissue": { label: "Description of Issue", type: "textarea" },
    "watchlist": {
        label: "Watch List",
        type: "email",
    },
    testimonials: {
        label: "Attachments",
        type: "file",
    },
    
}