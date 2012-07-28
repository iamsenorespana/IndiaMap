package com.wipro.indiamap;

import org.appcelerator.titanium.ITiAppInfo;
import org.appcelerator.titanium.TiApplication;
import org.appcelerator.titanium.TiProperties;
import org.appcelerator.kroll.common.Log;

/* GENERATED CODE
 * Warning - this class was generated from your application's tiapp.xml
 * Any changes you make here will be overwritten
 */
public final class IndiamapAppInfo implements ITiAppInfo
{
	private static final String LCAT = "AppInfo";
	
	public IndiamapAppInfo(TiApplication app) {
		TiProperties properties = app.getSystemProperties();
		TiProperties appProperties = app.getAppProperties();
					
					properties.setBool("ti.android.fastdev", true);
					appProperties.setBool("ti.android.fastdev", true);
					
					properties.setString("ti.deploytype", "development");
					appProperties.setString("ti.deploytype", "development");
	}
	
	public String getId() {
		return "com.wipro.indiamap";
	}
	
	public String getName() {
		return "IndiaMap";
	}
	
	public String getVersion() {
		return "1.0";
	}
	
	public String getPublisher() {
		return "hbcumobile";
	}
	
	public String getUrl() {
		return "http://";
	}
	
	public String getCopyright() {
		return "2012 by hbcumobile";
	}
	
	public String getDescription() {
		return "not specified";
	}
	
	public String getIcon() {
		return "appicon.png";
	}
	
	public boolean isAnalyticsEnabled() {
		return true;
	}
	
	public String getGUID() {
		return "ac2f0a4c-d2a9-4730-a0da-5e25cb09b466";
	}
	
	public boolean isFullscreen() {
		return false;
	}
	
	public boolean isNavBarHidden() {
		return false;
	}
}
