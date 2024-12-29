/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "PURE API", "index.html", [
    [ "Introduction", "index.html#autotoc_md82", [
      [ "Motivation", "index.html#autotoc_md83", null ],
      [ "Copy & Paste", "index.html#autotoc_md84", null ],
      [ "Sources", "index.html#autotoc_md85", null ]
    ] ],
    [ "Engine Usage", "usage.html", [
      [ "Coordinate System", "usage.html#coordsystem", null ],
      [ "Initialization", "usage.html#initialization", null ],
      [ "Loading Resources", "usage.html#loading", null ],
      [ "Rendering", "usage.html#rendering", null ],
      [ "Shutdown", "usage.html#shutdown", null ],
      [ "Samples", "usage.html#samples", null ]
    ] ],
    [ "Rendering Architecture & Pipeline", "architecture.html", [
      [ "Geometry Stage", "architecture.html#geometry_stage", [
        [ "Vertex Specification", "architecture.html#vertex_spec", null ],
        [ "Vertex Processing", "architecture.html#vertex_proc", null ],
        [ "Primitive (Triangle) Assembly", "architecture.html#primitive_assembly", null ]
      ] ],
      [ "Rasterization / Rendering Stage", "architecture.html#raster_stage", [
        [ "Triangle Setup / Scan-Line Conversion", "architecture.html#triangle_setup", null ],
        [ "Fragment Processing", "architecture.html#fragment_processing", null ],
        [ "Per-Sample Processing", "architecture.html#sample_processing", null ]
      ] ],
      [ "Do’s and don’t’s", "architecture.html#autotoc_md20", null ]
    ] ],
    [ "Visibility Optimizations", "visibility.html", "visibility" ],
    [ "GUI", "gui.html", [
      [ "Intro", "gui.html#gui_intro", null ],
      [ "Usage", "gui.html#gui_usage", null ]
    ] ],
    [ "Debugging", "debugging.html", [
      [ "Logging", "debugging.html#logging", null ],
      [ "Memory Usage", "debugging.html#memory_usage", null ],
      [ "Manager WriteList()", "debugging.html#manager_write_list", null ],
      [ "Render Hints", "debugging.html#render_hints", null ],
      [ "Current Statistics", "debugging.html#current_stats", null ],
      [ "Last Frame Statistics", "debugging.html#last_frame_stats", null ],
      [ "Other Statistics", "debugging.html#other_stats", null ],
      [ "Engine WriteList()", "debugging.html#engine_write_list", null ]
    ] ],
    [ "Used 3rd Party Libraries", "pure_used_libs.html", [
      [ "GUI", "pure_used_libs.html#pure_used_libs_gui", null ],
      [ "Windowing", "pure_used_libs.html#pure_used_libs_windowing", null ],
      [ "HW Detection, Part 1: Renderer", "pure_used_libs.html#pure_used_libs_hw_detect_renderer", [
        [ "Rendering HW Features, OpenGL Extensions", "pure_used_libs.html#pure_used_libs_hw_detect_renderer_ogl_extensions", null ],
        [ "Video Memory", "pure_used_libs.html#pure_used_libs_hw_detect_renderer_vidmem", null ]
      ] ],
      [ "HW Detection, Part 2: CPU, RAM, etc.", "pure_used_libs.html#pure_used_libs_hw_detect_other", null ],
      [ "Image File Loading", "pure_used_libs.html#pure_used_libs_images", null ],
      [ "Model File Loading", "pure_used_libs.html#pure_used_libs_models", [
        [ "OBJ and MTL", "pure_used_libs.html#pure_used_libs_models_obj_mtl", null ],
        [ "FBX and glTF", "pure_used_libs.html#pure_used_libs_models_fbx_gltf", null ]
      ] ],
      [ "Lightmaps", "pure_used_libs.html#pure_used_libs_lightmaps", null ],
      [ "Shaders", "pure_used_libs.html#pure_used_libs_shaders", null ],
      [ "OpenGL State Caching", "pure_used_libs.html#pure_used_libs_state_cache", null ]
    ] ],
    [ "Glossary", "glossary.html", null ],
    [ "Repositories And Build", "repos_and_build.html", null ],
    [ "Version History", "version_history.html", [
      [ "v0.4 - December 19, 2024", "version_history.html#v0_4", null ],
      [ "v0.3 - November 1, 2021", "version_history.html#v0_3", null ],
      [ "v0.2 - March 31, 2021", "version_history.html#v0_2", null ],
      [ "v0.1 - April 20, 2019", "version_history.html#v0_1", null ]
    ] ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", "namespacemembers_dup" ],
        [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", null ],
        [ "Variables", "globals_vars.html", "globals_vars" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", "globals_eval" ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_p_r00_fs_ultimate_rendering_engine_8cpp.html",
"_pure_g_lextension_funcs_8cpp.html#a4e8ef3e470108d76383ef9ef832bce2d",
"_pure_g_lextension_funcs_8cpp.html#ac1a5acbbad4fcb0bd27555cb2333009c",
"_pure_g_lextension_funcs_8h.html#a3068336d9dd5d3c5654c23766c2f9602",
"_pure_g_lextension_funcs_8h.html#a9b26ebdd3d34282f32ffee5d4ef6893c",
"_pure_g_lsafe_funcs_8h.html#a059920f1b45b3ddb7599fa94bcc5c003",
"_pure_screen_8cpp_source.html",
"class_p_r00_fs_ultimate_rendering_engine.html#abbb1f0045851488877262f88741a0e95",
"class_pure_hw_info.html#ae804908d8165b712ceb48d58598d0f96",
"class_pure_hw_video_discover_open_g_lbase.html#a29adfda3b524c247a5cd7a1979f35df5",
"class_pure_managed_1_1_pure_managed_impl.html#ae2855a53774f5cdee5d72db025ed14a3",
"class_pure_mesh3_d_1_1_pure_mesh3_d_impl.html#a82b5caef4ede1c99465fa162f4f982f7",
"class_pure_object3_d_manager.html#a616f718beef10dc4659a9ffe0f2d1247",
"class_pure_screen.html#a4a110e2b17244986bd5ce4fabd0d6256",
"class_pure_texture_manager_1_1_pure_texture_manager_impl.html#afcb277d7463a2ea69f51136be565e353",
"class_pure_vertex_transfer_1_1_pure_vertex_transfer_impl.html#ac85519251695f3f23366e22eb9010e14",
"functions_enum.html",
"imgui_8h.html#a236e39dbeeb9fc4e48ce19259bd6a27e",
"imgui_8h.html#a683cc5d09c63d74035a98ac3b0dec545a05467aac64c5cd254c154ab3a7f99971",
"imgui_8h.html#a8bf62aa65d40f17d5b8d8d8fb67d970b",
"imgui_8h.html#ad2afd5a59df2ef70ff03f4a851168814aa01369e3ded011e87385c6156244e469",
"namespace_im_gui.html#a1b0d79efa1241aef9f0f4ddc5247c8e2",
"namespace_im_gui.html#ac5c3f2ab95803c9bd31f2c9cb7b0e647",
"struct_im_draw_list.html#a16d26579a7e5079a507bfcb7471f97c2",
"struct_im_gui_i_o.html#a23c9c6c48a51774fee36b7f0bb75d331",
"struct_im_gui_text_filter.html#ac0f9318d9f62b63aa4d881ae03d1f910"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';