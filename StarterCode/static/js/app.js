const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const dataPromise = d3.json(url);
console.log("data", dataPromise);

d3.json(url).then(function(data){
    console.log(data);
    
    //default horizontal bar chart
    let trace1 = {
        x: data.samples[0].sample_values.slice(0, 10).reverse(),
        y: data.samples[0].otu_ids.map(id =>("OTU ") +id).slice(0, 10).reverse(),

        type: 'bar',
        orientation: 'h',
        text: data.samples[0].otu_labels.slice(0, 10).reverse(),
    };
    Plotly.newPlot("bar", [trace1]);

    //default bubble charthes here
    var trace2 = {
        x: data.samples[0].otu_ids.slice(0,50),
        y: data.samples[0].sample_values.slice(0, 50),
        text:data.samples[0].otu_labels.slice(0, 50),
        labelString: "OTU ID",
        mode: 'markers',
        marker: {
            size: data.samples[0].sample_values.slice(0, 50),
            color: data.samples[0].otu_ids.slice(0, 50)
            //backgroundColor: "rgb(255, 255, 132)"
        }
      };

    Plotly.newPlot("bubble", [trace2]);
    
    //default meta data info
    let MD_id = d3.select(".panel-body").append("div");
    MD_id.text("id: " + data.metadata[0].id);
    
    let MD_ethnicity = d3.select(".panel-body").append("div");
    MD_ethnicity.text("ethnicity: " + data.metadata[0].ethnicity);

    let MD_gender = d3.select(".panel-body").append("div");
    MD_gender.text("gender: " + data.metadata[0].gender);

    let MD_age = d3.select(".panel-body").append("div");
    MD_age.text("age: " + data.metadata[0].age);

    let MD_location = d3.select(".panel-body").append("div");
    MD_location.text("location: " + data.metadata[0].location);

    let MD_bbtype = d3.select(".panel-body").append("div");
    MD_bbtype.text("bbtype: " + data.metadata[0].bbtype);

    let MD_wfreq = d3.select(".panel-body").append("div");
    MD_wfreq.text("wfreq: " + data.metadata[0].wfreq);

    //default gauge chart
    var data = [
        {
            domain: { x: [0, 1], y: [0, 1] },
            value: data.metadata[0].wfreq,
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week" },
            type: "indicator",
            mode: "gauge+number",
            delta: { reference: 400 },
            gauge: { axis: { range: [null, 10] } }
        }
    ];
    
    var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
    Plotly.newPlot('gauge', data, layout);

    //default meta data info 

    


});




