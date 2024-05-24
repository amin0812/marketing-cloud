<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>
      Marketing Cloud Dashboard
    </title>
    <style>
      .main-panel[data="primary"] {
        border-top: 2px solid#beb8b4;
      }
      .btn-primary {
        background: #beb8b4;
        background-image: -webkit-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4);
        background-image: -o-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4);
        background-image: -moz-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4);
        background-image: linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4);
        background-size: 210% 210%;
        background-position: top right;
        background-color: ;
        transition: all 0.15s ease;
        box-shadow: none;
        color: #000000;
      }
      .btn-primary.animation-on-hover:hover {
        background-position: bottom left;
        transition: 0.3s ease-in-out;
      }
      .btn-primary:hover,
      .btn-primary:focus,
      .btn-primary:active,
      .btn-primary.active,
      .btn-primary:active:focus,
      .btn-primary:active:hover,
      .btn-primary.active:focus,
      .btn-primary.active:hover {
        background-color: #beb8b4 !important;
        background-image: linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-image: -webkit-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-image: -o-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-image: -moz-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        color: #000000;
        box-shadow: none;
      }
      .btn-primary:active {
        box-shadow: none !important;
        transform: translateY(1px) !important;
        transition: all .15s ease;
      }
      .btn-primary:not([data-action]):hover {
        box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.4);
        transform: translateY(-1px);
        -webkit-transform: translateY(-1px);
      }
      .btn-primary.disabled,
      .btn-primary.disabled:hover,
      .btn-primary.disabled:focus,
      .btn-primary.disabled.focus,
      .btn-primary.disabled:active,
      .btn-primary.disabled.active,
      .btn-primary:disabled,
      .btn-primary:disabled:hover,
      .btn-primary:disabled:focus,
      .btn-primary:disabled.focus,
      .btn-primary:disabled:active,
      .btn-primary:disabled.active,
      .btn-primary[disabled],
      .btn-primary[disabled]:hover,
      .btn-primary[disabled]:focus,
      .btn-primary[disabled].focus,
      .btn-primary[disabled]:active,
      .btn-primary[disabled].active,
      fieldset[disabled] .btn-primary,
      fieldset[disabled] .btn-primary:hover,
      fieldset[disabled] .btn-primary:focus,
      fieldset[disabled] .btn-primary.focus,
      fieldset[disabled] .btn-primary:active,
      fieldset[disabled] .btn-primary.active {
        background-color: #beb8b4;
        border-color: #beb8b4;
      }
      .btn-primary.btn-simple {
        color: #beb8b4;
        border-color: #0071b9;
        background: transparent;
      }
      .btn-primary.btn-simple:hover,
      .btn-primary.btn-simple:focus,
      .btn-primary.btn-simple:active,
      .btn-primary.btn-simple:not(:disabled):not(.disabled):active {
        color: #beb8b4;
        border-color: #beb8b4;
        background-color: transparent !important;
        background-image: none !important;
        box-shadow: none;
      }
      .btn-primary.btn-simple.active {
        border-color: #0071b9 !important;
      }
      .btn-primary.btn-simple.active:hover,
      .btn-primary.btn-simple.active:focus,
      .btn-primary.btn-simple.active:active,
      .btn-primary.btn-simple.active:not(:disabled):not(.disabled):active {
        color: #000000;
        border-color: #beb8b4;
        background-image: linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-image: -webkit-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-image: -o-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-image: -moz-linear-gradient(to bottom left, #beb8b4, #beb8b4, #beb8b4) !important;
        background-color: #beb8b4 !important;
        box-shadow: none;
      }
      .btn-primary.btn-link {
        color: #beb8b4;
      }
      .container-fluid {
        max-width: 100%;
      }
      h2,
      .chart-area {
        color: #0071b9;
      }
      .chart-area {
        height: 250px;
        width: 100%;
      }
      h2 {
        font-size: 1.6875rem;
      }
      h5 {
        color: #857971;
        font-size: 0.75rem;
      }
      * {
        font-family: Helvetica, Arial, sans-serif;
      }
      body,
      .main-panel {
        background: #fff;
      }
      .card {
        background: #323a46;
        border: 0;
        position: relative;
        width: 100%;
        margin-bottom: 30px;
        box-shadow: 0 1px 20px 0px rgba(0, 0, 0, 0.1)
      }
      .card-title span {
        padding-left: 5px;
      }
      .main-panel>.content {
        width: 95%;
        padding: 78px 0;
        margin: 0 auto;
      }
      .card-header {
        background: transparent;
        border: 0;
      }
    </style>
    <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
        <!--   Core JS Files   -->
    <script
            src="https://code.jquery.com/jquery-3.4.1.min.js"
            integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
            crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- Chart JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js"></script>
    <!-- Primary Script For Chart And Data Formatting -->
    <script src="https://pub.s50.exacttarget.com/pgovvti2fxw"></script>
    <script>
      /* Get Data Extension JSON */
      $.getJSON("https://mcv1hj9r0ntx1flb8yq0fbx0t7nq.pub.sfmc-content.com/pgovvti2fxw", function(json) {
        daily_obj_arr = json;
        var extended_timeline = [];
        for (var j = 0; j < daily_obj_arr.length; ++j) {
          var getDate = daily_obj_arr[j].eventDate;
          var formatter = new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric"
          }
                                                 ),
              newDate = formatter.format(new Date(getDate));
          extended_timeline.push(newDate.toUpperCase());
        }
        /* Map Data Extension Values By Type For Chart Display */
        var clicks = daily_obj_arr.map(function(a) {
          return parseInt(a.click);
        }
                                      );
        var sent = daily_obj_arr.map(function(a) {
          return parseInt(a.sent);
        }
                                    );
        var opens = daily_obj_arr.map(function(a) {
          return parseInt(a.open);
        }
                                     );
        var bounces = daily_obj_arr.map(function(a) {
          return parseInt(a.bounce);
        }
                                       );
        /* Functions For Styling and Formatting Chart */
        demo = {
          initPickColor: function() {
            $('.pick-class-label').click(function() {
              var new_class = $(this).attr('new-class');
              var old_class = $('#display-buttons').attr('data-class');
              var display_div = $('#display-buttons');
              if (display_div.length) {
                var display_buttons = display_div.find('.btn');
                display_buttons.removeClass(old_class);
                display_buttons.addClass(new_class);
                display_div.attr('data-class', new_class);
              }
            }
                                        );
          }
          ,
          /* Initialize Chart */
          initDashboardPageCharts: function() {
            gradientChartOptionsConfigurationWithTooltipPurple = {
              maintainAspectRatio: false,
              legend: {
                display: false
              }
              ,
              tooltips: {
                backgroundColor: '#f5f5f5',
                titleFontColor: '#333',
                bodyFontColor: '#666',
                bodySpacing: 4,
                xPadding: 12,
                mode: "nearest",
                intersect: 0,
                position: "nearest"
              }
              ,
              responsive: true,
              scales: {
                yAxes: [{
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: 'rgba(29,140,248,0.0)',
                    zeroLineColor: "transparent",
                  }
                  ,
                  ticks: {
                    suggestedMin: 60,
                    suggestedMax: 125,
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
                       ],
                xAxes: [{
                  barPercentage: 1.6,
                  gridLines: {
                    drawBorder: false,
                    color: 'rgba(225,78,202,0.1)',
                    zeroLineColor: "transparent",
                  }
                  ,
                  ticks: {
                    padding: 20,
                    fontColor: "#9a9a9a"
                  }
                }
                       ]
              }
            };
            var chart_labels = extended_timeline;
            var chart_data = sent;
            var ctx = document.getElementById("email_stats").getContext('2d');
            var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
            gradientStroke.addColorStop(1, 'rgba(41,55,60,0.1)');
            gradientStroke.addColorStop(0.4, 'rgba(103,139,151, 0.3)');
            gradientStroke.addColorStop(0, 'rgba(179,197,203,0)');
            //purple colors
            var config = {
              type: 'line',
              data: {
                labels: chart_labels,
                datasets: [{
                  label: "Sent",
                  fill: true,
                  backgroundColor: gradientStroke,
                  borderColor: '#0071b9',
                  borderWidth: 2,
                  borderDash: [],
                  borderDashOffset: 0.0,
                  pointBackgroundColor: '#0071b9',
                  pointBorderColor: 'rgba(255,255,255,0)',
                  pointHoverBackgroundColor: '#0071b9',
                  pointBorderWidth: 20,
                  pointHoverRadius: 4,
                  pointHoverBorderWidth: 15,
                  pointRadius: 4,
                  data: chart_data,
                }
                          ]
              }
              ,
              options: gradientChartOptionsConfigurationWithTooltipPurple,
              scales: {
                yAxes: [{
                  ticks: {
                    min: Math.min.apply(this, chart_data),
                    max: Math.max.apply(this, chart_data),
                    stepSize: 5
                  }
                }
                       ]
              }
            };
            /* Update Chart Data When New Type Is Selected */
            var myChartData = new Chart(ctx, config);
            $("#0").click(function() {
              var data = myChartData.config.data;
              data.datasets[0].data = sent;
              data.datasets[0].label = "Sent";
              data.labels = chart_labels;
              myChartData.update();
            }
                         );
            $("#1").click(function() {
              var chart_data = opens;
              var data = myChartData.config.data;
              data.datasets[0].data = chart_data;
              data.datasets[0].label = "Opens";
              data.labels = chart_labels;
              myChartData.update();
            }
                         );
            $("#2").click(function() {
              var chart_data = clicks;
              var data = myChartData.config.data;
              data.datasets[0].data = chart_data;
              data.datasets[0].label = "Clicks";
              data.labels = chart_labels;
              myChartData.update();
            }
                         );
            $("#3").click(function() {
              var chart_data = bounces;
              var data = myChartData.config.data;
              data.datasets[0].data = chart_data;
              data.datasets[0].label = "Bounces";
              data.labels = chart_labels;
              myChartData.update();
            }
                         );
          }
        };
        /* Execute Chart Function */
        demo.initDashboardPageCharts();
      }
               );
    </script>
    <script>
    </script>
  </head>
  <body class="">
    <div class="wrapper">
      <div class="main-panel">
        <div class="content">
          <div class="row">
            <div class="col-12">
              <div class="card card-chart">
                <div class="card-header ">
                  <div class="row">
                  <img src="https://image.s50.sfmc-content.com/lib/fe4211717564047d741674/m/1/adesso_basic_Color_RGB.png" alt="" style=" width: 300px; padding-left:10px;">
                  </div>
                  <br>
                  <div class="row">
                    <div class="col-sm-6 text-left">
                      <h5 class="card-category">EMAIL PERFORMANCE
                      </h5>
                      <h2 class="card-title">Performance
                      </h2>
                    </div>
                    <div class="col-sm-6">
                      <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                        <label class="btn btn-sm btn-primary btn-simple active" id="0">
                          <input type="radio" name="options" checked>
                          <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Sent</span>
                          <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02">
                            </i>
                          </span>
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple" id="1">
                          <input type="radio" class="d-none d-sm-none" name="options">
                          <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Opens</span>
                          <span class="d-block d-sm-none">
                            <i class="tim-icons icon-gift-2">
                            </i>
                          </span>
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple" id="2">
                          <input type="radio" class="d-none" name="options">
                          <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Clicks</span>
                          <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02">
                            </i>
                          </span>
                        </label>
                        <label class="btn btn-sm btn-primary btn-simple" id="3">
                          <input type="radio" class="d-none" name="options">
                          <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Bounces</span>
                          <span class="d-block d-sm-none">
                            <i class="tim-icons icon-tap-02">
                            </i>
                          </span>
                        </label>
                         <label class="btn btn-sm btn-primary btn-simple active" id="0">
                          <input type="radio" name="options" checked>
                          <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">New</span>
                          <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02">
                            </i>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-body">
                  <div class="chart-area">
                    <canvas id="email_stats">
                    </canvas>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>