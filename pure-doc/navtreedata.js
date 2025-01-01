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
    [ "Benchmarks & Samples", "benchmarks_samples.html", [
      [ "Benchmarks", "benchmarks_samples.html#benchmarks_intro", null ],
      [ "Samples", "benchmarks_samples.html#samples_intro", null ]
    ] ],
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
"class_p_r00_fs_ultimate_rendering_engine.html#aa787782f12a38f8ca769a34577caf096",
"class_pure_hw_info.html#acc350d0226bd0deb30eaa6f4e83ccb4e",
"class_pure_hw_video_discover_open_g_lbase.html",
"class_pure_managed_1_1_pure_managed_impl.html#ac5e57a685d4c10c5853cb73a658d2d5a",
"class_pure_mesh3_d_1_1_pure_mesh3_d_impl.html#a68485e3c01bf37f28d23fd5647ea29bf",
"class_pure_object3_d_manager.html#a4c01dd63f80c2ad5273f0d09d1c9b4ad",
"class_pure_screen.html#a2cc6f94fe0e9e6f7905bfbb2653ec9e9",
"class_pure_texture_manager_1_1_pure_texture_manager_impl.html#ae8813a4eecdb78c0b8fce3c1fd42ad90",
"class_pure_vertex_transfer_1_1_pure_vertex_transfer_impl.html#aac9b02081cdee3fca4e774e396685f84",
"functions_c.html",
"imgui_8h.html#a22c633861b96e82d1fe5fbd3054e0ed5",
"imgui_8h.html#a683cc5d09c63d74035a98ac3b0dec545a0198d71ee58f9dc80efac621a24ad2ec",
"imgui_8h.html#a8a36fce0bcf122748aa92354604e93b0",
"imgui_8h.html#ad2afd5a59df2ef70ff03f4a851168814a88cc81f6155a06d8fcc0821fb490301e",
"namespace_im_gui.html#a1922d9954452606eb356d887d7ca47d5",
"namespace_im_gui.html#ac42125a6d7ff91d17ca30dac04e0e1bd",
"struct_im_draw_list.html#a09e0f9faa0fece730a7fd17b37b444ca",
"struct_im_gui_i_o.html#a1ee9c0763df33f7f3a9819235ce85078",
"struct_im_gui_text_filter.html#a9043c1f0c33d29e6fc9b75ae81f9705a"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';