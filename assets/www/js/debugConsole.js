function avidDebugConsole(stringValue)
{
	if(DEBUG_MODE == 1){
		console.log("Value received is "+stringValue);
	}
	else{
		return 0;
	}
}