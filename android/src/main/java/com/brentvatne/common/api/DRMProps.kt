package com.brentvatne.common.api

import com.brentvatne.common.toolbox.ReactBridgeUtils.safeGetArray
import com.brentvatne.common.toolbox.ReactBridgeUtils.safeGetString
import com.facebook.react.bridge.ReadableMap

/**
 * Class representing DRM props for host.
 * Only generic code here, no reference to the player.
 */
class DRMProps {
    /**
     * string version of configured UUID for drm prop
     */
    var drmType: String? = null

    /**
     * DRM license server to be used
     */
    var drmLicenseServer: String? = null

    /**
     * DRM Http Header to access to license server
     */
    var drmLicenseHeader: Array<String> = emptyArray<String>()

    /** return true if this and src are equals  */
    override fun equals(other: Any?): Boolean {
        if (other == null || other !is DRMProps) return false
        val seemsEqual = (
            drmType == other.drmType &&
                drmLicenseServer == other.drmLicenseServer &&
                drmLicenseHeader.size == other.drmLicenseHeader.size
            )
        if (!seemsEqual) {
            return false
        }
        var i = 0
        while (i < drmLicenseHeader.size) {
            if (drmLicenseHeader[i] != other.drmLicenseHeader[i]) {
                return false
            }
            i++
        }
        return true
    }

    companion object {
        private const val PROP_DRM_TYPE = "type"
        private const val PROP_DRM_LICENSE_SERVER = "licenseServer"
        private const val PROP_DRM_HEADERS = "headers"
        private const val PROP_DRM_HEADERS_KEY = "key"
        private const val PROP_DRM_HEADERS_VALUE = "value"

        /** parse the source ReadableMap received from app */
        @JvmStatic
        fun parse(src: ReadableMap?): DRMProps? {
            var drm: DRMProps? = null
            if (src != null && src.hasKey(PROP_DRM_TYPE)) {
                drm = DRMProps()
                drm.drmType = safeGetString(src, PROP_DRM_TYPE)
                drm.drmLicenseServer = safeGetString(src, PROP_DRM_LICENSE_SERVER)
                val drmHeadersArray = safeGetArray(src, PROP_DRM_HEADERS)
                if (drm.drmType != null && drm.drmLicenseServer != null) {
                    if (drmHeadersArray != null) {
                        val drmKeyRequestPropertiesList = ArrayList<String?>()
                        for (i in 0 until drmHeadersArray.size()) {
                            val current = drmHeadersArray.getMap(i)
                            drmKeyRequestPropertiesList.add(safeGetString(current, PROP_DRM_HEADERS_KEY))
                            drmKeyRequestPropertiesList.add(safeGetString(current, PROP_DRM_HEADERS_VALUE))
                        }
                        val array = emptyArray<String>()
                        drm.drmLicenseHeader = drmKeyRequestPropertiesList.toArray(array)
                    }
                } else {
                    return null
                }
            }
            return drm
        }
    }
}
