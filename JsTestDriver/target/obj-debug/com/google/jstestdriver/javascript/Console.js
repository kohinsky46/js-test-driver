jstestdriver.Console=function(){this.log_=[]};jstestdriver.Console.prototype.log=function(){this.log_.push("[LOG] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.debug=function(){this.log_.push("[DEBUG] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.info=function(){this.log_.push("[INFO] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.warn=function(){this.log_.push("[WARN] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.error=function(){this.log_.push("[ERROR] "+jstestdriver.formatString.apply(this,arguments))};jstestdriver.Console.prototype.getLog=function(){var a=this.log_;this.log_=[];return a.join("\n")};