/**
 * Appcelerator Titanium
 * WARNING: This is a generated file.  Do not modify.
 */
package com.wipro.indiamap;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.appcelerator.titanium.TiStylesheet;

import org.appcelerator.kroll.KrollDict;

public final class ApplicationStylesheet extends TiStylesheet 
{
	public ApplicationStylesheet()
	{
		super();

		HashMap<String,KrollDict> app_idsMap = new HashMap<String,KrollDict>();
		KrollDict app_idsMap_bottomBar = new KrollDict();
		app_idsMap.put("bottomBar",app_idsMap_bottomBar);
		app_idsMap_bottomBar.put("height","60");
		app_idsMap_bottomBar.put("backgroundImage","images/iphone-bottombar.png");
		app_idsMap_bottomBar.put("bottom","0");
		KrollDict app_idsMap_tabGroupColor = new KrollDict();
		app_idsMap.put("tabGroupColor",app_idsMap_tabGroupColor);
		app_idsMap_tabGroupColor.put("barColor","#000");
		idsMap.put("app",app_idsMap);




	}
}

