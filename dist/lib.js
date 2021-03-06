! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.THREE = t.THREE || {})
}(this, function(t) {
    function e() {}

    function i(t, e) {
        this.x = t || 0, this.y = e || 0
    }

    function n(t, e, r, a, o, s, c, h, l, u) {
        Object.defineProperty(this, "id", {
            value: lr++
        }), this.uuid = hr.generateUUID(), this.name = "", this.image = void 0 !== t ? t : n.DEFAULT_IMAGE, this.mipmaps = [], this.mapping = void 0 !== e ? e : n.DEFAULT_MAPPING, this.wrapS = void 0 !== r ? r : 1001, this.wrapT = void 0 !== a ? a : 1001, this.magFilter = void 0 !== o ? o : 1006, this.minFilter = void 0 !== s ? s : 1008, this.anisotropy = void 0 !== l ? l : 1, this.format = void 0 !== c ? c : 1023, this.type = void 0 !== h ? h : 1009, this.offset = new i(0, 0), this.repeat = new i(1, 1), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.encoding = void 0 !== u ? u : 3e3, this.version = 0, this.onUpdate = null
    }

    function r(t, e, i, n) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0, this.w = void 0 !== n ? n : 1
    }

    function a(t, e, i) {
        this.uuid = hr.generateUUID(), this.width = t, this.height = e, this.scissor = new r(0, 0, t, e), this.scissorTest = !1, this.viewport = new r(0, 0, t, e), void 0 === (i = i || {}).minFilter && (i.minFilter = 1006), this.texture = new n(void 0, void 0, i.wrapS, i.wrapT, i.magFilter, i.minFilter, i.format, i.type, i.anisotropy, i.encoding), this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer, this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer, this.depthTexture = void 0 !== i.depthTexture ? i.depthTexture : null
    }

    function o(t, e, i) {
        a.call(this, t, e, i), this.activeMipMapLevel = this.activeCubeFace = 0
    }

    function s(t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._w = void 0 !== n ? n : 1
    }

    function c(t, e, i) {
        this.x = t || 0, this.y = e || 0, this.z = i || 0
    }

    function h() {
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], 0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
    }

    function l(t, e, i, r, a, o, s, c, h, l, u, p) {
        n.call(this, null, o, s, c, h, l, r, a, u, p), this.image = {
            data: t,
            width: e,
            height: i
        }, this.magFilter = void 0 !== h ? h : 1003, this.minFilter = void 0 !== l ? l : 1003, this.flipY = this.generateMipmaps = !1, this.unpackAlignment = 1
    }

    function u(t, e, i, r, a, o, s, c, h, l) {
        t = void 0 !== t ? t : [], n.call(this, t, void 0 !== e ? e : 301, i, r, a, o, s, c, h, l), this.flipY = !1
    }

    function p(t, e, i) {
        var n = t[0];
        if (0 >= n || 0 < n) return t;
        var r = e * i,
            a = dr[r];
        if (void 0 === a && (a = new Float32Array(r), dr[r] = a), 0 !== e)
            for (n.toArray(a, 0), n = 1, r = 0; n !== e; ++n) r += i, t[n].toArray(a, r);
        return a
    }

    function d(t, e) {
        var i = fr[e];
        void 0 === i && (i = new Int32Array(e), fr[e] = i);
        for (var n = 0; n !== e; ++n) i[n] = t.allocTextureUnit();
        return i
    }

    function f(t, e) {
        t.uniform1f(this.addr, e)
    }

    function m(t, e) {
        t.uniform1i(this.addr, e)
    }

    function g(t, e) {
        void 0 === e.x ? t.uniform2fv(this.addr, e) : t.uniform2f(this.addr, e.x, e.y)
    }

    function v(t, e) {
        void 0 !== e.x ? t.uniform3f(this.addr, e.x, e.y, e.z) : void 0 !== e.r ? t.uniform3f(this.addr, e.r, e.g, e.b) : t.uniform3fv(this.addr, e)
    }

    function y(t, e) {
        void 0 === e.x ? t.uniform4fv(this.addr, e) : t.uniform4f(this.addr, e.x, e.y, e.z, e.w)
    }

    function x(t, e) {
        t.uniformMatrix2fv(this.addr, !1, e.elements || e)
    }

    function b(t, e) {
        void 0 === e.elements ? t.uniformMatrix3fv(this.addr, !1, e) : (gr.set(e.elements), t.uniformMatrix3fv(this.addr, !1, gr))
    }

    function _(t, e) {
        void 0 === e.elements ? t.uniformMatrix4fv(this.addr, !1, e) : (mr.set(e.elements), t.uniformMatrix4fv(this.addr, !1, mr))
    }

    function w(t, e, i) {
        var n = i.allocTextureUnit();
        t.uniform1i(this.addr, n), i.setTexture2D(e || ur, n)
    }

    function M(t, e, i) {
        var n = i.allocTextureUnit();
        t.uniform1i(this.addr, n), i.setTextureCube(e || pr, n)
    }

    function E(t, e) {
        t.uniform2iv(this.addr, e)
    }

    function T(t, e) {
        t.uniform3iv(this.addr, e)
    }

    function S(t, e) {
        t.uniform4iv(this.addr, e)
    }

    function A(t, e) {
        t.uniform1fv(this.addr, e)
    }

    function R(t, e) {
        t.uniform1iv(this.addr, e)
    }

    function L(t, e) {
        t.uniform2fv(this.addr, p(e, this.size, 2))
    }

    function P(t, e) {
        t.uniform3fv(this.addr, p(e, this.size, 3))
    }

    function C(t, e) {
        t.uniform4fv(this.addr, p(e, this.size, 4))
    }

    function I(t, e) {
        t.uniformMatrix2fv(this.addr, !1, p(e, this.size, 4))
    }

    function U(t, e) {
        t.uniformMatrix3fv(this.addr, !1, p(e, this.size, 9))
    }

    function D(t, e) {
        t.uniformMatrix4fv(this.addr, !1, p(e, this.size, 16))
    }

    function N(t, e, i) {
        var n = e.length,
            r = d(i, n);
        for (t.uniform1iv(this.addr, r), t = 0; t !== n; ++t) i.setTexture2D(e[t] || ur, r[t])
    }

    function O(t, e, i) {
        var n = e.length,
            r = d(i, n);
        for (t.uniform1iv(this.addr, r), t = 0; t !== n; ++t) i.setTextureCube(e[t] || pr, r[t])
    }

    function B(t, e, i) {
        this.id = t, this.addr = i, this.setValue = function(t) {
            switch (t) {
                case 5126:
                    return f;
                case 35664:
                    return g;
                case 35665:
                    return v;
                case 35666:
                    return y;
                case 35674:
                    return x;
                case 35675:
                    return b;
                case 35676:
                    return _;
                case 35678:
                case 36198:
                    return w;
                case 35680:
                    return M;
                case 5124:
                case 35670:
                    return m;
                case 35667:
                case 35671:
                    return E;
                case 35668:
                case 35672:
                    return T;
                case 35669:
                case 35673:
                    return S
            }
        }(e.type)
    }

    function F(t, e, i) {
        this.id = t, this.addr = i, this.size = e.size, this.setValue = function(t) {
            switch (t) {
                case 5126:
                    return A;
                case 35664:
                    return L;
                case 35665:
                    return P;
                case 35666:
                    return C;
                case 35674:
                    return I;
                case 35675:
                    return U;
                case 35676:
                    return D;
                case 35678:
                    return N;
                case 35680:
                    return O;
                case 5124:
                case 35670:
                    return R;
                case 35667:
                case 35671:
                    return E;
                case 35668:
                case 35672:
                    return T;
                case 35669:
                case 35673:
                    return S
            }
        }(e.type)
    }

    function z(t) {
        this.id = t, this.seq = [], this.map = {}
    }

    function G(t, e, i) {
        this.seq = [], this.map = {}, this.renderer = i, i = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
        for (var n = 0; n < i; ++n) {
            var r = t.getActiveUniform(e, n),
                a = t.getUniformLocation(e, r.name),
                o = this,
                s = r.name,
                c = s.length;
            for (vr.lastIndex = 0;;) {
                var h = vr.exec(s),
                    l = vr.lastIndex,
                    u = h[1],
                    p = h[3];
                if ("]" === h[2] && (u |= 0), void 0 === p || "[" === p && l + 2 === c) {
                    s = o, r = void 0 === p ? new B(u, r, a) : new F(u, r, a), s.seq.push(r), s.map[r.id] = r;
                    break
                }
                void 0 === (p = o.map[u]) && (p = new z(u), u = o, o = p, u.seq.push(o), u.map[o.id] = o), o = p
            }
        }
    }

    function H(t, e, i) {
        return void 0 === e && void 0 === i ? this.set(t) : this.setRGB(t, e, i)
    }

    function V(t, e) {
        this.min = void 0 !== t ? t : new i(1 / 0, 1 / 0), this.max = void 0 !== e ? e : new i(-1 / 0, -1 / 0)
    }

    function k(t, e, n, r, a) {
        var o, s, h, l, u, p, d, f, m, g, v, y, x, b, _;
        this.render = function(t, w, M, E) {
            if (0 !== t.length) {
                w = new c;
                var T = E.w / E.z,
                    S = .5 * E.z,
                    A = .5 * E.w,
                    R = new i((I = 16 / E.w) * T, I),
                    L = new c(1, 1, 0),
                    P = new i(1, 1),
                    C = new V;
                if (C.min.set(E.x, E.y), C.max.set(E.x + (E.z - 16), E.y + (E.w - 16)), void 0 === x) {
                    var I = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                        U = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    v = e.createBuffer(), y = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, v), e.bufferData(e.ARRAY_BUFFER, I, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, y), e.bufferData(e.ELEMENT_ARRAY_BUFFER, U, e.STATIC_DRAW), b = e.createTexture(), _ = e.createTexture(), n.bindTexture(e.TEXTURE_2D, b), e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST), n.bindTexture(e.TEXTURE_2D, _), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
                    I = {
                        vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                        fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                    }, U = e.createProgram();
                    var D = e.createShader(e.FRAGMENT_SHADER),
                        N = e.createShader(e.VERTEX_SHADER),
                        O = "precision " + a.precision + " float;\n";
                    e.shaderSource(D, O + I.fragmentShader), e.shaderSource(N, O + I.vertexShader), e.compileShader(D), e.compileShader(N), e.attachShader(U, D), e.attachShader(U, N), e.linkProgram(U), x = U, m = e.getAttribLocation(x, "position"), g = e.getAttribLocation(x, "uv"), o = e.getUniformLocation(x, "renderType"), s = e.getUniformLocation(x, "map"), h = e.getUniformLocation(x, "occlusionMap"), l = e.getUniformLocation(x, "opacity"), u = e.getUniformLocation(x, "color"), p = e.getUniformLocation(x, "scale"), d = e.getUniformLocation(x, "rotation"), f = e.getUniformLocation(x, "screenPosition")
                }
                for (n.useProgram(x), n.initAttributes(), n.enableAttribute(m), n.enableAttribute(g), n.disableUnusedAttributes(), e.uniform1i(h, 0), e.uniform1i(s, 1), e.bindBuffer(e.ARRAY_BUFFER, v), e.vertexAttribPointer(m, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(g, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, y), n.disable(e.CULL_FACE), n.buffers.depth.setMask(!1), U = 0, D = t.length; U < D; U++)
                    if (I = 16 / E.w, R.set(I * T, I), N = t[U], w.set(N.matrixWorld.elements[12], N.matrixWorld.elements[13], N.matrixWorld.elements[14]), w.applyMatrix4(M.matrixWorldInverse), w.applyMatrix4(M.projectionMatrix), L.copy(w), P.x = E.x + L.x * S + S - 8, P.y = E.y + L.y * A + A - 8, !0 === C.containsPoint(P)) {
                        n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, null), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, b), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGB, P.x, P.y, 16, 16, 0), e.uniform1i(o, 0), e.uniform2f(p, R.x, R.y), e.uniform3f(f, L.x, L.y, L.z), n.disable(e.BLEND), n.enable(e.DEPTH_TEST), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), n.activeTexture(e.TEXTURE0), n.bindTexture(e.TEXTURE_2D, _), e.copyTexImage2D(e.TEXTURE_2D, 0, e.RGBA, P.x, P.y, 16, 16, 0), e.uniform1i(o, 1), n.disable(e.DEPTH_TEST), n.activeTexture(e.TEXTURE1), n.bindTexture(e.TEXTURE_2D, b), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), N.positionScreen.copy(L), N.customUpdateCallback ? N.customUpdateCallback(N) : N.updateLensFlares(), e.uniform1i(o, 2), n.enable(e.BLEND);
                        O = 0;
                        for (var B = N.lensFlares.length; O < B; O++) {
                            var F = N.lensFlares[O];
                            .001 < F.opacity && .001 < F.scale && (L.x = F.x, L.y = F.y, L.z = F.z, I = F.size * F.scale / E.w, R.x = I * T, R.y = I, e.uniform3f(f, L.x, L.y, L.z), e.uniform2f(p, R.x, R.y), e.uniform1f(d, F.rotation), e.uniform1f(l, F.opacity), e.uniform3f(u, F.color.r, F.color.g, F.color.b), n.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst), r.setTexture2D(F.texture, 1), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0))
                        }
                    } n.enable(e.CULL_FACE), n.enable(e.DEPTH_TEST), n.buffers.depth.setMask(!0), n.reset()
            }
        }
    }

    function j(t, e, i, r, a, o, s, c, h) {
        n.call(this, t, e, i, r, a, o, s, c, h), this.needsUpdate = !0
    }

    function W(t, e, i, n, r) {
        var a, o, h, l, u, p, d, f, m, g, v, y, x, b, _, w, M;

        function E(t, e) {
            return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : e.id - t.id
        }
        var T, S, A, R, L = new c,
            P = new s,
            C = new c;
        this.render = function(s, c, I) {
            if (0 !== s.length) {
                if (void 0 === A) {
                    var U = new Float32Array([-.5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                        D = new Uint16Array([0, 1, 2, 0, 2, 3]);
                    T = e.createBuffer(), S = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, T), e.bufferData(e.ARRAY_BUFFER, U, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, S), e.bufferData(e.ELEMENT_ARRAY_BUFFER, D, e.STATIC_DRAW), U = e.createProgram(), D = e.createShader(e.VERTEX_SHADER);
                    var N = e.createShader(e.FRAGMENT_SHADER);
                    e.shaderSource(D, ["precision " + r.precision + " float;", "#define SHADER_NAME SpriteMaterial\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")), e.shaderSource(N, ["precision " + r.precision + " float;", "#define SHADER_NAME SpriteMaterial\nuniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")), e.compileShader(D), e.compileShader(N), e.attachShader(U, D), e.attachShader(U, N), e.linkProgram(U), A = U, w = e.getAttribLocation(A, "position"), M = e.getAttribLocation(A, "uv"), a = e.getUniformLocation(A, "uvOffset"), o = e.getUniformLocation(A, "uvScale"), h = e.getUniformLocation(A, "rotation"), l = e.getUniformLocation(A, "scale"), u = e.getUniformLocation(A, "color"), p = e.getUniformLocation(A, "map"), d = e.getUniformLocation(A, "opacity"), f = e.getUniformLocation(A, "modelViewMatrix"), m = e.getUniformLocation(A, "projectionMatrix"), g = e.getUniformLocation(A, "fogType"), v = e.getUniformLocation(A, "fogDensity"), y = e.getUniformLocation(A, "fogNear"), x = e.getUniformLocation(A, "fogFar"), b = e.getUniformLocation(A, "fogColor"), _ = e.getUniformLocation(A, "alphaTest"), (U = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = 8, U.height = 8, (D = U.getContext("2d")).fillStyle = "white", D.fillRect(0, 0, 8, 8), R = new j(U)
                }
                i.useProgram(A), i.initAttributes(), i.enableAttribute(w), i.enableAttribute(M), i.disableUnusedAttributes(), i.disable(e.CULL_FACE), i.enable(e.BLEND), e.bindBuffer(e.ARRAY_BUFFER, T), e.vertexAttribPointer(w, 2, e.FLOAT, !1, 16, 0), e.vertexAttribPointer(M, 2, e.FLOAT, !1, 16, 8), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, S), e.uniformMatrix4fv(m, !1, I.projectionMatrix.elements), i.activeTexture(e.TEXTURE0), e.uniform1i(p, 0), D = U = 0, (N = c.fog) ? (e.uniform3f(b, N.color.r, N.color.g, N.color.b), N.isFog ? (e.uniform1f(y, N.near), e.uniform1f(x, N.far), e.uniform1i(g, 1), D = U = 1) : N.isFogExp2 && (e.uniform1f(v, N.density), e.uniform1i(g, 2), D = U = 2)) : (e.uniform1i(g, 0), D = U = 0);
                for (var O = 0, B = s.length; O < B; O++)(N = s[O]).modelViewMatrix.multiplyMatrices(I.matrixWorldInverse, N.matrixWorld), N.z = -N.modelViewMatrix.elements[14];
                s.sort(E);
                var F = [];
                for (O = 0, B = s.length; O < B; O++) {
                    var z = (N = s[O]).material;
                    if (!1 !== z.visible) {
                        N.onBeforeRender(t, c, I, void 0, z, void 0), e.uniform1f(_, z.alphaTest), e.uniformMatrix4fv(f, !1, N.modelViewMatrix.elements), N.matrixWorld.decompose(L, P, C), F[0] = C.x, F[1] = C.y;
                        var G = 0;
                        c.fog && z.fog && (G = D), U !== G && (e.uniform1i(g, G), U = G), null !== z.map ? (e.uniform2f(a, z.map.offset.x, z.map.offset.y), e.uniform2f(o, z.map.repeat.x, z.map.repeat.y)) : (e.uniform2f(a, 0, 0), e.uniform2f(o, 1, 1)), e.uniform1f(d, z.opacity), e.uniform3f(u, z.color.r, z.color.g, z.color.b), e.uniform1f(h, z.rotation), e.uniform2fv(l, F), i.setBlending(z.blending, z.blendEquation, z.blendSrc, z.blendDst, z.blendEquationAlpha, z.blendSrcAlpha, z.blendDstAlpha, z.premultipliedAlpha), i.buffers.depth.setTest(z.depthTest), i.buffers.depth.setMask(z.depthWrite), n.setTexture2D(z.map || R, 0), e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0), N.onAfterRender(t, c, I, void 0, z, void 0)
                    }
                }
                i.enable(e.CULL_FACE), i.reset()
            }
        }
    }

    function X() {
        Object.defineProperty(this, "id", {
            value: Mr++
        }), this.uuid = hr.generateUUID(), this.name = "", this.type = "Material", this.lights = this.fog = !0, this.blending = 1, this.side = 0, this.flatShading = !1, this.vertexColors = 0, this.opacity = 1, this.transparent = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null, this.depthFunc = 3, this.depthWrite = this.depthTest = !0, this.clippingPlanes = null, this.clipShadows = this.clipIntersection = !1, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetUnits = this.polygonOffsetFactor = 0, this.dithering = !1, this.alphaTest = 0, this.premultipliedAlpha = !1, this.overdraw = 0, this.visible = !0, this.userData = {}, this.needsUpdate = !0
    }

    function q(t) {
        X.call(this), this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.clipping = this.lights = this.fog = !1, this.extensions = {
            derivatives: !1,
            fragDepth: !1,
            drawBuffers: !1,
            shaderTextureLOD: !1
        }, this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv2: [0, 0]
        }, this.index0AttributeName = void 0, void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(t))
    }

    function Y(t) {
        X.call(this), this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.lights = this.fog = !1, this.setValues(t)
    }

    function Z(t) {
        X.call(this), this.type = "MeshDistanceMaterial", this.referencePosition = new c, this.nearDistance = 1, this.farDistance = 1e3, this.morphTargets = this.skinning = !1, this.displacementMap = this.alphaMap = this.map = null, this.displacementScale = 1, this.displacementBias = 0, this.lights = this.fog = !1, this.setValues(t)
    }

    function J(t, e) {
        this.min = void 0 !== t ? t : new c(1 / 0, 1 / 0, 1 / 0), this.max = void 0 !== e ? e : new c(-1 / 0, -1 / 0, -1 / 0)
    }

    function Q(t, e) {
        this.center = void 0 !== t ? t : new c, this.radius = void 0 !== e ? e : 0
    }

    function K() {
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], 0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
    }

    function $(t, e) {
        this.normal = void 0 !== t ? t : new c(1, 0, 0), this.constant = void 0 !== e ? e : 0
    }

    function tt(t, e, i, n, r, a) {
        this.planes = [void 0 !== t ? t : new $, void 0 !== e ? e : new $, void 0 !== i ? i : new $, void 0 !== n ? n : new $, void 0 !== r ? r : new $, void 0 !== a ? a : new $]
    }

    function et(t, e, n) {
        function o(e, i, n, r, a, o) {
            var s = e.geometry,
                c = g,
                h = e.customDepthMaterial;
            return n && (c = v, h = e.customDistanceMaterial), h ? c = h : (h = !1, i.morphTargets && (s && s.isBufferGeometry ? h = s.morphAttributes && s.morphAttributes.position && 0 < s.morphAttributes.position.length : s && s.isGeometry && (h = s.morphTargets && 0 < s.morphTargets.length)), e.isSkinnedMesh && !1 === i.skinning && console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", e), e = e.isSkinnedMesh && i.skinning, s = 0, h && (s |= 1), e && (s |= 2), c = c[s]), t.localClippingEnabled && !0 === i.clipShadows && 0 !== i.clippingPlanes.length && (s = c.uuid, h = i.uuid, void 0 === (e = y[s]) && (e = {}, y[s] = e), void 0 === (s = e[h]) && (s = c.clone(), e[h] = s), c = s), c.visible = i.visible, c.wireframe = i.wireframe, h = i.side, T.renderSingleSided && 2 == h && (h = 0), T.renderReverseSided && (0 === h ? h = 1 : 1 === h && (h = 0)), c.side = h, c.clipShadows = i.clipShadows, c.clippingPlanes = i.clippingPlanes, c.clipIntersection = i.clipIntersection, c.wireframeLinewidth = i.wireframeLinewidth, c.linewidth = i.linewidth, n && c.isMeshDistanceMaterial && (c.referencePosition.copy(r), c.nearDistance = a, c.farDistance = o), c
        }

        function s(i, n, r, a) {
            var c;
            if (!1 !== i.visible) {
                if (i.layers.test(n.layers) && (i.isMesh || i.isLine || i.isPoints) && i.castShadow && (!i.frustumCulled || l.intersectsObject(i))) {
                    i.modelViewMatrix.multiplyMatrices(r.matrixWorldInverse, i.matrixWorld);
                    var h = e.update(i),
                        u = i.material;
                    if (Array.isArray(u))
                        for (var p = h.groups, d = 0, f = p.length; d < f; d++) {
                            var g = p[d];
                            (c = u[g.materialIndex]) && c.visible && (c = o(i, c, a, m, r.near, r.far), t.renderBufferDirect(r, null, h, c, i, g))
                        } else u.visible && (c = o(i, u, a, m, r.near, r.far), t.renderBufferDirect(r, null, h, c, i, null))
                }
                for (h = 0, u = (i = i.children).length; h < u; h++) s(i[h], n, r, a)
            }
        }
        var l = new tt,
            u = new h,
            p = new i,
            d = new i(n, n),
            f = new c,
            m = new c,
            g = Array(4),
            v = Array(4),
            y = {},
            x = [new c(1, 0, 0), new c(-1, 0, 0), new c(0, 0, 1), new c(0, 0, -1), new c(0, 1, 0), new c(0, -1, 0)],
            b = [new c(0, 1, 0), new c(0, 1, 0), new c(0, 1, 0), new c(0, 1, 0), new c(0, 0, 1), new c(0, 0, -1)],
            _ = [new r, new r, new r, new r, new r, new r];
        for (n = 0; 4 !== n; ++n) {
            var w = 0 != (1 & n),
                M = 0 != (2 & n),
                E = new Y({
                    depthPacking: 3201,
                    morphTargets: w,
                    skinning: M
                });
            g[n] = E, w = new Z({
                morphTargets: w,
                skinning: M
            }), v[n] = w
        }
        var T = this;
        this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1, this.renderSingleSided = this.renderReverseSided = !0, this.render = function(e, i, n) {
            if (!1 !== T.enabled && (!1 !== T.autoUpdate || !1 !== T.needsUpdate) && 0 !== e.length) {
                var r = t.state;
                r.disable(t.context.BLEND), r.buffers.color.setClear(1, 1, 1, 1), r.buffers.depth.setTest(!0), r.setScissorTest(!1);
                for (var o, c = 0, h = e.length; c < h; c++) {
                    var g = e[c];
                    o = g.shadow;
                    var v = g && g.isPointLight;
                    if (void 0 === o) console.warn("THREE.WebGLShadowMap:", g, "has no shadow.");
                    else {
                        var y = o.camera;
                        if (p.copy(o.mapSize), p.min(d), v) {
                            var w = p.x,
                                M = p.y;
                            _[0].set(2 * w, M, w, M), _[1].set(0, M, w, M), _[2].set(3 * w, M, w, M), _[3].set(w, M, w, M), _[4].set(3 * w, 0, w, M), _[5].set(w, 0, w, M), p.x *= 4, p.y *= 2
                        }
                        for (null === o.map && (o.map = new a(p.x, p.y, {
                                minFilter: 1003,
                                magFilter: 1003,
                                format: 1023
                            }), o.map.texture.name = g.name + ".shadowMap", y.updateProjectionMatrix()), o.isSpotLightShadow && o.update(g), w = o.map, M = o.matrix, m.setFromMatrixPosition(g.matrixWorld), y.position.copy(m), v ? (o = 6, M.makeTranslation(-m.x, -m.y, -m.z)) : (o = 1, f.setFromMatrixPosition(g.target.matrixWorld), y.lookAt(f), y.updateMatrixWorld(), M.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), M.multiply(y.projectionMatrix), M.multiply(y.matrixWorldInverse)), t.setRenderTarget(w), t.clear(), g = 0; g < o; g++) v && (f.copy(y.position), f.add(x[g]), y.up.copy(b[g]), y.lookAt(f), y.updateMatrixWorld(), r.viewport(_[g])), u.multiplyMatrices(y.projectionMatrix, y.matrixWorldInverse), l.setFromMatrix(u), s(i, n, y, v)
                    }
                }
                T.needsUpdate = !1
            }
        }
    }

    function it(t, e, i, n) {
        this._x = t || 0, this._y = e || 0, this._z = i || 0, this._order = n || it.DefaultOrder
    }

    function nt() {
        this.mask = 1
    }

    function rt() {
        Object.defineProperty(this, "id", {
            value: Er++
        }), this.uuid = hr.generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = rt.DefaultUp.clone();
        var t = new c,
            e = new it,
            i = new s,
            n = new c(1, 1, 1);
        e.onChange(function() {
            i.setFromEuler(e, !1)
        }), i.onChange(function() {
            e.setFromQuaternion(i, void 0, !1)
        }), Object.defineProperties(this, {
            position: {
                enumerable: !0,
                value: t
            },
            rotation: {
                enumerable: !0,
                value: e
            },
            quaternion: {
                enumerable: !0,
                value: i
            },
            scale: {
                enumerable: !0,
                value: n
            },
            modelViewMatrix: {
                value: new h
            },
            normalMatrix: {
                value: new K
            }
        }), this.matrix = new h, this.matrixWorld = new h, this.matrixAutoUpdate = rt.DefaultMatrixAutoUpdate, this.matrixWorldNeedsUpdate = !1, this.layers = new nt, this.visible = !0, this.receiveShadow = this.castShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.userData = {}
    }

    function at() {
        rt.call(this), this.type = "Camera", this.matrixWorldInverse = new h, this.projectionMatrix = new h
    }

    function ot(t, e, i, n, r, a) {
        at.call(this), this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t, this.right = e, this.top = i, this.bottom = n, this.near = void 0 !== r ? r : .1, this.far = void 0 !== a ? a : 2e3, this.updateProjectionMatrix()
    }

    function st(t, e, i, n) {
        at.call(this), this.type = "PerspectiveCamera", this.fov = void 0 !== t ? t : 50, this.zoom = 1, this.near = void 0 !== i ? i : .1, this.far = void 0 !== n ? n : 2e3, this.focus = 10, this.aspect = void 0 !== e ? e : 1, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix()
    }

    function ct(t, e, i, n, r, a) {
        this.a = t, this.b = e, this.c = i, this.normal = n && n.isVector3 ? n : new c, this.vertexNormals = Array.isArray(n) ? n : [], this.color = r && r.isColor ? r : new H, this.vertexColors = Array.isArray(r) ? r : [], this.materialIndex = void 0 !== a ? a : 0
    }

    function ht() {
        Object.defineProperty(this, "id", {
            value: Tr++
        }), this.uuid = hr.generateUUID(), this.name = "", this.type = "Geometry", this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
            []
        ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.verticesNeedUpdate = this.elementsNeedUpdate = !1
    }

    function lt(t, e, i) {
        if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.uuid = hr.generateUUID(), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = !0 === i, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function() {}, this.version = 0
    }

    function ut(t, e) {
        lt.call(this, new Int8Array(t), e)
    }

    function pt(t, e) {
        lt.call(this, new Uint8Array(t), e)
    }

    function dt(t, e) {
        lt.call(this, new Uint8ClampedArray(t), e)
    }

    function ft(t, e) {
        lt.call(this, new Int16Array(t), e)
    }

    function mt(t, e) {
        lt.call(this, new Uint16Array(t), e)
    }

    function gt(t, e) {
        lt.call(this, new Int32Array(t), e)
    }

    function vt(t, e) {
        lt.call(this, new Uint32Array(t), e)
    }

    function yt(t, e) {
        lt.call(this, new Float32Array(t), e)
    }

    function xt(t, e) {
        lt.call(this, new Float64Array(t), e)
    }

    function bt() {
        this.indices = [], this.vertices = [], this.normals = [], this.colors = [], this.uvs = [], this.uvs2 = [], this.groups = [], this.morphTargets = {}, this.skinWeights = [], this.skinIndices = [], this.boundingSphere = this.boundingBox = null, this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
    }

    function _t(t) {
        if (0 === t.length) return -1 / 0;
        for (var e = t[0], i = 1, n = t.length; i < n; ++i) t[i] > e && (e = t[i]);
        return e
    }

    function wt() {
        Object.defineProperty(this, "id", {
            value: Tr++
        }), this.uuid = hr.generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.drawRange = {
            start: 0,
            count: 1 / 0
        }
    }

    function Mt(t, e, i, n, r, a) {
        ht.call(this), this.type = "BoxGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        }, this.fromBufferGeometry(new Et(t, e, i, n, r, a)), this.mergeVertices()
    }

    function Et(t, e, i, n, r, a) {
        function o(t, e, i, n, r, a, o, m, g, v, y) {
            var x = a / g,
                b = o / v,
                _ = a / 2,
                w = o / 2,
                M = m / 2;
            o = g + 1;
            var E, T, S = v + 1,
                A = a = 0,
                R = new c;
            for (T = 0; T < S; T++) {
                var L = T * b - w;
                for (E = 0; E < o; E++) R[t] = (E * x - _) * n, R[e] = L * r, R[i] = M, l.push(R.x, R.y, R.z), R[t] = 0, R[e] = 0, R[i] = 0 < m ? 1 : -1, u.push(R.x, R.y, R.z), p.push(E / g), p.push(1 - T / v), a += 1
            }
            for (T = 0; T < v; T++)
                for (E = 0; E < g; E++) t = d + E + o * (T + 1), e = d + (E + 1) + o * (T + 1), i = d + (E + 1) + o * T, h.push(d + E + o * T, t, i), h.push(t, e, i), A += 6;
            s.addGroup(f, A, y), f += A, d += a
        }
        wt.call(this), this.type = "BoxBufferGeometry", this.parameters = {
            width: t,
            height: e,
            depth: i,
            widthSegments: n,
            heightSegments: r,
            depthSegments: a
        };
        var s = this;
        n = Math.floor(n) || 1, r = Math.floor(r) || 1;
        var h = [],
            l = [],
            u = [],
            p = [],
            d = 0,
            f = 0;
        o("z", "y", "x", -1, -1, i, e, t, a = Math.floor(a) || 1, r, 0), o("z", "y", "x", 1, -1, i, e, -t, a, r, 1), o("x", "z", "y", 1, 1, t, i, e, n, a, 2), o("x", "z", "y", 1, -1, t, i, -e, n, a, 3), o("x", "y", "z", 1, -1, t, e, i, n, r, 4), o("x", "y", "z", -1, -1, t, e, -i, n, r, 5), this.setIndex(h), this.addAttribute("position", new yt(l, 3)), this.addAttribute("normal", new yt(u, 3)), this.addAttribute("uv", new yt(p, 2))
    }

    function Tt(t, e, i, n) {
        ht.call(this), this.type = "PlaneGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        }, this.fromBufferGeometry(new St(t, e, i, n)), this.mergeVertices()
    }

    function St(t, e, i, n) {
        wt.call(this), this.type = "PlaneBufferGeometry", this.parameters = {
            width: t,
            height: e,
            widthSegments: i,
            heightSegments: n
        };
        var r = t / 2,
            a = e / 2,
            o = (i = Math.floor(i) || 1) + 1,
            s = (n = Math.floor(n) || 1) + 1,
            c = t / i,
            h = e / n,
            l = [],
            u = [],
            p = [],
            d = [];
        for (t = 0; t < s; t++) {
            var f = t * h - a;
            for (e = 0; e < o; e++) u.push(e * c - r, -f, 0), p.push(0, 0, 1), d.push(e / i), d.push(1 - t / n)
        }
        for (t = 0; t < n; t++)
            for (e = 0; e < i; e++) r = e + o * (t + 1), a = e + 1 + o * (t + 1), s = e + 1 + o * t, l.push(e + o * t, r, s), l.push(r, a, s);
        this.setIndex(l), this.addAttribute("position", new yt(u, 3)), this.addAttribute("normal", new yt(p, 3)), this.addAttribute("uv", new yt(d, 2))
    }

    function At(t) {
        X.call(this), this.type = "MeshBasicMaterial", this.color = new H(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.lights = this.morphTargets = this.skinning = !1, this.setValues(t)
    }

    function Rt(t, e) {
        this.origin = void 0 !== t ? t : new c, this.direction = void 0 !== e ? e : new c
    }

    function Lt(t, e) {
        this.start = void 0 !== t ? t : new c, this.end = void 0 !== e ? e : new c
    }

    function Pt(t, e, i) {
        this.a = void 0 !== t ? t : new c, this.b = void 0 !== e ? e : new c, this.c = void 0 !== i ? i : new c
    }

    function Ct(t, e) {
        rt.call(this), this.type = "Mesh", this.geometry = void 0 !== t ? t : new wt, this.material = void 0 !== e ? e : new At({
            color: 16777215 * Math.random()
        }), this.drawMode = 0, this.updateMorphTargets()
    }

    function It(t, e, i, n) {
        function r(t, i) {
            e.buffers.color.setClear(t.r, t.g, t.b, i, n)
        }
        var a, o, s, c = new H(0),
            h = 0;
        return {
            getClearColor: function() {
                return c
            },
            setClearColor: function(t, e) {
                c.set(t), r(c, h = void 0 !== e ? e : 1)
            },
            getClearAlpha: function() {
                return h
            },
            setClearAlpha: function(t) {
                r(c, h = t)
            },
            render: function(e, n, l, u) {
                null === (n = n.background) ? r(c, h) : n && n.isColor && (r(n, 1), u = !0), (t.autoClear || u) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil), n && n.isCubeTexture ? (void 0 === s && ((s = new Ct(new Et(1, 1, 1), new q({
                    uniforms: wr.cube.uniforms,
                    vertexShader: wr.cube.vertexShader,
                    fragmentShader: wr.cube.fragmentShader,
                    side: 1,
                    depthTest: !0,
                    depthWrite: !1,
                    polygonOffset: !0,
                    fog: !1
                }))).geometry.removeAttribute("normal"), s.geometry.removeAttribute("uv"), s.onBeforeRender = function(t, e, i) {
                    t = i.far, this.matrixWorld.makeScale(t, t, t), this.matrixWorld.copyPosition(i.matrixWorld), this.material.polygonOffsetUnits = 10 * t
                }, i.update(s.geometry)), s.material.uniforms.tCube.value = n, e.push(s, s.geometry, s.material, 0, null)) : n && n.isTexture && (void 0 === a && (a = new ot(-1, 1, 1, -1, 0, 1), o = new Ct(new St(2, 2), new At({
                    depthTest: !1,
                    depthWrite: !1,
                    fog: !1
                })), i.update(o.geometry)), o.material.map = n, t.renderBufferDirect(a, null, o.geometry, o.material, o, null))
            }
        }
    }

    function Ut(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.program && e.program && t.program !== e.program ? t.program.id - e.program.id : t.material.id !== e.material.id ? t.material.id - e.material.id : t.z !== e.z ? t.z - e.z : t.id - e.id
    }

    function Dt(t, e) {
        return t.renderOrder !== e.renderOrder ? t.renderOrder - e.renderOrder : t.z !== e.z ? e.z - t.z : t.id - e.id
    }

    function Nt() {
        var t = {};
        return {
            get: function(e, i) {
                return e = e.id + "," + i.id, void 0 === (i = t[e]) && (i = new function() {
                    var t = [],
                        e = 0,
                        i = [],
                        n = [];
                    return {
                        opaque: i,
                        transparent: n,
                        init: function() {
                            e = 0, i.length = 0, n.length = 0
                        },
                        push: function(r, a, o, s, c) {
                            var h = t[e];
                            void 0 === h ? (h = {
                                id: r.id,
                                object: r,
                                geometry: a,
                                material: o,
                                program: o.program,
                                renderOrder: r.renderOrder,
                                z: s,
                                group: c
                            }, t[e] = h) : (h.id = r.id, h.object = r, h.geometry = a, h.material = o, h.program = o.program, h.renderOrder = r.renderOrder, h.z = s, h.group = c), (!0 === o.transparent ? n : i).push(h), e++
                        },
                        sort: function() {
                            1 < i.length && i.sort(Ut), 1 < n.length && n.sort(Dt)
                        }
                    }
                }, t[e] = i), i
            },
            dispose: function() {
                t = {}
            }
        }
    }

    function Ot(t, e) {
        return Math.abs(e[1]) - Math.abs(t[1])
    }

    function Bt() {
        var t = new function() {
                var t = {};
                return {
                    get: function(e) {
                        if (void 0 !== t[e.id]) return t[e.id];
                        switch (e.type) {
                            case "DirectionalLight":
                                var n = {
                                    direction: new c,
                                    color: new H,
                                    shadow: !1,
                                    shadowBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new i
                                };
                                break;
                            case "SpotLight":
                                n = {
                                    position: new c,
                                    direction: new c,
                                    color: new H,
                                    distance: 0,
                                    coneCos: 0,
                                    penumbraCos: 0,
                                    decay: 0,
                                    shadow: !1,
                                    shadowBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new i
                                };
                                break;
                            case "PointLight":
                                n = {
                                    position: new c,
                                    color: new H,
                                    distance: 0,
                                    decay: 0,
                                    shadow: !1,
                                    shadowBias: 0,
                                    shadowRadius: 1,
                                    shadowMapSize: new i,
                                    shadowCameraNear: 1,
                                    shadowCameraFar: 1e3
                                };
                                break;
                            case "HemisphereLight":
                                n = {
                                    direction: new c,
                                    skyColor: new H,
                                    groundColor: new H
                                };
                                break;
                            case "RectAreaLight":
                                n = {
                                    color: new H,
                                    position: new c,
                                    halfWidth: new c,
                                    halfHeight: new c
                                }
                        }
                        return t[e.id] = n
                    }
                }
            },
            e = {
                hash: "",
                ambient: [0, 0, 0],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: []
            },
            n = new c,
            r = new h,
            a = new h;
        return {
            setup: function(i, o, s) {
                for (var c, h = 0, l = 0, u = 0, p = 0, d = 0, f = 0, m = 0, g = 0, v = s.matrixWorldInverse, y = 0, x = i.length; y < x; y++) {
                    var b = i[y];
                    c = b.color;
                    var _ = b.intensity,
                        w = b.distance,
                        M = b.shadow && b.shadow.map ? b.shadow.map.texture : null;
                    b.isAmbientLight ? (h += c.r * _, l += c.g * _, u += c.b * _) : b.isDirectionalLight ? ((s = t.get(b)).color.copy(b.color).multiplyScalar(b.intensity), s.direction.setFromMatrixPosition(b.matrixWorld), n.setFromMatrixPosition(b.target.matrixWorld), s.direction.sub(n), s.direction.transformDirection(v), (s.shadow = b.castShadow) && (c = b.shadow, s.shadowBias = c.bias, s.shadowRadius = c.radius, s.shadowMapSize = c.mapSize), e.directionalShadowMap[p] = M, e.directionalShadowMatrix[p] = b.shadow.matrix, e.directional[p] = s, p++) : b.isSpotLight ? ((s = t.get(b)).position.setFromMatrixPosition(b.matrixWorld), s.position.applyMatrix4(v), s.color.copy(c).multiplyScalar(_), s.distance = w, s.direction.setFromMatrixPosition(b.matrixWorld), n.setFromMatrixPosition(b.target.matrixWorld), s.direction.sub(n), s.direction.transformDirection(v), s.coneCos = Math.cos(b.angle), s.penumbraCos = Math.cos(b.angle * (1 - b.penumbra)), s.decay = 0 === b.distance ? 0 : b.decay, (s.shadow = b.castShadow) && (c = b.shadow, s.shadowBias = c.bias, s.shadowRadius = c.radius, s.shadowMapSize = c.mapSize), e.spotShadowMap[f] = M, e.spotShadowMatrix[f] = b.shadow.matrix, e.spot[f] = s, f++) : b.isRectAreaLight ? ((s = t.get(b)).color.copy(c).multiplyScalar(_ / (b.width * b.height)), s.position.setFromMatrixPosition(b.matrixWorld), s.position.applyMatrix4(v), a.identity(), r.copy(b.matrixWorld), r.premultiply(v), a.extractRotation(r), s.halfWidth.set(.5 * b.width, 0, 0), s.halfHeight.set(0, .5 * b.height, 0), s.halfWidth.applyMatrix4(a), s.halfHeight.applyMatrix4(a), e.rectArea[m] = s, m++) : b.isPointLight ? ((s = t.get(b)).position.setFromMatrixPosition(b.matrixWorld), s.position.applyMatrix4(v), s.color.copy(b.color).multiplyScalar(b.intensity), s.distance = b.distance, s.decay = 0 === b.distance ? 0 : b.decay, (s.shadow = b.castShadow) && (c = b.shadow, s.shadowBias = c.bias, s.shadowRadius = c.radius, s.shadowMapSize = c.mapSize, s.shadowCameraNear = c.camera.near, s.shadowCameraFar = c.camera.far), e.pointShadowMap[d] = M, e.pointShadowMatrix[d] = b.shadow.matrix, e.point[d] = s, d++) : b.isHemisphereLight && ((s = t.get(b)).direction.setFromMatrixPosition(b.matrixWorld), s.direction.transformDirection(v), s.direction.normalize(), s.skyColor.copy(b.color).multiplyScalar(_), s.groundColor.copy(b.groundColor).multiplyScalar(_), e.hemi[g] = s, g++)
                }
                e.ambient[0] = h, e.ambient[1] = l, e.ambient[2] = u, e.directional.length = p, e.spot.length = f, e.rectArea.length = m, e.point.length = d, e.hemi.length = g, e.hash = p + "," + d + "," + f + "," + m + "," + g + "," + o.length
            },
            state: e
        }
    }

    function Ft(t, e, i) {
        var n = t.createShader(e);
        return t.shaderSource(n, i), t.compileShader(n), !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."), "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", e === t.VERTEX_SHADER ? "vertex" : "fragment", t.getShaderInfoLog(n), function(t) {
            t = t.split("\n");
            for (var e = 0; e < t.length; e++) t[e] = e + 1 + ": " + t[e];
            return t.join("\n")
        }(i)), n
    }

    function zt(t) {
        switch (t) {
            case 3e3:
                return ["Linear", "( value )"];
            case 3001:
                return ["sRGB", "( value )"];
            case 3002:
                return ["RGBE", "( value )"];
            case 3004:
                return ["RGBM", "( value, 7.0 )"];
            case 3005:
                return ["RGBM", "( value, 16.0 )"];
            case 3006:
                return ["RGBD", "( value, 256.0 )"];
            case 3007:
                return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
            default:
                throw Error("unsupported encoding: " + t)
        }
    }

    function Gt(t, e) {
        return "vec4 " + t + "( vec4 value ) { return " + (e = zt(e))[0] + "ToLinear" + e[1] + "; }"
    }

    function Ht(t) {
        return "" !== t
    }

    function Vt(t, e) {
        return t.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    }

    function kt(t) {
        return t.replace(/^[ \t]*#include +<([\w\d.]+)>/gm, function(t, e) {
            if (void 0 === (t = _r[e])) throw Error("Can not resolve #include <" + e + ">");
            return kt(t)
        })
    }

    function jt(t) {
        return t.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function(t, e, i, n) {
            for (t = "", e = parseInt(e); e < parseInt(i); e++) t += n.replace(/\[ i \]/g, "[ " + e + " ]");
            return t
        })
    }

    function Wt(t, e, i, n, r, a) {
        var o = t.context,
            s = n.defines,
            c = r.vertexShader,
            h = r.fragmentShader,
            l = "SHADOWMAP_TYPE_BASIC";
        1 === a.shadowMapType ? l = "SHADOWMAP_TYPE_PCF" : 2 === a.shadowMapType && (l = "SHADOWMAP_TYPE_PCF_SOFT");
        var u = "ENVMAP_TYPE_CUBE",
            p = "ENVMAP_MODE_REFLECTION",
            d = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (n.envMap.mapping) {
                case 301:
                case 302:
                    u = "ENVMAP_TYPE_CUBE";
                    break;
                case 306:
                case 307:
                    u = "ENVMAP_TYPE_CUBE_UV";
                    break;
                case 303:
                case 304:
                    u = "ENVMAP_TYPE_EQUIREC";
                    break;
                case 305:
                    u = "ENVMAP_TYPE_SPHERE"
            }
            switch (n.envMap.mapping) {
                case 302:
                case 304:
                    p = "ENVMAP_MODE_REFRACTION"
            }
            switch (n.combine) {
                case 0:
                    d = "ENVMAP_BLENDING_MULTIPLY";
                    break;
                case 1:
                    d = "ENVMAP_BLENDING_MIX";
                    break;
                case 2:
                    d = "ENVMAP_BLENDING_ADD"
            }
        }
        var f, m, g = 0 < t.gammaFactor ? t.gammaFactor : 1,
            v = function(t, e, i) {
                return [(t = t || {}).derivatives || e.envMapCubeUV || e.bumpMap || e.normalMap || e.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (t.fragDepth || e.logarithmicDepthBuffer) && i.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", t.drawBuffers && i.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (t.shaderTextureLOD || e.envMap) && i.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ht).join("\n")
            }(n.extensions, a, e),
            y = function(t) {
                var e, i = [];
                for (e in t) {
                    var n = t[e];
                    !1 !== n && i.push("#define " + e + " " + n)
                }
                return i.join("\n")
            }(s),
            x = o.createProgram();
        return n.isRawShaderMaterial ? (s = [y, "\n"].filter(Ht).join("\n"), e = [v, y, "\n"].filter(Ht).join("\n")) : (s = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, y, a.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + g, "#define MAX_BONES " + a.maxBones, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + p : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.skinning ? "#define USE_SKINNING" : "", a.useVertexTexture ? "#define BONE_TEXTURE" : "", a.morphTargets ? "#define USE_MORPHTARGETS" : "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ht).join("\n"), e = [v, "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + r.name, y, a.alphaTest ? "#define ALPHATEST " + a.alphaTest : "", "#define GAMMA_FACTOR " + g, a.useFog && a.fog ? "#define USE_FOG" : "", a.useFog && a.fogExp ? "#define FOG_EXP2" : "", a.map ? "#define USE_MAP" : "", a.envMap ? "#define USE_ENVMAP" : "", a.envMap ? "#define " + u : "", a.envMap ? "#define " + p : "", a.envMap ? "#define " + d : "", a.lightMap ? "#define USE_LIGHTMAP" : "", a.aoMap ? "#define USE_AOMAP" : "", a.emissiveMap ? "#define USE_EMISSIVEMAP" : "", a.bumpMap ? "#define USE_BUMPMAP" : "", a.normalMap ? "#define USE_NORMALMAP" : "", a.specularMap ? "#define USE_SPECULARMAP" : "", a.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", a.metalnessMap ? "#define USE_METALNESSMAP" : "", a.alphaMap ? "#define USE_ALPHAMAP" : "", a.vertexColors ? "#define USE_COLOR" : "", a.gradientMap ? "#define USE_GRADIENTMAP" : "", a.flatShading ? "#define FLAT_SHADED" : "", a.doubleSided ? "#define DOUBLE_SIDED" : "", a.flipSided ? "#define FLIP_SIDED" : "", "#define NUM_CLIPPING_PLANES " + a.numClippingPlanes, "#define UNION_CLIPPING_PLANES " + (a.numClippingPlanes - a.numClipIntersection), a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", a.shadowMapEnabled ? "#define " + l : "", a.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", a.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", a.logarithmicDepthBuffer && e.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT" : "", a.envMap && e.get("EXT_shader_texture_lod") ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", 0 !== a.toneMapping ? "#define TONE_MAPPING" : "", 0 !== a.toneMapping ? _r.tonemapping_pars_fragment : "", 0 !== a.toneMapping ? function(t, e) {
            switch (e) {
                case 1:
                    e = "Linear";
                    break;
                case 2:
                    e = "Reinhard";
                    break;
                case 3:
                    e = "Uncharted2";
                    break;
                case 4:
                    e = "OptimizedCineon";
                    break;
                default:
                    throw Error("unsupported toneMapping: " + e)
            }
            return "vec3 " + t + "( vec3 color ) { return " + e + "ToneMapping( color ); }"
        }("toneMapping", a.toneMapping) : "", a.dithering ? "#define DITHERING" : "", a.outputEncoding || a.mapEncoding || a.envMapEncoding || a.emissiveMapEncoding ? _r.encodings_pars_fragment : "", a.mapEncoding ? Gt("mapTexelToLinear", a.mapEncoding) : "", a.envMapEncoding ? Gt("envMapTexelToLinear", a.envMapEncoding) : "", a.emissiveMapEncoding ? Gt("emissiveMapTexelToLinear", a.emissiveMapEncoding) : "", a.outputEncoding ? function(t, e) {
            return "vec4 " + t + "( vec4 value ) { return LinearTo" + (e = zt(e))[0] + e[1] + "; }"
        }("linearToOutputTexel", a.outputEncoding) : "", a.depthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(Ht).join("\n")), c = Vt(c = kt(c), a), h = Vt(h = kt(h), a), n.isShaderMaterial || (c = jt(c), h = jt(h)), h = e + h, c = Ft(o, o.VERTEX_SHADER, s + c), h = Ft(o, o.FRAGMENT_SHADER, h), o.attachShader(x, c), o.attachShader(x, h), void 0 !== n.index0AttributeName ? o.bindAttribLocation(x, 0, n.index0AttributeName) : !0 === a.morphTargets && o.bindAttribLocation(x, 0, "position"), o.linkProgram(x), a = o.getProgramInfoLog(x), r = o.getShaderInfoLog(c), l = o.getShaderInfoLog(h), p = u = !0, !1 === o.getProgramParameter(x, o.LINK_STATUS) ? (u = !1, console.error("THREE.WebGLProgram: shader error: ", o.getError(), "gl.VALIDATE_STATUS", o.getProgramParameter(x, o.VALIDATE_STATUS), "gl.getProgramInfoLog", a, r, l)) : "" !== a ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a) : "" !== r && "" !== l || (p = !1), p && (this.diagnostics = {
            runnable: u,
            material: n,
            programLog: a,
            vertexShader: {
                log: r,
                prefix: s
            },
            fragmentShader: {
                log: l,
                prefix: e
            }
        }), o.deleteShader(c), o.deleteShader(h), this.getUniforms = function() {
            return void 0 === f && (f = new G(o, x, t)), f
        }, this.getAttributes = function() {
            if (void 0 === m) {
                for (var t = {}, e = o.getProgramParameter(x, o.ACTIVE_ATTRIBUTES), i = 0; i < e; i++) {
                    var n = o.getActiveAttrib(x, i).name;
                    t[n] = o.getAttribLocation(x, n)
                }
                m = t
            }
            return m
        }, this.destroy = function() {
            o.deleteProgram(x), this.program = void 0
        }, Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."), this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."), this.getAttributes()
                }
            }
        }), this.id = Sr++, this.code = i, this.usedTimes = 1, this.program = x, this.vertexShader = c, this.fragmentShader = h, this
    }

    function Xt(t) {
        st.call(this), this.cameras = t || []
    }

    function qt(t) {
        function e() {
            if (null !== n && n.isPresenting) {
                var e = (r = n.getEyeParameters("left")).renderWidth,
                    r = r.renderHeight;
                d = t.getPixelRatio(), p = t.getSize(), t.setDrawingBufferSize(2 * e, r, 1)
            } else i.enabled && t.setDrawingBufferSize(p.width, p.height, d)
        }
        var i = this,
            n = null,
            a = null;
        "VRFrameData" in window && (a = new window.VRFrameData);
        var o = new h,
            s = new h,
            c = new h,
            l = new st;
        l.bounds = new r(0, 0, .5, 1), l.layers.enable(1);
        var u = new st;
        u.bounds = new r(.5, 0, .5, 1), u.layers.enable(2);
        var p, d, f = new Xt([l, u]);
        f.layers.enable(1), f.layers.enable(2), window.addEventListener("vrdisplaypresentchange", e, !1), this.standing = this.enabled = !1, this.getDevice = function() {
            return n
        }, this.setDevice = function(t) {
            void 0 !== t && (n = t)
        }, this.getCamera = function(t) {
            if (null === n) return t;
            n.depthNear = t.near, n.depthFar = t.far, n.getFrameData(a);
            var e = a.pose;
            return null !== e.position ? t.position.fromArray(e.position) : t.position.set(0, 0, 0), null !== e.orientation && t.quaternion.fromArray(e.orientation), t.updateMatrixWorld(), e = n.stageParameters, this.standing && e && (s.fromArray(e.sittingToStandingTransform), c.getInverse(s), t.matrixWorld.multiply(s), t.matrixWorldInverse.multiply(c)), !1 === n.isPresenting ? t : (l.near = t.near, u.near = t.near, l.far = t.far, u.far = t.far, f.matrixWorld.copy(t.matrixWorld), f.matrixWorldInverse.copy(t.matrixWorldInverse), l.matrixWorldInverse.fromArray(a.leftViewMatrix), u.matrixWorldInverse.fromArray(a.rightViewMatrix), this.standing && e && (l.matrixWorldInverse.multiply(c), u.matrixWorldInverse.multiply(c)), null !== (t = t.parent) && (o.getInverse(t.matrixWorld), l.matrixWorldInverse.multiply(o), u.matrixWorldInverse.multiply(o)), l.matrixWorld.getInverse(l.matrixWorldInverse), u.matrixWorld.getInverse(u.matrixWorldInverse), l.projectionMatrix.fromArray(a.leftProjectionMatrix), u.projectionMatrix.fromArray(a.rightProjectionMatrix), f.projectionMatrix.copy(l.projectionMatrix), (t = n.getLayers()).length && (null !== (t = t[0]).leftBounds && 4 === t.leftBounds.length && l.bounds.fromArray(t.leftBounds), null !== t.rightBounds && 4 === t.rightBounds.length && u.bounds.fromArray(t.rightBounds)), f)
        }, this.getStandingMatrix = function() {
            return s
        }, this.submitFrame = function() {
            n && n.isPresenting && n.submitFrame()
        }, this.dispose = function() {
            window.removeEventListener("vrdisplaypresentchange", e)
        }
    }

    function Yt() {
        function t() {
            h.value !== n && (h.value = n, h.needsUpdate = 0 < r), i.numPlanes = r, i.numIntersection = 0
        }

        function e(t, e, n, r) {
            var a = null !== t ? t.length : 0,
                o = null;
            if (0 !== a) {
                if (o = h.value, !0 !== r || null === o)
                    for (r = n + 4 * a, e = e.matrixWorldInverse, c.getNormalMatrix(e), (null === o || o.length < r) && (o = new Float32Array(r)), r = 0; r !== a; ++r, n += 4) s.copy(t[r]).applyMatrix4(e, c), s.normal.toArray(o, n), o[n + 3] = s.constant;
                h.value = o, h.needsUpdate = !0
            }
            return i.numPlanes = a, o
        }
        var i = this,
            n = null,
            r = 0,
            a = !1,
            o = !1,
            s = new $,
            c = new K,
            h = {
                value: null,
                needsUpdate: !1
            };
        this.uniform = h, this.numIntersection = this.numPlanes = 0, this.init = function(t, i, o) {
            var s = 0 !== t.length || i || 0 !== r || a;
            return a = i, n = e(t, o, 0), r = t.length, s
        }, this.beginShadows = function() {
            o = !0, e(null)
        }, this.endShadows = function() {
            o = !1, t()
        }, this.setState = function(i, s, c, l, u, p) {
            if (!a || null === i || 0 === i.length || o && !c) o ? e(null) : t();
            else {
                var d = 4 * (c = o ? 0 : r),
                    f = u.clippingState || null;
                for (h.value = f, f = e(i, l, d, p), i = 0; i !== d; ++i) f[i] = n[i];
                u.clippingState = f, this.numIntersection = s ? this.numPlanes : 0, this.numPlanes += c
            }
        }
    }

    function Zt(t, e) {
        return {
            convert: function(i) {
                if (1e3 === i) return t.REPEAT;
                if (1001 === i) return t.CLAMP_TO_EDGE;
                if (1002 === i) return t.MIRRORED_REPEAT;
                if (1003 === i) return t.NEAREST;
                if (1004 === i) return t.NEAREST_MIPMAP_NEAREST;
                if (1005 === i) return t.NEAREST_MIPMAP_LINEAR;
                if (1006 === i) return t.LINEAR;
                if (1007 === i) return t.LINEAR_MIPMAP_NEAREST;
                if (1008 === i) return t.LINEAR_MIPMAP_LINEAR;
                if (1009 === i) return t.UNSIGNED_BYTE;
                if (1017 === i) return t.UNSIGNED_SHORT_4_4_4_4;
                if (1018 === i) return t.UNSIGNED_SHORT_5_5_5_1;
                if (1019 === i) return t.UNSIGNED_SHORT_5_6_5;
                if (1010 === i) return t.BYTE;
                if (1011 === i) return t.SHORT;
                if (1012 === i) return t.UNSIGNED_SHORT;
                if (1013 === i) return t.INT;
                if (1014 === i) return t.UNSIGNED_INT;
                if (1015 === i) return t.FLOAT;
                if (1016 === i) {
                    var n = e.get("OES_texture_half_float");
                    if (null !== n) return n.HALF_FLOAT_OES
                }
                if (1021 === i) return t.ALPHA;
                if (1022 === i) return t.RGB;
                if (1023 === i) return t.RGBA;
                if (1024 === i) return t.LUMINANCE;
                if (1025 === i) return t.LUMINANCE_ALPHA;
                if (1026 === i) return t.DEPTH_COMPONENT;
                if (1027 === i) return t.DEPTH_STENCIL;
                if (100 === i) return t.FUNC_ADD;
                if (101 === i) return t.FUNC_SUBTRACT;
                if (102 === i) return t.FUNC_REVERSE_SUBTRACT;
                if (200 === i) return t.ZERO;
                if (201 === i) return t.ONE;
                if (202 === i) return t.SRC_COLOR;
                if (203 === i) return t.ONE_MINUS_SRC_COLOR;
                if (204 === i) return t.SRC_ALPHA;
                if (205 === i) return t.ONE_MINUS_SRC_ALPHA;
                if (206 === i) return t.DST_ALPHA;
                if (207 === i) return t.ONE_MINUS_DST_ALPHA;
                if (208 === i) return t.DST_COLOR;
                if (209 === i) return t.ONE_MINUS_DST_COLOR;
                if (210 === i) return t.SRC_ALPHA_SATURATE;
                if ((2001 === i || 2002 === i || 2003 === i || 2004 === i) && null !== (n = e.get("WEBGL_compressed_texture_s3tc"))) {
                    if (2001 === i) return n.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if (2002 === i) return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if (2003 === i) return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if (2004 === i) return n.COMPRESSED_RGBA_S3TC_DXT5_EXT
                }
                if ((2100 === i || 2101 === i || 2102 === i || 2103 === i) && null !== (n = e.get("WEBGL_compressed_texture_pvrtc"))) {
                    if (2100 === i) return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if (2101 === i) return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if (2102 === i) return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if (2103 === i) return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
                }
                if (2151 === i && null !== (n = e.get("WEBGL_compressed_texture_etc1"))) return n.COMPRESSED_RGB_ETC1_WEBGL;
                if ((103 === i || 104 === i) && null !== (n = e.get("EXT_blend_minmax"))) {
                    if (103 === i) return n.MIN_EXT;
                    if (104 === i) return n.MAX_EXT
                }
                return 1020 === i && null !== (n = e.get("WEBGL_depth_texture")) ? n.UNSIGNED_INT_24_8_WEBGL : 0
            }
        }
    }

    function Jt(t) {
        function e() {
            (P = new function(t) {
                var e = {};
                return {
                    get: function(i) {
                        if (void 0 !== e[i]) return e[i];
                        switch (i) {
                            case "WEBGL_depth_texture":
                                var n = t.getExtension("WEBGL_depth_texture") || t.getExtension("MOZ_WEBGL_depth_texture") || t.getExtension("WEBKIT_WEBGL_depth_texture");
                                break;
                            case "EXT_texture_filter_anisotropic":
                                n = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
                                break;
                            case "WEBGL_compressed_texture_s3tc":
                                n = t.getExtension("WEBGL_compressed_texture_s3tc") || t.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
                                break;
                            case "WEBGL_compressed_texture_pvrtc":
                                n = t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
                                break;
                            case "WEBGL_compressed_texture_etc1":
                                n = t.getExtension("WEBGL_compressed_texture_etc1");
                                break;
                            default:
                                n = t.getExtension(i)
                        }
                        return null === n && console.warn("THREE.WebGLRenderer: " + i + " extension not supported."), e[i] = n
                    }
                }
            }(Lt)).get("WEBGL_depth_texture"), P.get("OES_texture_float"), P.get("OES_texture_float_linear"), P.get("OES_texture_half_float"), P.get("OES_texture_half_float_linear"), P.get("OES_standard_derivatives"), P.get("ANGLE_instanced_arrays"), P.get("OES_element_index_uint") && (wt.MaxIndex = 4294967296), J = new Zt(Lt, P), C = new function(t, e, i) {
                function n(e) {
                    if ("highp" === e) {
                        if (0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision) return "highp";
                        e = "mediump"
                    }
                    return "mediump" === e && 0 < t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision && 0 < t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision ? "mediump" : "lowp"
                }
                var r, a = void 0 !== i.precision ? i.precision : "highp";
                (o = n(a)) !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o), i = !0 === i.logarithmicDepthBuffer && !!e.get("EXT_frag_depth");
                var o = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
                    s = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    c = t.getParameter(t.MAX_TEXTURE_SIZE),
                    h = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
                    l = t.getParameter(t.MAX_VERTEX_ATTRIBS),
                    u = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
                    p = t.getParameter(t.MAX_VARYING_VECTORS),
                    d = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
                    f = 0 < s,
                    m = !!e.get("OES_texture_float");
                return {
                    getMaxAnisotropy: function() {
                        if (void 0 !== r) return r;
                        var i = e.get("EXT_texture_filter_anisotropic");
                        return r = null !== i ? t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0
                    },
                    getMaxPrecision: n,
                    precision: a,
                    logarithmicDepthBuffer: i,
                    maxTextures: o,
                    maxVertexTextures: s,
                    maxTextureSize: c,
                    maxCubemapSize: h,
                    maxAttributes: l,
                    maxVertexUniforms: u,
                    maxVaryings: p,
                    maxFragmentUniforms: d,
                    vertexTextures: f,
                    floatFragmentTextures: m,
                    floatVertexTextures: f && m
                }
            }(Lt, P, t), (I = new function(t, e, i) {
                function n(e, i, n) {
                    var r = new Uint8Array(4),
                        a = t.createTexture();
                    for (t.bindTexture(e, a), t.texParameteri(e, t.TEXTURE_MIN_FILTER, t.NEAREST), t.texParameteri(e, t.TEXTURE_MAG_FILTER, t.NEAREST), e = 0; e < n; e++) t.texImage2D(i + e, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, r);
                    return a
                }

                function a(e) {
                    !0 !== x[e] && (t.enable(e), x[e] = !0)
                }

                function o(e) {
                    !1 !== x[e] && (t.disable(e), x[e] = !1)
                }

                function s(e, n, r, s, c, h, l, u) {
                    if (0 !== e ? a(t.BLEND) : o(t.BLEND), 5 !== e) {
                        if (e !== w || u !== L) switch (e) {
                            case 2:
                                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE, t.ONE, t.ONE)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.SRC_ALPHA, t.ONE));
                                break;
                            case 3:
                                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.ONE_MINUS_SRC_COLOR));
                                break;
                            case 4:
                                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA)) : (t.blendEquation(t.FUNC_ADD), t.blendFunc(t.ZERO, t.SRC_COLOR));
                                break;
                            default:
                                u ? (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA)) : (t.blendEquationSeparate(t.FUNC_ADD, t.FUNC_ADD), t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA))
                        }
                        R = A = S = T = E = M = null
                    } else c = c || n, h = h || r, l = l || s, n === M && c === S || (t.blendEquationSeparate(i.convert(n), i.convert(c)), M = n, S = c), r === E && s === T && h === A && l === R || (t.blendFuncSeparate(i.convert(r), i.convert(s), i.convert(h), i.convert(l)), E = r, T = s, A = h, R = l);
                    w = e, L = u
                }

                function c(e) {
                    P !== e && (e ? t.frontFace(t.CW) : t.frontFace(t.CCW), P = e)
                }

                function h(e) {
                    0 !== e ? (a(t.CULL_FACE), e !== C && (1 === e ? t.cullFace(t.BACK) : 2 === e ? t.cullFace(t.FRONT) : t.cullFace(t.FRONT_AND_BACK))) : o(t.CULL_FACE), C = e
                }

                function l(e, i, n) {
                    e ? (a(t.POLYGON_OFFSET_FILL), (U !== i || D !== n) && (t.polygonOffset(i, n), U = i, D = n)) : o(t.POLYGON_OFFSET_FILL)
                }

                function u(e) {
                    void 0 === e && (e = t.TEXTURE0 + N - 1), B !== e && (t.activeTexture(e), B = e)
                }
                var p = new function() {
                        var e = !1,
                            i = new r,
                            n = null,
                            a = new r(0, 0, 0, 0);
                        return {
                            setMask: function(i) {
                                n === i || e || (t.colorMask(i, i, i, i), n = i)
                            },
                            setLocked: function(t) {
                                e = t
                            },
                            setClear: function(e, n, r, o, s) {
                                !0 === s && (e *= o, n *= o, r *= o), i.set(e, n, r, o), !1 === a.equals(i) && (t.clearColor(e, n, r, o), a.copy(i))
                            },
                            reset: function() {
                                e = !1, n = null, a.set(-1, 0, 0, 0)
                            }
                        }
                    },
                    d = new function() {
                        var e = !1,
                            i = null,
                            n = null,
                            r = null;
                        return {
                            setTest: function(e) {
                                e ? a(t.DEPTH_TEST) : o(t.DEPTH_TEST)
                            },
                            setMask: function(n) {
                                i === n || e || (t.depthMask(n), i = n)
                            },
                            setFunc: function(e) {
                                if (n !== e) {
                                    if (e) switch (e) {
                                        case 0:
                                            t.depthFunc(t.NEVER);
                                            break;
                                        case 1:
                                            t.depthFunc(t.ALWAYS);
                                            break;
                                        case 2:
                                            t.depthFunc(t.LESS);
                                            break;
                                        case 3:
                                            t.depthFunc(t.LEQUAL);
                                            break;
                                        case 4:
                                            t.depthFunc(t.EQUAL);
                                            break;
                                        case 5:
                                            t.depthFunc(t.GEQUAL);
                                            break;
                                        case 6:
                                            t.depthFunc(t.GREATER);
                                            break;
                                        case 7:
                                            t.depthFunc(t.NOTEQUAL);
                                            break;
                                        default:
                                            t.depthFunc(t.LEQUAL)
                                    } else t.depthFunc(t.LEQUAL);
                                    n = e
                                }
                            },
                            setLocked: function(t) {
                                e = t
                            },
                            setClear: function(e) {
                                r !== e && (t.clearDepth(e), r = e)
                            },
                            reset: function() {
                                e = !1, r = n = i = null
                            }
                        }
                    },
                    f = new function() {
                        var e = !1,
                            i = null,
                            n = null,
                            r = null,
                            s = null,
                            c = null,
                            h = null,
                            l = null,
                            u = null;
                        return {
                            setTest: function(e) {
                                e ? a(t.STENCIL_TEST) : o(t.STENCIL_TEST)
                            },
                            setMask: function(n) {
                                i === n || e || (t.stencilMask(n), i = n)
                            },
                            setFunc: function(e, i, a) {
                                n === e && r === i && s === a || (t.stencilFunc(e, i, a), n = e, r = i, s = a)
                            },
                            setOp: function(e, i, n) {
                                c === e && h === i && l === n || (t.stencilOp(e, i, n), c = e, h = i, l = n)
                            },
                            setLocked: function(t) {
                                e = t
                            },
                            setClear: function(e) {
                                u !== e && (t.clearStencil(e), u = e)
                            },
                            reset: function() {
                                e = !1, u = l = h = c = s = r = n = i = null
                            }
                        }
                    },
                    m = t.getParameter(t.MAX_VERTEX_ATTRIBS),
                    g = new Uint8Array(m),
                    v = new Uint8Array(m),
                    y = new Uint8Array(m),
                    x = {},
                    b = null,
                    _ = null,
                    w = null,
                    M = null,
                    E = null,
                    T = null,
                    S = null,
                    A = null,
                    R = null,
                    L = !1,
                    P = null,
                    C = null,
                    I = null,
                    U = null,
                    D = null,
                    N = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    O = (m = parseFloat(/^WebGL\ ([0-9])/.exec(t.getParameter(t.VERSION))[1]), 1 <= parseFloat(m)),
                    B = null,
                    F = {},
                    z = new r,
                    G = new r,
                    H = {};
                return H[t.TEXTURE_2D] = n(t.TEXTURE_2D, t.TEXTURE_2D, 1), H[t.TEXTURE_CUBE_MAP] = n(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6), p.setClear(0, 0, 0, 1), d.setClear(1), f.setClear(0), a(t.DEPTH_TEST), d.setFunc(3), c(!1), h(1), a(t.CULL_FACE), a(t.BLEND), s(1), {
                    buffers: {
                        color: p,
                        depth: d,
                        stencil: f
                    },
                    initAttributes: function() {
                        for (var t = 0, e = g.length; t < e; t++) g[t] = 0
                    },
                    enableAttribute: function(i) {
                        g[i] = 1, 0 === v[i] && (t.enableVertexAttribArray(i), v[i] = 1), 0 !== y[i] && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, 0), y[i] = 0)
                    },
                    enableAttributeAndDivisor: function(i, n) {
                        g[i] = 1, 0 === v[i] && (t.enableVertexAttribArray(i), v[i] = 1), y[i] !== n && (e.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(i, n), y[i] = n)
                    },
                    disableUnusedAttributes: function() {
                        for (var e = 0, i = v.length; e !== i; ++e) v[e] !== g[e] && (t.disableVertexAttribArray(e), v[e] = 0)
                    },
                    enable: a,
                    disable: o,
                    getCompressedTextureFormats: function() {
                        if (null === b && (b = [], e.get("WEBGL_compressed_texture_pvrtc") || e.get("WEBGL_compressed_texture_s3tc") || e.get("WEBGL_compressed_texture_etc1")))
                            for (var i = t.getParameter(t.COMPRESSED_TEXTURE_FORMATS), n = 0; n < i.length; n++) b.push(i[n]);
                        return b
                    },
                    useProgram: function(e) {
                        return _ !== e && (t.useProgram(e), _ = e, !0)
                    },
                    setBlending: s,
                    setMaterial: function(e) {
                        2 === e.side ? o(t.CULL_FACE) : a(t.CULL_FACE), c(1 === e.side), !0 === e.transparent ? s(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha, e.premultipliedAlpha) : s(0), d.setFunc(e.depthFunc), d.setTest(e.depthTest), d.setMask(e.depthWrite), p.setMask(e.colorWrite), l(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
                    },
                    setFlipSided: c,
                    setCullFace: h,
                    setLineWidth: function(e) {
                        e !== I && (O && t.lineWidth(e), I = e)
                    },
                    setPolygonOffset: l,
                    setScissorTest: function(e) {
                        e ? a(t.SCISSOR_TEST) : o(t.SCISSOR_TEST)
                    },
                    activeTexture: u,
                    bindTexture: function(e, i) {
                        null === B && u();
                        var n = F[B];
                        void 0 === n && (n = {
                            type: void 0,
                            texture: void 0
                        }, F[B] = n), n.type === e && n.texture === i || (t.bindTexture(e, i || H[e]), n.type = e, n.texture = i)
                    },
                    compressedTexImage2D: function() {
                        try {
                            t.compressedTexImage2D.apply(t, arguments)
                        } catch (t) {
                            console.error("THREE.WebGLState:", t)
                        }
                    },
                    texImage2D: function() {
                        try {
                            t.texImage2D.apply(t, arguments)
                        } catch (t) {
                            console.error("THREE.WebGLState:", t)
                        }
                    },
                    scissor: function(e) {
                        !1 === z.equals(e) && (t.scissor(e.x, e.y, e.z, e.w), z.copy(e))
                    },
                    viewport: function(e) {
                        !1 === G.equals(e) && (t.viewport(e.x, e.y, e.z, e.w), G.copy(e))
                    },
                    reset: function() {
                        for (var e = 0; e < v.length; e++) 1 === v[e] && (t.disableVertexAttribArray(e), v[e] = 0);
                        x = {}, B = b = null, F = {}, C = P = w = _ = null, p.reset(), d.reset(), f.reset()
                    }
                }
            }(Lt, P, J)).scissor(ct.copy(gt).multiplyScalar(dt)), I.viewport(st.copy(ft).multiplyScalar(dt)), U = new function() {
                var t = {};
                return {
                    get: function(e) {
                        e = e.uuid;
                        var i = t[e];
                        return void 0 === i && (i = {}, t[e] = i), i
                    },
                    remove: function(e) {
                        delete t[e.uuid]
                    },
                    clear: function() {
                        t = {}
                    }
                }
            }, D = new function(t, e, i, n, r, a, o) {
                function s(t, e) {
                    if (t.width > e || t.height > e) {
                        e /= Math.max(t.width, t.height);
                        var i = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
                        return i.width = Math.floor(t.width * e), i.height = Math.floor(t.height * e), i.getContext("2d").drawImage(t, 0, 0, t.width, t.height, 0, 0, i.width, i.height), console.warn("THREE.WebGLRenderer: image is too big (" + t.width + "x" + t.height + "). Resized to " + i.width + "x" + i.height, t), i
                    }
                    return t
                }

                function c(t) {
                    return hr.isPowerOfTwo(t.width) && hr.isPowerOfTwo(t.height)
                }

                function h(t, e) {
                    return t.generateMipmaps && e && 1003 !== t.minFilter && 1006 !== t.minFilter
                }

                function l(e) {
                    return 1003 === e || 1004 === e || 1005 === e ? t.NEAREST : t.LINEAR
                }

                function u(e) {
                    (e = e.target).removeEventListener("dispose", u);
                    t: {
                        var i = n.get(e);
                        if (e.image && i.__image__webglTextureCube) t.deleteTexture(i.__image__webglTextureCube);
                        else {
                            if (void 0 === i.__webglInit) break t;
                            t.deleteTexture(i.__webglTexture)
                        }
                        n.remove(e)
                    }
                    o.textures--
                }

                function p(e) {
                    (e = e.target).removeEventListener("dispose", p);
                    var i = n.get(e),
                        r = n.get(e.texture);
                    if (e) {
                        if (void 0 !== r.__webglTexture && t.deleteTexture(r.__webglTexture), e.depthTexture && e.depthTexture.dispose(), e.isWebGLRenderTargetCube)
                            for (r = 0; 6 > r; r++) t.deleteFramebuffer(i.__webglFramebuffer[r]), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer[r]);
                        else t.deleteFramebuffer(i.__webglFramebuffer), i.__webglDepthbuffer && t.deleteRenderbuffer(i.__webglDepthbuffer);
                        n.remove(e.texture), n.remove(e)
                    }
                    o.textures--
                }

                function d(e, l) {
                    var p = n.get(e);
                    if (0 < e.version && p.__version !== e.version)
                        if (void 0 === (m = e.image)) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
                        else {
                            if (!1 !== m.complete) {
                                void 0 === p.__webglInit && (p.__webglInit = !0, e.addEventListener("dispose", u), p.__webglTexture = t.createTexture(), o.textures++), i.activeTexture(t.TEXTURE0 + l), i.bindTexture(t.TEXTURE_2D, p.__webglTexture), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), t.pixelStorei(t.UNPACK_ALIGNMENT, e.unpackAlignment);
                                var d = s(e.image, r.maxTextureSize);
                                (1001 !== e.wrapS || 1001 !== e.wrapT || 1003 !== e.minFilter && 1006 !== e.minFilter) && !1 === c(d) && ((l = d) instanceof HTMLImageElement || l instanceof HTMLCanvasElement ? ((m = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = hr.nearestPowerOfTwo(l.width), m.height = hr.nearestPowerOfTwo(l.height), m.getContext("2d").drawImage(l, 0, 0, m.width, m.height), console.warn("THREE.WebGLRenderer: image is not power of two (" + l.width + "x" + l.height + "). Resized to " + m.width + "x" + m.height, l), d = m) : d = l), l = c(d);
                                var m = a.convert(e.format),
                                    g = a.convert(e.type);
                                f(t.TEXTURE_2D, e, l);
                                var y = e.mipmaps;
                                if (e.isDepthTexture) {
                                    if (y = t.DEPTH_COMPONENT, 1015 === e.type) {
                                        if (!v) throw Error("Float Depth Texture only supported in WebGL2.0");
                                        y = t.DEPTH_COMPONENT32F
                                    } else v && (y = t.DEPTH_COMPONENT16);
                                    1026 === e.format && y === t.DEPTH_COMPONENT && 1012 !== e.type && 1014 !== e.type && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), e.type = 1012, g = a.convert(e.type)), 1027 === e.format && (y = t.DEPTH_STENCIL, 1020 !== e.type && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), e.type = 1020, g = a.convert(e.type))), i.texImage2D(t.TEXTURE_2D, 0, y, d.width, d.height, 0, m, g, null)
                                } else if (e.isDataTexture)
                                    if (0 < y.length && l) {
                                        for (var x = 0, b = y.length; x < b; x++) d = y[x], i.texImage2D(t.TEXTURE_2D, x, m, d.width, d.height, 0, m, g, d.data);
                                        e.generateMipmaps = !1
                                    } else i.texImage2D(t.TEXTURE_2D, 0, m, d.width, d.height, 0, m, g, d.data);
                                else if (e.isCompressedTexture)
                                    for (x = 0, b = y.length; x < b; x++) d = y[x], 1023 !== e.format && 1022 !== e.format ? -1 < i.getCompressedTextureFormats().indexOf(m) ? i.compressedTexImage2D(t.TEXTURE_2D, x, m, d.width, d.height, 0, d.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : i.texImage2D(t.TEXTURE_2D, x, m, d.width, d.height, 0, m, g, d.data);
                                else if (0 < y.length && l) {
                                    for (x = 0, b = y.length; x < b; x++) d = y[x], i.texImage2D(t.TEXTURE_2D, x, m, m, g, d);
                                    e.generateMipmaps = !1
                                } else i.texImage2D(t.TEXTURE_2D, 0, m, m, g, d);
                                return h(e, l) && t.generateMipmap(t.TEXTURE_2D), p.__version = e.version, void(e.onUpdate && e.onUpdate(e))
                            }
                            console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e)
                        } i.activeTexture(t.TEXTURE0 + l), i.bindTexture(t.TEXTURE_2D, p.__webglTexture)
                }

                function f(i, o, s) {
                    s ? (t.texParameteri(i, t.TEXTURE_WRAP_S, a.convert(o.wrapS)), t.texParameteri(i, t.TEXTURE_WRAP_T, a.convert(o.wrapT)), t.texParameteri(i, t.TEXTURE_MAG_FILTER, a.convert(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, a.convert(o.minFilter))) : (t.texParameteri(i, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(i, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), 1001 === o.wrapS && 1001 === o.wrapT || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", o), t.texParameteri(i, t.TEXTURE_MAG_FILTER, l(o.magFilter)), t.texParameteri(i, t.TEXTURE_MIN_FILTER, l(o.minFilter)), 1003 !== o.minFilter && 1006 !== o.minFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", o)), !(s = e.get("EXT_texture_filter_anisotropic")) || 1015 === o.type && null === e.get("OES_texture_float_linear") || 1016 === o.type && null === e.get("OES_texture_half_float_linear") || !(1 < o.anisotropy || n.get(o).__currentAnisotropy) || (t.texParameterf(i, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(o.anisotropy, r.getMaxAnisotropy())), n.get(o).__currentAnisotropy = o.anisotropy)
                }

                function m(e, r, o, s) {
                    var c = a.convert(r.texture.format),
                        h = a.convert(r.texture.type);
                    i.texImage2D(s, 0, c, r.width, r.height, 0, c, h, null), t.bindFramebuffer(t.FRAMEBUFFER, e), t.framebufferTexture2D(t.FRAMEBUFFER, o, s, n.get(r.texture).__webglTexture, 0), t.bindFramebuffer(t.FRAMEBUFFER, null)
                }

                function g(e, i) {
                    t.bindRenderbuffer(t.RENDERBUFFER, e), i.depthBuffer && !i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_COMPONENT16, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, e)) : i.depthBuffer && i.stencilBuffer ? (t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, i.width, i.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, e)) : t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i.width, i.height), t.bindRenderbuffer(t.RENDERBUFFER, null)
                }
                var v = "undefined" != typeof WebGL2RenderingContext && t instanceof WebGL2RenderingContext;
                this.setTexture2D = d, this.setTextureCube = function(e, l) {
                    var p = n.get(e);
                    if (6 === e.image.length)
                        if (0 < e.version && p.__version !== e.version) {
                            p.__image__webglTextureCube || (e.addEventListener("dispose", u), p.__image__webglTextureCube = t.createTexture(), o.textures++), i.activeTexture(t.TEXTURE0 + l), i.bindTexture(t.TEXTURE_CUBE_MAP, p.__image__webglTextureCube), t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, e.flipY), l = e && e.isCompressedTexture;
                            for (var d = e.image[0] && e.image[0].isDataTexture, m = [], g = 0; 6 > g; g++) m[g] = l || d ? d ? e.image[g].image : e.image[g] : s(e.image[g], r.maxCubemapSize);
                            var v = c(m[0]),
                                y = a.convert(e.format),
                                x = a.convert(e.type);
                            for (f(t.TEXTURE_CUBE_MAP, e, v), g = 0; 6 > g; g++)
                                if (l)
                                    for (var b, _ = m[g].mipmaps, w = 0, M = _.length; w < M; w++) b = _[w], 1023 !== e.format && 1022 !== e.format ? -1 < i.getCompressedTextureFormats().indexOf(y) ? i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, w, y, b.width, b.height, 0, b.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, w, y, b.width, b.height, 0, y, x, b.data);
                                else d ? i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, y, m[g].width, m[g].height, 0, y, x, m[g].data) : i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + g, 0, y, y, x, m[g]);
                            h(e, v) && t.generateMipmap(t.TEXTURE_CUBE_MAP), p.__version = e.version, e.onUpdate && e.onUpdate(e)
                        } else i.activeTexture(t.TEXTURE0 + l), i.bindTexture(t.TEXTURE_CUBE_MAP, p.__image__webglTextureCube)
                }, this.setTextureCubeDynamic = function(e, r) {
                    i.activeTexture(t.TEXTURE0 + r), i.bindTexture(t.TEXTURE_CUBE_MAP, n.get(e).__webglTexture)
                }, this.setupRenderTarget = function(e) {
                    var r = n.get(e),
                        a = n.get(e.texture);
                    e.addEventListener("dispose", p), a.__webglTexture = t.createTexture(), o.textures++;
                    var s = !0 === e.isWebGLRenderTargetCube,
                        l = c(e);
                    if (s) {
                        r.__webglFramebuffer = [];
                        for (var u = 0; 6 > u; u++) r.__webglFramebuffer[u] = t.createFramebuffer()
                    } else r.__webglFramebuffer = t.createFramebuffer();
                    if (s) {
                        for (i.bindTexture(t.TEXTURE_CUBE_MAP, a.__webglTexture), f(t.TEXTURE_CUBE_MAP, e.texture, l), u = 0; 6 > u; u++) m(r.__webglFramebuffer[u], e, t.COLOR_ATTACHMENT0, t.TEXTURE_CUBE_MAP_POSITIVE_X + u);
                        h(e.texture, l) && t.generateMipmap(t.TEXTURE_CUBE_MAP), i.bindTexture(t.TEXTURE_CUBE_MAP, null)
                    } else i.bindTexture(t.TEXTURE_2D, a.__webglTexture), f(t.TEXTURE_2D, e.texture, l), m(r.__webglFramebuffer, e, t.COLOR_ATTACHMENT0, t.TEXTURE_2D), h(e.texture, l) && t.generateMipmap(t.TEXTURE_2D), i.bindTexture(t.TEXTURE_2D, null);
                    if (e.depthBuffer) {
                        if (r = n.get(e), a = !0 === e.isWebGLRenderTargetCube, e.depthTexture) {
                            if (a) throw Error("target.depthTexture not supported in Cube render targets");
                            if (e && e.isWebGLRenderTargetCube) throw Error("Depth Texture with cube render targets is not supported");
                            if (t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer), !e.depthTexture || !e.depthTexture.isDepthTexture) throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
                            if (n.get(e.depthTexture).__webglTexture && e.depthTexture.image.width === e.width && e.depthTexture.image.height === e.height || (e.depthTexture.image.width = e.width, e.depthTexture.image.height = e.height, e.depthTexture.needsUpdate = !0), d(e.depthTexture, 0), r = n.get(e.depthTexture).__webglTexture, 1026 === e.depthTexture.format) t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, r, 0);
                            else {
                                if (1027 !== e.depthTexture.format) throw Error("Unknown depthTexture format");
                                t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, r, 0)
                            }
                        } else if (a)
                            for (r.__webglDepthbuffer = [], a = 0; 6 > a; a++) t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer[a]), r.__webglDepthbuffer[a] = t.createRenderbuffer(), g(r.__webglDepthbuffer[a], e);
                        else t.bindFramebuffer(t.FRAMEBUFFER, r.__webglFramebuffer), r.__webglDepthbuffer = t.createRenderbuffer(), g(r.__webglDepthbuffer, e);
                        t.bindFramebuffer(t.FRAMEBUFFER, null)
                    }
                }, this.updateRenderTargetMipmap = function(e) {
                    var r = e.texture;
                    h(r, c(e)) && (e = e.isWebGLRenderTargetCube ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D, r = n.get(r).__webglTexture, i.bindTexture(e, r), t.generateMipmap(e), i.bindTexture(e, null))
                }
            }(Lt, P, I, U, C, J, At), N = new function(t) {
                var e = {};
                return {
                    get: function(t) {
                        return t.isInterleavedBufferAttribute && (t = t.data), e[t.uuid]
                    },
                    remove: function(i) {
                        i.isInterleavedBufferAttribute && (i = i.data);
                        var n = e[i.uuid];
                        n && (t.deleteBuffer(n.buffer), delete e[i.uuid])
                    },
                    update: function(i, n) {
                        if (i.isInterleavedBufferAttribute && (i = i.data), void 0 === (r = e[i.uuid])) {
                            var r = i.uuid,
                                a = i.array,
                                o = i.dynamic ? t.DYNAMIC_DRAW : t.STATIC_DRAW,
                                s = t.createBuffer();
                            t.bindBuffer(n, s), t.bufferData(n, a, o), i.onUploadCallback(), n = t.FLOAT, a instanceof Float32Array ? n = t.FLOAT : a instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : a instanceof Uint16Array ? n = t.UNSIGNED_SHORT : a instanceof Int16Array ? n = t.SHORT : a instanceof Uint32Array ? n = t.UNSIGNED_INT : a instanceof Int32Array ? n = t.INT : a instanceof Int8Array ? n = t.BYTE : a instanceof Uint8Array && (n = t.UNSIGNED_BYTE), e[r] = {
                                buffer: s,
                                type: n,
                                bytesPerElement: a.BYTES_PER_ELEMENT,
                                version: i.version
                            }
                        } else r.version < i.version && (s = (a = i).array, o = a.updateRange, t.bindBuffer(n, r.buffer), !1 === a.dynamic ? t.bufferData(n, s, t.STATIC_DRAW) : -1 === o.count ? t.bufferSubData(n, 0, s) : 0 === o.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (t.bufferSubData(n, o.offset * s.BYTES_PER_ELEMENT, s.subarray(o.offset, o.offset + o.count)), o.count = -1), r.version = i.version)
                    }
                }
            }(Lt), O = new function(t, e, i) {
                function n(t) {
                    t = t.target;
                    var o = r[t.id];
                    for (var s in null !== o.index && e.remove(o.index), o.attributes) e.remove(o.attributes[s]);
                    t.removeEventListener("dispose", n), delete r[t.id], (s = a[t.id]) && (e.remove(s), delete a[t.id]), (s = a[o.id]) && (e.remove(s), delete a[o.id]), i.geometries--
                }
                var r = {},
                    a = {};
                return {
                    get: function(t, e) {
                        var a = r[e.id];
                        return a || (e.addEventListener("dispose", n), e.isBufferGeometry ? a = e : e.isGeometry && (void 0 === e._bufferGeometry && (e._bufferGeometry = (new wt).setFromObject(t)), a = e._bufferGeometry), r[e.id] = a, i.geometries++, a)
                    },
                    update: function(i) {
                        var n = i.index,
                            r = i.attributes;
                        for (var a in null !== n && e.update(n, t.ELEMENT_ARRAY_BUFFER), r) e.update(r[a], t.ARRAY_BUFFER);
                        for (a in i = i.morphAttributes) {
                            r = 0;
                            for (var o = (n = i[a]).length; r < o; r++) e.update(n[r], t.ARRAY_BUFFER)
                        }
                    },
                    getWireframeAttribute: function(i) {
                        var n = a[i.id];
                        if (n) return n;
                        n = [];
                        var r = i.index,
                            o = i.attributes;
                        if (null !== r)
                            for (var s = r.array, c = 0, h = s.length; c < h; c += 3) {
                                var l = s[c + 0];
                                o = s[c + 1], r = s[c + 2], n.push(l, o, o, r, r, l)
                            } else
                                for (c = 0, h = (s = o.position.array).length / 3 - 1; c < h; c += 3) l = c + 0, o = c + 1, r = c + 2, n.push(l, o, o, r, r, l);
                        return n = new(65535 < _t(n) ? vt : mt)(n, 1), e.update(n, t.ELEMENT_ARRAY_BUFFER), a[i.id] = n
                    }
                }
            }(Lt, N, At), B = new function(t, e) {
                var i = {};
                return {
                    update: function(n) {
                        var r = e.frame,
                            a = n.geometry,
                            o = t.get(n, a);
                        return i[o.id] !== r && (a.isGeometry && o.updateFromObject(n), t.update(o), i[o.id] = r), o
                    },
                    clear: function() {
                        i = {}
                    }
                }
            }(O, Rt), j = new function(t) {
                var e = {},
                    i = new Float32Array(8);
                return {
                    update: function(n, r, a, o) {
                        var s = n.morphTargetInfluences,
                            c = s.length;
                        if (void 0 === (n = e[r.id])) {
                            n = [];
                            for (var h = 0; h < c; h++) n[h] = [h, 0];
                            e[r.id] = n
                        }
                        var l = a.morphTargets && r.morphAttributes.position;
                        for (a = a.morphNormals && r.morphAttributes.normal, h = 0; h < c; h++) {
                            var u = n[h];
                            0 !== u[1] && (l && r.removeAttribute("morphTarget" + h), a && r.removeAttribute("morphNormal" + h))
                        }
                        for (h = 0; h < c; h++)(u = n[h])[0] = h, u[1] = s[h];
                        for (n.sort(Ot), h = 0; 8 > h; h++)(u = n[h]) && (s = u[0], u = u[1]) ? (l && r.addAttribute("morphTarget" + h, l[s]), a && r.addAttribute("morphNormal" + h, a[s]), i[h] = u) : i[h] = 0;
                        o.getUniforms().setValue(t, "morphTargetInfluences", i)
                    }
                }
            }(Lt), z = new function(t, e, i) {
                function n(t, e) {
                    if (t) t.isTexture ? i = t.encoding : t.isWebGLRenderTarget && (console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."), i = t.texture.encoding);
                    else var i = 3e3;
                    return 3e3 === i && e && (i = 3007), i
                }
                var r = [],
                    a = {
                        MeshDepthMaterial: "depth",
                        MeshDistanceMaterial: "distanceRGBA",
                        MeshNormalMaterial: "normal",
                        MeshBasicMaterial: "basic",
                        MeshLambertMaterial: "lambert",
                        MeshPhongMaterial: "phong",
                        MeshToonMaterial: "phong",
                        MeshStandardMaterial: "physical",
                        MeshPhysicalMaterial: "physical",
                        LineBasicMaterial: "basic",
                        LineDashedMaterial: "dashed",
                        PointsMaterial: "points",
                        ShadowMaterial: "shadow"
                    },
                    o = "precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap gradientMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights numRectAreaLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes numClipIntersection depthPacking dithering".split(" ");
                this.getParameters = function(e, r, o, s, c, h, l) {
                    var u = a[e.type];
                    if (l.isSkinnedMesh) {
                        var p = l.skeleton.bones;
                        if (i.floatVertexTextures) p = 1024;
                        else {
                            var d = Math.min(Math.floor((i.maxVertexUniforms - 20) / 4), p.length);
                            d < p.length ? (console.warn("THREE.WebGLRenderer: Skeleton has " + p.length + " bones. This GPU supports " + d + "."), p = 0) : p = d
                        }
                    } else p = 0;
                    d = i.precision, null !== e.precision && (d = i.getMaxPrecision(e.precision)) !== e.precision && console.warn("THREE.WebGLProgram.getParameters:", e.precision, "not supported, using", d, "instead.");
                    var f = t.getRenderTarget();
                    return {
                        shaderID: u,
                        precision: d,
                        supportsVertexTextures: i.vertexTextures,
                        outputEncoding: n(f ? f.texture : null, t.gammaOutput),
                        map: !!e.map,
                        mapEncoding: n(e.map, t.gammaInput),
                        envMap: !!e.envMap,
                        envMapMode: e.envMap && e.envMap.mapping,
                        envMapEncoding: n(e.envMap, t.gammaInput),
                        envMapCubeUV: !!e.envMap && (306 === e.envMap.mapping || 307 === e.envMap.mapping),
                        lightMap: !!e.lightMap,
                        aoMap: !!e.aoMap,
                        emissiveMap: !!e.emissiveMap,
                        emissiveMapEncoding: n(e.emissiveMap, t.gammaInput),
                        bumpMap: !!e.bumpMap,
                        normalMap: !!e.normalMap,
                        displacementMap: !!e.displacementMap,
                        roughnessMap: !!e.roughnessMap,
                        metalnessMap: !!e.metalnessMap,
                        specularMap: !!e.specularMap,
                        alphaMap: !!e.alphaMap,
                        gradientMap: !!e.gradientMap,
                        combine: e.combine,
                        vertexColors: e.vertexColors,
                        fog: !!s,
                        useFog: e.fog,
                        fogExp: s && s.isFogExp2,
                        flatShading: e.flatShading,
                        sizeAttenuation: e.sizeAttenuation,
                        logarithmicDepthBuffer: i.logarithmicDepthBuffer,
                        skinning: e.skinning && 0 < p,
                        maxBones: p,
                        useVertexTexture: i.floatVertexTextures,
                        morphTargets: e.morphTargets,
                        morphNormals: e.morphNormals,
                        maxMorphTargets: t.maxMorphTargets,
                        maxMorphNormals: t.maxMorphNormals,
                        numDirLights: r.directional.length,
                        numPointLights: r.point.length,
                        numSpotLights: r.spot.length,
                        numRectAreaLights: r.rectArea.length,
                        numHemiLights: r.hemi.length,
                        numClippingPlanes: c,
                        numClipIntersection: h,
                        dithering: e.dithering,
                        shadowMapEnabled: t.shadowMap.enabled && l.receiveShadow && 0 < o.length,
                        shadowMapType: t.shadowMap.type,
                        toneMapping: t.toneMapping,
                        physicallyCorrectLights: t.physicallyCorrectLights,
                        premultipliedAlpha: e.premultipliedAlpha,
                        alphaTest: e.alphaTest,
                        doubleSided: 2 === e.side,
                        flipSided: 1 === e.side,
                        depthPacking: void 0 !== e.depthPacking && e.depthPacking
                    }
                }, this.getProgramCode = function(e, i) {
                    var n = [];
                    if (i.shaderID ? n.push(i.shaderID) : (n.push(e.fragmentShader), n.push(e.vertexShader)), void 0 !== e.defines)
                        for (var r in e.defines) n.push(r), n.push(e.defines[r]);
                    for (r = 0; r < o.length; r++) n.push(i[o[r]]);
                    return n.push(e.onBeforeCompile.toString()), n.push(t.gammaOutput), n.join()
                }, this.acquireProgram = function(i, n, a, o) {
                    for (var s, c = 0, h = r.length; c < h; c++) {
                        var l = r[c];
                        if (l.code === o) {
                            ++(s = l).usedTimes;
                            break
                        }
                    }
                    return void 0 === s && (s = new Wt(t, e, o, i, n, a), r.push(s)), s
                }, this.releaseProgram = function(t) {
                    if (0 == --t.usedTimes) {
                        var e = r.indexOf(t);
                        r[e] = r[r.length - 1], r.pop(), t.destroy()
                    }
                }, this.programs = r
            }(Q, P, C), F = new Bt, H = new Nt, V = new It(Q, I, O, M), X = new function(t, e, i) {
                var n;
                this.setMode = function(t) {
                    n = t
                }, this.render = function(e, r) {
                    t.drawArrays(n, e, r), i.calls++, i.vertices += r, n === t.TRIANGLES ? i.faces += r / 3 : n === t.POINTS && (i.points += r)
                }, this.renderInstances = function(r, a, o) {
                    var s = e.get("ANGLE_instanced_arrays");
                    if (null === s) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                    else {
                        var c = r.attributes.position;
                        c.isInterleavedBufferAttribute ? (o = c.data.count, s.drawArraysInstancedANGLE(n, 0, o, r.maxInstancedCount)) : s.drawArraysInstancedANGLE(n, a, o, r.maxInstancedCount), i.calls++, i.vertices += o * r.maxInstancedCount, n === t.TRIANGLES ? i.faces += r.maxInstancedCount * o / 3 : n === t.POINTS && (i.points += r.maxInstancedCount * o)
                    }
                }
            }(Lt, P, Rt), q = new function(t, e, i) {
                var n, r, a;
                this.setMode = function(t) {
                    n = t
                }, this.setIndex = function(t) {
                    r = t.type, a = t.bytesPerElement
                }, this.render = function(e, o) {
                    t.drawElements(n, o, r, e * a), i.calls++, i.vertices += o, n === t.TRIANGLES ? i.faces += o / 3 : n === t.POINTS && (i.points += o)
                }, this.renderInstances = function(o, s, c) {
                    var h = e.get("ANGLE_instanced_arrays");
                    null === h ? console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : (h.drawElementsInstancedANGLE(n, c, r, s * a, o.maxInstancedCount), i.calls++, i.vertices += c * o.maxInstancedCount, n === t.TRIANGLES ? i.faces += o.maxInstancedCount * c / 3 : n === t.POINTS && (i.points += o.maxInstancedCount * c))
                }
            }(Lt, P, Rt), Y = new k(Q, Lt, I, D, C), Z = new W(Q, Lt, I, D, C), Q.info.programs = z.programs, Q.context = Lt, Q.capabilities = C, Q.extensions = P, Q.properties = U, Q.renderLists = H, Q.state = I
        }

        function i(t) {
            t.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), K = !0
        }

        function n(t) {
            console.log("THREE.WebGLRenderer: Context Restored."), K = !1, e()
        }

        function a(t) {
            (t = t.target).removeEventListener("dispose", a), o(t), U.remove(t)
        }

        function o(t) {
            var e = U.get(t).program;
            t.program = void 0, void 0 !== e && z.releaseProgram(e)
        }

        function s(t) {
            null !== Dt && Dt(t), (Pt.getDevice() || window).requestAnimationFrame(s)
        }

        function u(t, e, i, n) {
            for (var r = 0, a = t.length; r < a; r++) {
                var o = (h = t[r]).object,
                    s = h.geometry,
                    c = void 0 === n ? h.material : n,
                    h = h.group;
                if (i.isArrayCamera) {
                    ot = i;
                    for (var l = i.cameras, u = 0, d = l.length; u < d; u++) {
                        var f = l[u];
                        if (o.layers.test(f.layers)) {
                            var m = f.bounds;
                            I.viewport(st.set(m.x * ut, m.y * pt, m.z * ut, m.w * pt).multiplyScalar(dt)), p(o, e, f, s, c, h)
                        }
                    }
                } else ot = null, p(o, e, i, s, c, h)
            }
        }

        function p(t, e, i, n, r, a) {
            if (t.onBeforeRender(Q, e, i, n, r, a), t.modelViewMatrix.multiplyMatrices(i.matrixWorldInverse, t.matrixWorld), t.normalMatrix.getNormalMatrix(t.modelViewMatrix), t.isImmediateRenderObject) {
                I.setMaterial(r);
                var o = f(i, e.fog, r, t);
                rt = "",
                    function(t, e, i) {
                        t.render(function(t) {
                            Q.renderBufferImmediate(t, e, i)
                        })
                    }(t, o, r)
            } else Q.renderBufferDirect(i, e.fog, n, r, t, a);
            t.onAfterRender(Q, e, i, n, r, a)
        }

        function d(t, e, i) {
            var n = U.get(t);
            i = z.getParameters(t, F.state, S, e, bt.numPlanes, bt.numIntersection, i);
            var r = z.getProgramCode(t, i),
                s = n.program,
                c = !0;
            if (void 0 === s) t.addEventListener("dispose", a);
            else if (s.code !== r) o(t);
            else {
                if (void 0 !== i.shaderID) return;
                c = !1
            }
            if (c && (i.shaderID ? (s = wr[i.shaderID], n.shader = {
                    name: t.type,
                    uniforms: br.clone(s.uniforms),
                    vertexShader: s.vertexShader,
                    fragmentShader: s.fragmentShader
                }) : n.shader = {
                    name: t.type,
                    uniforms: t.uniforms,
                    vertexShader: t.vertexShader,
                    fragmentShader: t.fragmentShader
                }, t.onBeforeCompile(n.shader), s = z.acquireProgram(t, n.shader, i, r), n.program = s, t.program = s), i = s.getAttributes(), t.morphTargets)
                for (r = t.numSupportedMorphTargets = 0; r < Q.maxMorphTargets; r++) 0 <= i["morphTarget" + r] && t.numSupportedMorphTargets++;
            if (t.morphNormals)
                for (r = t.numSupportedMorphNormals = 0; r < Q.maxMorphNormals; r++) 0 <= i["morphNormal" + r] && t.numSupportedMorphNormals++;
            i = n.shader.uniforms, (t.isShaderMaterial || t.isRawShaderMaterial) && !0 !== t.clipping || (n.numClippingPlanes = bt.numPlanes, n.numIntersection = bt.numIntersection, i.clippingPlanes = bt.uniform), n.fog = e, n.lightsHash = F.state.hash, t.lights && (i.ambientLightColor.value = F.state.ambient, i.directionalLights.value = F.state.directional, i.spotLights.value = F.state.spot, i.rectAreaLights.value = F.state.rectArea, i.pointLights.value = F.state.point, i.hemisphereLights.value = F.state.hemi, i.directionalShadowMap.value = F.state.directionalShadowMap, i.directionalShadowMatrix.value = F.state.directionalShadowMatrix, i.spotShadowMap.value = F.state.spotShadowMap, i.spotShadowMatrix.value = F.state.spotShadowMatrix, i.pointShadowMap.value = F.state.pointShadowMap, i.pointShadowMatrix.value = F.state.pointShadowMatrix), t = n.program.getUniforms(), t = G.seqWithValue(t.seq, i), n.uniformsList = t
        }

        function f(t, e, i, n) {
            lt = 0;
            var r = U.get(i);
            Mt && (Et || t !== at) && bt.setState(i.clippingPlanes, i.clipIntersection, i.clipShadows, t, r, t === at && i.id === nt), !1 === i.needsUpdate && (void 0 === r.program ? i.needsUpdate = !0 : i.fog && r.fog !== e ? i.needsUpdate = !0 : i.lights && r.lightsHash !== F.state.hash ? i.needsUpdate = !0 : void 0 === r.numClippingPlanes || r.numClippingPlanes === bt.numPlanes && r.numIntersection === bt.numIntersection || (i.needsUpdate = !0)), i.needsUpdate && (d(i, e, n), i.needsUpdate = !1);
            var a = !1,
                o = !1,
                s = !1,
                c = r.program,
                h = c.getUniforms(),
                u = r.shader.uniforms;
            if (I.useProgram(c.program) && (s = o = a = !0), i.id !== nt && (nt = i.id, o = !0), (a || t !== at) && (h.setValue(Lt, "projectionMatrix", t.projectionMatrix), C.logarithmicDepthBuffer && h.setValue(Lt, "logDepthBufFC", 2 / (Math.log(t.far + 1) / Math.LN2)), at !== (ot || t) && (at = ot || t, s = o = !0), (i.isShaderMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.envMap) && (void 0 !== (a = h.map.cameraPosition) && a.setValue(Lt, St.setFromMatrixPosition(t.matrixWorld))), (i.isMeshPhongMaterial || i.isMeshLambertMaterial || i.isMeshBasicMaterial || i.isMeshStandardMaterial || i.isShaderMaterial || i.skinning) && h.setValue(Lt, "viewMatrix", t.matrixWorldInverse)), i.skinning && (h.setOptional(Lt, n, "bindMatrix"), h.setOptional(Lt, n, "bindMatrixInverse"), t = n.skeleton))
                if (a = t.bones, C.floatVertexTextures) {
                    if (void 0 === t.boneTexture) {
                        a = Math.sqrt(4 * a.length), a = hr.nextPowerOfTwo(Math.ceil(a)), a = Math.max(a, 4);
                        var p = new Float32Array(a * a * 4);
                        p.set(t.boneMatrices);
                        var f = new l(p, a, a, 1023, 1015);
                        t.boneMatrices = p, t.boneTexture = f, t.boneTextureSize = a
                    }
                    h.setValue(Lt, "boneTexture", t.boneTexture), h.setValue(Lt, "boneTextureSize", t.boneTextureSize)
                } else h.setOptional(Lt, t, "boneMatrices");
            return o && (h.setValue(Lt, "toneMappingExposure", Q.toneMappingExposure), h.setValue(Lt, "toneMappingWhitePoint", Q.toneMappingWhitePoint), i.lights && (o = s, u.ambientLightColor.needsUpdate = o, u.directionalLights.needsUpdate = o, u.pointLights.needsUpdate = o, u.spotLights.needsUpdate = o, u.rectAreaLights.needsUpdate = o, u.hemisphereLights.needsUpdate = o), e && i.fog && (u.fogColor.value = e.color, e.isFog ? (u.fogNear.value = e.near, u.fogFar.value = e.far) : e.isFogExp2 && (u.fogDensity.value = e.density)), i.isMeshBasicMaterial ? m(u, i) : i.isMeshLambertMaterial ? (m(u, i), i.emissiveMap && (u.emissiveMap.value = i.emissiveMap)) : i.isMeshPhongMaterial ? (m(u, i), i.isMeshToonMaterial ? (g(u, i), i.gradientMap && (u.gradientMap.value = i.gradientMap)) : g(u, i)) : i.isMeshStandardMaterial ? (m(u, i), i.isMeshPhysicalMaterial && (u.clearCoat.value = i.clearCoat, u.clearCoatRoughness.value = i.clearCoatRoughness), u.roughness.value = i.roughness, u.metalness.value = i.metalness, i.roughnessMap && (u.roughnessMap.value = i.roughnessMap), i.metalnessMap && (u.metalnessMap.value = i.metalnessMap), i.emissiveMap && (u.emissiveMap.value = i.emissiveMap), i.bumpMap && (u.bumpMap.value = i.bumpMap, u.bumpScale.value = i.bumpScale), i.normalMap && (u.normalMap.value = i.normalMap, u.normalScale.value.copy(i.normalScale)), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias), i.envMap && (u.envMapIntensity.value = i.envMapIntensity)) : i.isMeshDepthMaterial ? (m(u, i), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias)) : i.isMeshDistanceMaterial ? (m(u, i), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias), u.referencePosition.value.copy(i.referencePosition), u.nearDistance.value = i.nearDistance, u.farDistance.value = i.farDistance) : i.isMeshNormalMaterial ? (m(u, i), i.bumpMap && (u.bumpMap.value = i.bumpMap, u.bumpScale.value = i.bumpScale), i.normalMap && (u.normalMap.value = i.normalMap, u.normalScale.value.copy(i.normalScale)), i.displacementMap && (u.displacementMap.value = i.displacementMap, u.displacementScale.value = i.displacementScale, u.displacementBias.value = i.displacementBias)) : i.isLineBasicMaterial ? (u.diffuse.value = i.color, u.opacity.value = i.opacity, i.isLineDashedMaterial && (u.dashSize.value = i.dashSize, u.totalSize.value = i.dashSize + i.gapSize, u.scale.value = i.scale)) : i.isPointsMaterial ? (u.diffuse.value = i.color, u.opacity.value = i.opacity, u.size.value = i.size * dt, u.scale.value = .5 * pt, u.map.value = i.map, null !== i.map && (e = i.map.offset, i = i.map.repeat, u.offsetRepeat.value.set(e.x, e.y, i.x, i.y))) : i.isShadowMaterial && (u.color.value = i.color, u.opacity.value = i.opacity), void 0 !== u.ltcMat && (u.ltcMat.value = xr.LTC_MAT_TEXTURE), void 0 !== u.ltcMag && (u.ltcMag.value = xr.LTC_MAG_TEXTURE), G.upload(Lt, r.uniformsList, u, Q)), h.setValue(Lt, "modelViewMatrix", n.modelViewMatrix), h.setValue(Lt, "normalMatrix", n.normalMatrix), h.setValue(Lt, "modelMatrix", n.matrixWorld), c
        }

        function m(t, e) {
            if (t.opacity.value = e.opacity, e.color && (t.diffuse.value = e.color), e.emissive && t.emissive.value.copy(e.emissive).multiplyScalar(e.emissiveIntensity), e.map && (t.map.value = e.map), e.alphaMap && (t.alphaMap.value = e.alphaMap), e.specularMap && (t.specularMap.value = e.specularMap), e.envMap && (t.envMap.value = e.envMap, t.flipEnvMap.value = e.envMap && e.envMap.isCubeTexture ? -1 : 1, t.reflectivity.value = e.reflectivity, t.refractionRatio.value = e.refractionRatio), e.lightMap && (t.lightMap.value = e.lightMap, t.lightMapIntensity.value = e.lightMapIntensity), e.aoMap && (t.aoMap.value = e.aoMap, t.aoMapIntensity.value = e.aoMapIntensity), e.map) var i = e.map;
            else e.specularMap ? i = e.specularMap : e.displacementMap ? i = e.displacementMap : e.normalMap ? i = e.normalMap : e.bumpMap ? i = e.bumpMap : e.roughnessMap ? i = e.roughnessMap : e.metalnessMap ? i = e.metalnessMap : e.alphaMap ? i = e.alphaMap : e.emissiveMap && (i = e.emissiveMap);
            void 0 !== i && (i.isWebGLRenderTarget && (i = i.texture), e = i.offset, i = i.repeat, t.offsetRepeat.value.set(e.x, e.y, i.x, i.y))
        }

        function g(t, e) {
            t.specular.value = e.specular, t.shininess.value = Math.max(e.shininess, 1e-4), e.emissiveMap && (t.emissiveMap.value = e.emissiveMap), e.bumpMap && (t.bumpMap.value = e.bumpMap, t.bumpScale.value = e.bumpScale), e.normalMap && (t.normalMap.value = e.normalMap, t.normalScale.value.copy(e.normalScale)), e.displacementMap && (t.displacementMap.value = e.displacementMap, t.displacementScale.value = e.displacementScale, t.displacementBias.value = e.displacementBias)
        }
        console.log("THREE.WebGLRenderer", "87");
        var v = void 0 !== (t = t || {}).canvas ? t.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"),
            y = void 0 !== t.context ? t.context : null,
            x = void 0 !== t.alpha && t.alpha,
            b = void 0 === t.depth || t.depth,
            _ = void 0 === t.stencil || t.stencil,
            w = void 0 !== t.antialias && t.antialias,
            M = void 0 === t.premultipliedAlpha || t.premultipliedAlpha,
            E = void 0 !== t.preserveDrawingBuffer && t.preserveDrawingBuffer,
            T = [],
            S = [],
            A = null,
            R = [],
            L = [];
        this.domElement = v, this.context = null, this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.gammaFactor = 2, this.physicallyCorrectLights = this.gammaOutput = this.gammaInput = !1, this.toneMappingWhitePoint = this.toneMappingExposure = this.toneMapping = 1, this.maxMorphTargets = 8, this.maxMorphNormals = 4;
        var P, C, I, U, D, N, O, B, F, z, H, V, j, X, q, Y, Z, J, Q = this,
            K = !1,
            $ = null,
            it = null,
            nt = -1,
            rt = "",
            at = null,
            ot = null,
            st = new r,
            ct = new r,
            ht = null,
            lt = 0,
            ut = v.width,
            pt = v.height,
            dt = 1,
            ft = new r(0, 0, ut, pt),
            gt = new r(0, 0, ut, pt),
            yt = !1,
            xt = new tt,
            bt = new Yt,
            Mt = !1,
            Et = !1,
            Tt = new h,
            St = new c,
            At = {
                geometries: 0,
                textures: 0
            },
            Rt = {
                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0
            };
        this.info = {
            render: Rt,
            memory: At,
            programs: null
        };
        try {
            x = {
                alpha: x,
                depth: b,
                stencil: _,
                antialias: w,
                premultipliedAlpha: M,
                preserveDrawingBuffer: E
            };
            var Lt = y || v.getContext("webgl", x) || v.getContext("experimental-webgl", x);
            if (null === Lt) {
                if (null !== v.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
                throw "Error creating WebGL context."
            }
            void 0 === Lt.getShaderPrecisionFormat && (Lt.getShaderPrecisionFormat = function() {
                return {
                    rangeMin: 1,
                    rangeMax: 1,
                    precision: 1
                }
            }), v.addEventListener("webglcontextlost", i, !1), v.addEventListener("webglcontextrestored", n, !1)
        } catch (t) {
            console.error("THREE.WebGLRenderer: " + t)
        }
        e();
        var Pt = new qt(Q);
        this.vr = Pt;
        var Ct = new et(Q, B, C.maxTextureSize);
        this.shadowMap = Ct, this.getContext = function() {
            return Lt
        }, this.getContextAttributes = function() {
            return Lt.getContextAttributes()
        }, this.forceContextLoss = function() {
            var t = P.get("WEBGL_lose_context");
            t && t.loseContext()
        }, this.forceContextRestore = function() {
            var t = P.get("WEBGL_lose_context");
            t && t.restoreContext()
        }, this.getPixelRatio = function() {
            return dt
        }, this.setPixelRatio = function(t) {
            void 0 !== t && (dt = t, this.setSize(ut, pt, !1))
        }, this.getSize = function() {
            return {
                width: ut,
                height: pt
            }
        }, this.setSize = function(t, e, i) {
            var n = Pt.getDevice();
            n && n.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (ut = t, pt = e, v.width = t * dt, v.height = e * dt, !1 !== i && (v.style.width = t + "px", v.style.height = e + "px"), this.setViewport(0, 0, t, e))
        }, this.getDrawingBufferSize = function() {
            return {
                width: ut * dt,
                height: pt * dt
            }
        }, this.setDrawingBufferSize = function(t, e, i) {
            ut = t, pt = e, dt = i, v.width = t * i, v.height = e * i, this.setViewport(0, 0, t, e)
        }, this.setViewport = function(t, e, i, n) {
            ft.set(t, pt - e - n, i, n), I.viewport(st.copy(ft).multiplyScalar(dt))
        }, this.setScissor = function(t, e, i, n) {
            gt.set(t, pt - e - n, i, n), I.scissor(ct.copy(gt).multiplyScalar(dt))
        }, this.setScissorTest = function(t) {
            I.setScissorTest(yt = t)
        }, this.getClearColor = V.getClearColor, this.setClearColor = V.setClearColor, this.getClearAlpha = V.getClearAlpha, this.setClearAlpha = V.setClearAlpha, this.clear = function(t, e, i) {
            var n = 0;
            (void 0 === t || t) && (n |= Lt.COLOR_BUFFER_BIT), (void 0 === e || e) && (n |= Lt.DEPTH_BUFFER_BIT), (void 0 === i || i) && (n |= Lt.STENCIL_BUFFER_BIT), Lt.clear(n)
        }, this.clearColor = function() {
            this.clear(!0, !1, !1)
        }, this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }, this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }, this.clearTarget = function(t, e, i, n) {
            this.setRenderTarget(t), this.clear(e, i, n)
        }, this.dispose = function() {
            v.removeEventListener("webglcontextlost", i, !1), v.removeEventListener("webglcontextrestored", n, !1), H.dispose(), Pt.dispose()
        }, this.renderBufferImmediate = function(t, e, i) {
            I.initAttributes();
            var n = U.get(t);
            if (t.hasPositions && !n.position && (n.position = Lt.createBuffer()), t.hasNormals && !n.normal && (n.normal = Lt.createBuffer()), t.hasUvs && !n.uv && (n.uv = Lt.createBuffer()), t.hasColors && !n.color && (n.color = Lt.createBuffer()), e = e.getAttributes(), t.hasPositions && (Lt.bindBuffer(Lt.ARRAY_BUFFER, n.position), Lt.bufferData(Lt.ARRAY_BUFFER, t.positionArray, Lt.DYNAMIC_DRAW), I.enableAttribute(e.position), Lt.vertexAttribPointer(e.position, 3, Lt.FLOAT, !1, 0, 0)), t.hasNormals) {
                if (Lt.bindBuffer(Lt.ARRAY_BUFFER, n.normal), !i.isMeshPhongMaterial && !i.isMeshStandardMaterial && !i.isMeshNormalMaterial && !0 === i.flatShading)
                    for (var r = 0, a = 3 * t.count; r < a; r += 9) {
                        var o = t.normalArray,
                            s = (o[r + 0] + o[r + 3] + o[r + 6]) / 3,
                            c = (o[r + 1] + o[r + 4] + o[r + 7]) / 3,
                            h = (o[r + 2] + o[r + 5] + o[r + 8]) / 3;
                        o[r + 0] = s, o[r + 1] = c, o[r + 2] = h, o[r + 3] = s, o[r + 4] = c, o[r + 5] = h, o[r + 6] = s, o[r + 7] = c, o[r + 8] = h
                    }
                Lt.bufferData(Lt.ARRAY_BUFFER, t.normalArray, Lt.DYNAMIC_DRAW), I.enableAttribute(e.normal), Lt.vertexAttribPointer(e.normal, 3, Lt.FLOAT, !1, 0, 0)
            }
            t.hasUvs && i.map && (Lt.bindBuffer(Lt.ARRAY_BUFFER, n.uv), Lt.bufferData(Lt.ARRAY_BUFFER, t.uvArray, Lt.DYNAMIC_DRAW), I.enableAttribute(e.uv), Lt.vertexAttribPointer(e.uv, 2, Lt.FLOAT, !1, 0, 0)), t.hasColors && 0 !== i.vertexColors && (Lt.bindBuffer(Lt.ARRAY_BUFFER, n.color), Lt.bufferData(Lt.ARRAY_BUFFER, t.colorArray, Lt.DYNAMIC_DRAW), I.enableAttribute(e.color), Lt.vertexAttribPointer(e.color, 3, Lt.FLOAT, !1, 0, 0)), I.disableUnusedAttributes(), Lt.drawArrays(Lt.TRIANGLES, 0, t.count), t.count = 0
        }, this.renderBufferDirect = function(t, e, i, n, r, a) {
            I.setMaterial(n);
            var o = f(t, e, n, r),
                s = !1;
            (t = i.id + "_" + o.id + "_" + (!0 === n.wireframe)) !== rt && (rt = t, s = !0), r.morphTargetInfluences && (j.update(r, i, n, o), s = !0);
            var c = i.index,
                h = i.attributes.position;
            if (e = 1, !0 === n.wireframe && (c = O.getWireframeAttribute(i), e = 2), t = X, null !== c) {
                var l = N.get(c);
                (t = q).setIndex(l)
            }
            if (s) {
                if (s = void 0, i && i.isInstancedBufferGeometry && null === P.get("ANGLE_instanced_arrays")) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
                else {
                    void 0 === s && (s = 0), I.initAttributes();
                    var u = i.attributes,
                        p = (o = o.getAttributes(), n.defaultAttributeValues);
                    for (M in o) {
                        var d = o[M];
                        if (0 <= d)
                            if (void 0 !== (w = u[M])) {
                                var m = w.normalized,
                                    g = w.itemSize;
                                if (void 0 !== (x = N.get(w))) {
                                    var v = x.buffer,
                                        y = x.type,
                                        x = x.bytesPerElement;
                                    if (w.isInterleavedBufferAttribute) {
                                        var b = w.data,
                                            _ = b.stride,
                                            w = w.offset;
                                        b && b.isInstancedInterleavedBuffer ? (I.enableAttributeAndDivisor(d, b.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = b.meshPerAttribute * b.count)) : I.enableAttribute(d), Lt.bindBuffer(Lt.ARRAY_BUFFER, v), Lt.vertexAttribPointer(d, g, y, m, _ * x, (s * _ + w) * x)
                                    } else w.isInstancedBufferAttribute ? (I.enableAttributeAndDivisor(d, w.meshPerAttribute), void 0 === i.maxInstancedCount && (i.maxInstancedCount = w.meshPerAttribute * w.count)) : I.enableAttribute(d), Lt.bindBuffer(Lt.ARRAY_BUFFER, v), Lt.vertexAttribPointer(d, g, y, m, 0, s * g * x)
                                }
                            } else if (void 0 !== p && void 0 !== (m = p[M])) switch (m.length) {
                            case 2:
                                Lt.vertexAttrib2fv(d, m);
                                break;
                            case 3:
                                Lt.vertexAttrib3fv(d, m);
                                break;
                            case 4:
                                Lt.vertexAttrib4fv(d, m);
                                break;
                            default:
                                Lt.vertexAttrib1fv(d, m)
                        }
                    }
                    I.disableUnusedAttributes()
                }
                null !== c && Lt.bindBuffer(Lt.ELEMENT_ARRAY_BUFFER, l.buffer)
            }
            l = 0, null !== c ? l = c.count : void 0 !== h && (l = h.count), c = i.drawRange.start * e, h = null !== a ? a.start * e : 0;
            var M = Math.max(c, h);
            if (0 !== (a = Math.max(0, Math.min(l, c + i.drawRange.count * e, h + (null !== a ? a.count * e : 1 / 0)) - 1 - M + 1))) {
                if (r.isMesh)
                    if (!0 === n.wireframe) I.setLineWidth(n.wireframeLinewidth * (null === $ ? dt : 1)), t.setMode(Lt.LINES);
                    else switch (r.drawMode) {
                        case 0:
                            t.setMode(Lt.TRIANGLES);
                            break;
                        case 1:
                            t.setMode(Lt.TRIANGLE_STRIP);
                            break;
                        case 2:
                            t.setMode(Lt.TRIANGLE_FAN)
                    } else r.isLine ? (void 0 === (n = n.linewidth) && (n = 1), I.setLineWidth(n * (null === $ ? dt : 1)), r.isLineSegments ? t.setMode(Lt.LINES) : r.isLineLoop ? t.setMode(Lt.LINE_LOOP) : t.setMode(Lt.LINE_STRIP)) : r.isPoints && t.setMode(Lt.POINTS);
                i && i.isInstancedBufferGeometry ? 0 < i.maxInstancedCount && t.renderInstances(i, M, a) : t.render(M, a)
            }
        }, this.compile = function(t, e) {
            T.length = 0, S.length = 0, t.traverse(function(t) {
                t.isLight && (T.push(t), t.castShadow && S.push(t))
            }), F.setup(T, S, e), t.traverse(function(e) {
                if (e.material)
                    if (Array.isArray(e.material))
                        for (var i = 0; i < e.material.length; i++) d(e.material[i], t.fog, e);
                    else d(e.material, t.fog, e)
            })
        };
        var Ut = !1,
            Dt = null;
        this.animate = function(t) {
            Dt = t, Ut || ((Pt.getDevice() || window).requestAnimationFrame(s), Ut = !0)
        }, this.render = function(t, e, i, n) {
            if (e && e.isCamera) {
                if (!K) {
                    rt = "", nt = -1, at = null, !0 === t.autoUpdate && t.updateMatrixWorld(), null === e.parent && e.updateMatrixWorld(), Pt.enabled && (e = Pt.getCamera(e)), Tt.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), xt.setFromMatrix(Tt), T.length = 0, S.length = 0, R.length = 0, L.length = 0, Et = this.localClippingEnabled, Mt = bt.init(this.clippingPlanes, Et, e), (A = H.get(t, e)).init(),
                        function t(e, i, n) {
                            if (e.visible) {
                                if (e.layers.test(i.layers))
                                    if (e.isLight) T.push(e), e.castShadow && S.push(e);
                                    else if (e.isSprite) e.frustumCulled && !xt.intersectsSprite(e) || R.push(e);
                                else if (e.isLensFlare) L.push(e);
                                else if (e.isImmediateRenderObject) n && St.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Tt), A.push(e, null, e.material, St.z, null);
                                else if ((e.isMesh || e.isLine || e.isPoints) && (e.isSkinnedMesh && e.skeleton.update(), !e.frustumCulled || xt.intersectsObject(e))) {
                                    n && St.setFromMatrixPosition(e.matrixWorld).applyMatrix4(Tt);
                                    var r = B.update(e),
                                        a = e.material;
                                    if (Array.isArray(a))
                                        for (var o = r.groups, s = 0, c = o.length; s < c; s++) {
                                            var h = o[s],
                                                l = a[h.materialIndex];
                                            l && l.visible && A.push(e, r, l, St.z, h)
                                        } else a.visible && A.push(e, r, a, St.z, null)
                                }
                                for (s = 0, c = (e = e.children).length; s < c; s++) t(e[s], i, n)
                            }
                        }(t, e, Q.sortObjects), !0 === Q.sortObjects && A.sort(), Mt && bt.beginShadows(), Ct.render(S, t, e), F.setup(T, S, e), Mt && bt.endShadows(), Rt.frame++, Rt.calls = 0, Rt.vertices = 0, Rt.faces = 0, Rt.points = 0, void 0 === i && (i = null), this.setRenderTarget(i), V.render(A, t, e, n), n = A.opaque;
                    var r = A.transparent;
                    if (t.overrideMaterial) {
                        var a = t.overrideMaterial;
                        n.length && u(n, t, e, a), r.length && u(r, t, e, a)
                    } else n.length && u(n, t, e), r.length && u(r, t, e);
                    Z.render(R, t, e), Y.render(L, t, e, st), i && D.updateRenderTargetMipmap(i), I.buffers.depth.setTest(!0), I.buffers.depth.setMask(!0), I.buffers.color.setMask(!0), I.setPolygonOffset(!1), Pt.enabled && Pt.submitFrame()
                }
            } else console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.")
        }, this.setFaceCulling = function(t, e) {
            I.setCullFace(t), I.setFlipSided(0 === e)
        }, this.allocTextureUnit = function() {
            var t = lt;
            return t >= C.maxTextures && console.warn("THREE.WebGLRenderer: Trying to use " + t + " texture units while this GPU supports only " + C.maxTextures), lt += 1, t
        }, this.setTexture2D = function() {
            var t = !1;
            return function(e, i) {
                e && e.isWebGLRenderTarget && (t || (console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), D.setTexture2D(e, i)
            }
        }(), this.setTexture = function() {
            var t = !1;
            return function(e, i) {
                t || (console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."), t = !0), D.setTexture2D(e, i)
            }
        }(), this.setTextureCube = function() {
            var t = !1;
            return function(e, i) {
                e && e.isWebGLRenderTargetCube && (t || (console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."), t = !0), e = e.texture), e && e.isCubeTexture || Array.isArray(e.image) && 6 === e.image.length ? D.setTextureCube(e, i) : D.setTextureCubeDynamic(e, i)
            }
        }(), this.getRenderTarget = function() {
            return $
        }, this.setRenderTarget = function(t) {
            ($ = t) && void 0 === U.get(t).__webglFramebuffer && D.setupRenderTarget(t);
            var e = null,
                i = !1;
            t ? (e = U.get(t).__webglFramebuffer, t.isWebGLRenderTargetCube && (e = e[t.activeCubeFace], i = !0), st.copy(t.viewport), ct.copy(t.scissor), ht = t.scissorTest) : (st.copy(ft).multiplyScalar(dt), ct.copy(gt).multiplyScalar(dt), ht = yt), it !== e && (Lt.bindFramebuffer(Lt.FRAMEBUFFER, e), it = e), I.viewport(st), I.scissor(ct), I.setScissorTest(ht), i && (i = U.get(t.texture), Lt.framebufferTexture2D(Lt.FRAMEBUFFER, Lt.COLOR_ATTACHMENT0, Lt.TEXTURE_CUBE_MAP_POSITIVE_X + t.activeCubeFace, i.__webglTexture, t.activeMipMapLevel))
        }, this.readRenderTargetPixels = function(t, e, i, n, r, a) {
            if (t && t.isWebGLRenderTarget) {
                var o = U.get(t).__webglFramebuffer;
                if (o) {
                    var s = !1;
                    o !== it && (Lt.bindFramebuffer(Lt.FRAMEBUFFER, o), s = !0);
                    try {
                        var c = t.texture,
                            h = c.format,
                            l = c.type;
                        1023 !== h && J.convert(h) !== Lt.getParameter(Lt.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : 1009 === l || J.convert(l) === Lt.getParameter(Lt.IMPLEMENTATION_COLOR_READ_TYPE) || 1015 === l && (P.get("OES_texture_float") || P.get("WEBGL_color_buffer_float")) || 1016 === l && P.get("EXT_color_buffer_half_float") ? Lt.checkFramebufferStatus(Lt.FRAMEBUFFER) === Lt.FRAMEBUFFER_COMPLETE ? 0 <= e && e <= t.width - n && 0 <= i && i <= t.height - r && Lt.readPixels(e, i, n, r, J.convert(h), J.convert(l), a) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                    } finally {
                        s && Lt.bindFramebuffer(Lt.FRAMEBUFFER, it)
                    }
                }
            } else console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.")
        }
    }

    function Qt(t, e) {
        this.name = "", this.color = new H(t), this.density = void 0 !== e ? e : 25e-5
    }

    function Kt(t, e, i) {
        this.name = "", this.color = new H(t), this.near = void 0 !== e ? e : 1, this.far = void 0 !== i ? i : 1e3
    }

    function $t() {
        rt.call(this), this.type = "Scene", this.overrideMaterial = this.fog = this.background = null, this.autoUpdate = !0
    }

    function te(t, e, i, n, r) {
        rt.call(this), this.lensFlares = [], this.positionScreen = new c, this.customUpdateCallback = void 0, void 0 !== t && this.add(t, e, i, n, r)
    }

    function ee(t) {
        X.call(this), this.type = "SpriteMaterial", this.color = new H(16777215), this.map = null, this.rotation = 0, this.lights = this.fog = !1, this.setValues(t)
    }

    function ie(t) {
        rt.call(this), this.type = "Sprite", this.material = void 0 !== t ? t : new ee
    }

    function ne() {
        rt.call(this), this.type = "LOD", Object.defineProperties(this, {
            levels: {
                enumerable: !0,
                value: []
            }
        })
    }

    function re(t, e) {
        if (t = t || [], this.bones = t.slice(0), this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === e) this.calculateInverses();
        else if (this.bones.length === e.length) this.boneInverses = e.slice(0);
        else
            for (console.warn("THREE.Skeleton boneInverses is the wrong length."), this.boneInverses = [], t = 0, e = this.bones.length; t < e; t++) this.boneInverses.push(new h)
    }

    function ae() {
        rt.call(this), this.type = "Bone"
    }

    function oe(t, e) {
        Ct.call(this, t, e), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new h, this.bindMatrixInverse = new h, t = new re(t = this.initBones()), this.bind(t, this.matrixWorld), this.normalizeSkinWeights()
    }

    function se(t) {
        X.call(this), this.type = "LineBasicMaterial", this.color = new H(16777215), this.linewidth = 1, this.linejoin = this.linecap = "round", this.lights = !1, this.setValues(t)
    }

    function ce(t, e, i) {
        if (1 === i) return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new he(t, e);
        rt.call(this), this.type = "Line", this.geometry = void 0 !== t ? t : new wt, this.material = void 0 !== e ? e : new se({
            color: 16777215 * Math.random()
        })
    }

    function he(t, e) {
        ce.call(this, t, e), this.type = "LineSegments"
    }

    function le(t, e) {
        ce.call(this, t, e), this.type = "LineLoop"
    }

    function ue(t) {
        X.call(this), this.type = "PointsMaterial", this.color = new H(16777215), this.map = null, this.size = 1, this.sizeAttenuation = !0, this.lights = !1, this.setValues(t)
    }

    function pe(t, e) {
        rt.call(this), this.type = "Points", this.geometry = void 0 !== t ? t : new wt, this.material = void 0 !== e ? e : new ue({
            color: 16777215 * Math.random()
        })
    }

    function de() {
        rt.call(this), this.type = "Group"
    }

    function fe(t, e, i, r, a, o, s, c, h) {
        n.call(this, t, e, i, r, a, o, s, c, h), this.generateMipmaps = !1;
        var l = this;
        ! function e() {
            requestAnimationFrame(e), t.readyState >= t.HAVE_CURRENT_DATA && (l.needsUpdate = !0)
        }()
    }

    function me(t, e, i, r, a, o, s, c, h, l, u, p) {
        n.call(this, null, o, s, c, h, l, r, a, u, p), this.image = {
            width: e,
            height: i
        }, this.mipmaps = t, this.generateMipmaps = this.flipY = !1
    }

    function ge(t, e, i, r, a, o, s, c, h, l) {
        if (1026 !== (l = void 0 !== l ? l : 1026) && 1027 !== l) throw Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        void 0 === i && 1026 === l && (i = 1012), void 0 === i && 1027 === l && (i = 1020), n.call(this, null, r, a, o, s, c, l, i, h), this.image = {
            width: t,
            height: e
        }, this.magFilter = void 0 !== s ? s : 1003, this.minFilter = void 0 !== c ? c : 1003, this.generateMipmaps = this.flipY = !1
    }

    function ve(t) {
        wt.call(this), this.type = "WireframeGeometry";
        var e, i, n, r = [],
            a = [0, 0],
            o = {},
            s = ["a", "b", "c"];
        if (t && t.isGeometry) {
            var h = t.faces,
                l = 0;
            for (i = h.length; l < i; l++) {
                var u = h[l];
                for (e = 0; 3 > e; e++) {
                    var p = u[s[e]],
                        d = u[s[(e + 1) % 3]];
                    a[0] = Math.min(p, d), a[1] = Math.max(p, d), void 0 === o[p = a[0] + "," + a[1]] && (o[p] = {
                        index1: a[0],
                        index2: a[1]
                    })
                }
            }
            for (p in o) l = o[p], s = t.vertices[l.index1], r.push(s.x, s.y, s.z), s = t.vertices[l.index2], r.push(s.x, s.y, s.z)
        } else if (t && t.isBufferGeometry) {
            s = new c;
            if (null !== t.index) {
                h = t.attributes.position, u = t.index;
                var f = t.groups;
                for (0 === f.length && (f = [{
                        start: 0,
                        count: u.count,
                        materialIndex: 0
                    }]), t = 0, n = f.length; t < n; ++t)
                    for (e = (l = f[t]).start, i = l.count, l = e, i = e + i; l < i; l += 3)
                        for (e = 0; 3 > e; e++) p = u.getX(l + e), d = u.getX(l + (e + 1) % 3), a[0] = Math.min(p, d), a[1] = Math.max(p, d), void 0 === o[p = a[0] + "," + a[1]] && (o[p] = {
                            index1: a[0],
                            index2: a[1]
                        });
                for (p in o) l = o[p], s.fromBufferAttribute(h, l.index1), r.push(s.x, s.y, s.z), s.fromBufferAttribute(h, l.index2), r.push(s.x, s.y, s.z)
            } else
                for (l = 0, i = (h = t.attributes.position).count / 3; l < i; l++)
                    for (e = 0; 3 > e; e++) o = 3 * l + e, s.fromBufferAttribute(h, o), r.push(s.x, s.y, s.z), o = 3 * l + (e + 1) % 3, s.fromBufferAttribute(h, o), r.push(s.x, s.y, s.z)
        }
        this.addAttribute("position", new yt(r, 3))
    }

    function ye(t, e, i) {
        ht.call(this), this.type = "ParametricGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: i
        }, this.fromBufferGeometry(new xe(t, e, i)), this.mergeVertices()
    }

    function xe(t, e, i) {
        wt.call(this), this.type = "ParametricBufferGeometry", this.parameters = {
            func: t,
            slices: e,
            stacks: i
        };
        var n, r, a = [],
            o = [],
            s = [],
            h = [],
            l = new c,
            u = new c,
            p = new c,
            d = new c,
            f = new c,
            m = e + 1;
        for (n = 0; n <= i; n++) {
            var g = n / i;
            for (r = 0; r <= e; r++) {
                var v = r / e;
                u = t(v, g, u);
                o.push(u.x, u.y, u.z), 0 <= v - 1e-5 ? (p = t(v - 1e-5, g, p), d.subVectors(u, p)) : (p = t(v + 1e-5, g, p), d.subVectors(p, u)), 0 <= g - 1e-5 ? (p = t(v, g - 1e-5, p), f.subVectors(u, p)) : (p = t(v, g + 1e-5, p), f.subVectors(p, u)), l.crossVectors(d, f).normalize(), s.push(l.x, l.y, l.z), h.push(v, g)
            }
        }
        for (n = 0; n < i; n++)
            for (r = 0; r < e; r++) t = n * m + r + 1, l = (n + 1) * m + r + 1, u = (n + 1) * m + r, a.push(n * m + r, t, u), a.push(t, l, u);
        this.setIndex(a), this.addAttribute("position", new yt(o, 3)), this.addAttribute("normal", new yt(s, 3)), this.addAttribute("uv", new yt(h, 2))
    }

    function be(t, e, i, n) {
        ht.call(this), this.type = "PolyhedronGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: i,
            detail: n
        }, this.fromBufferGeometry(new _e(t, e, i, n)), this.mergeVertices()
    }

    function _e(t, e, n, r) {
        function a(t) {
            h.push(t.x, t.y, t.z)
        }

        function o(e, i) {
            e *= 3, i.x = t[e + 0], i.y = t[e + 1], i.z = t[e + 2]
        }

        function s(t, e, i, n) {
            0 > n && 1 === t.x && (l[e] = t.x - 1), 0 === i.x && 0 === i.z && (l[e] = n / 2 / Math.PI + .5)
        }
        wt.call(this), this.type = "PolyhedronBufferGeometry", this.parameters = {
            vertices: t,
            indices: e,
            radius: n,
            detail: r
        }, n = n || 1;
        var h = [],
            l = [];
        ! function(t) {
            for (var i = new c, n = new c, r = new c, s = 0; s < e.length; s += 3) {
                o(e[s + 0], i), o(e[s + 1], n), o(e[s + 2], r);
                var h, l, u = i,
                    p = n,
                    d = r,
                    f = Math.pow(2, t),
                    m = [];
                for (l = 0; l <= f; l++) {
                    m[l] = [];
                    var g = u.clone().lerp(d, l / f),
                        v = p.clone().lerp(d, l / f),
                        y = f - l;
                    for (h = 0; h <= y; h++) m[l][h] = 0 === h && l === f ? g : g.clone().lerp(v, h / y)
                }
                for (l = 0; l < f; l++)
                    for (h = 0; h < 2 * (f - l) - 1; h++) u = Math.floor(h / 2), 0 == h % 2 ? (a(m[l][u + 1]), a(m[l + 1][u]), a(m[l][u])) : (a(m[l][u + 1]), a(m[l + 1][u + 1]), a(m[l + 1][u]))
            }
        }(r = r || 0),
        function(t) {
            for (var e = new c, i = 0; i < h.length; i += 3) e.x = h[i + 0], e.y = h[i + 1], e.z = h[i + 2], e.normalize().multiplyScalar(t), h[i + 0] = e.x, h[i + 1] = e.y, h[i + 2] = e.z
        }(n),
        function() {
            for (var t = new c, e = 0; e < h.length; e += 3) t.x = h[e + 0], t.y = h[e + 1], t.z = h[e + 2], l.push(Math.atan2(t.z, -t.x) / 2 / Math.PI + .5, 1 - (Math.atan2(-t.y, Math.sqrt(t.x * t.x + t.z * t.z)) / Math.PI + .5));
            t = new c, e = new c;
            for (var n = new c, r = new c, a = new i, o = new i, u = new i, p = 0, d = 0; p < h.length; p += 9, d += 6) {
                t.set(h[p + 0], h[p + 1], h[p + 2]), e.set(h[p + 3], h[p + 4], h[p + 5]), n.set(h[p + 6], h[p + 7], h[p + 8]), a.set(l[d + 0], l[d + 1]), o.set(l[d + 2], l[d + 3]), u.set(l[d + 4], l[d + 5]), r.copy(t).add(e).add(n).divideScalar(3);
                var f = Math.atan2(r.z, -r.x);
                s(a, d + 0, t, f), s(o, d + 2, e, f), s(u, d + 4, n, f)
            }
            for (t = 0; t < l.length; t += 6) e = l[t + 0], n = l[t + 2], r = l[t + 4], a = Math.min(e, n, r), .9 < Math.max(e, n, r) && .1 > a && (.2 > e && (l[t + 0] += 1), .2 > n && (l[t + 2] += 1), .2 > r && (l[t + 4] += 1))
        }(), this.addAttribute("position", new yt(h, 3)), this.addAttribute("normal", new yt(h.slice(), 3)), this.addAttribute("uv", new yt(l, 2)), 0 === r ? this.computeVertexNormals() : this.normalizeNormals()
    }

    function we(t, e) {
        ht.call(this), this.type = "TetrahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Me(t, e)), this.mergeVertices()
    }

    function Me(t, e) {
        _e.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t, e), this.type = "TetrahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Ee(t, e) {
        ht.call(this), this.type = "OctahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Te(t, e)), this.mergeVertices()
    }

    function Te(t, e) {
        _e.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t, e), this.type = "OctahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Se(t, e) {
        ht.call(this), this.type = "IcosahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Ae(t, e)), this.mergeVertices()
    }

    function Ae(t, e) {
        var i = (1 + Math.sqrt(5)) / 2;
        _e.call(this, [-1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, 0, 0, -1, i, 0, 1, i, 0, -1, -i, 0, 1, -i, i, 0, -1, i, 0, 1, -i, 0, -1, -i, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t, e), this.type = "IcosahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Re(t, e) {
        ht.call(this), this.type = "DodecahedronGeometry", this.parameters = {
            radius: t,
            detail: e
        }, this.fromBufferGeometry(new Le(t, e)), this.mergeVertices()
    }

    function Le(t, e) {
        var i = (1 + Math.sqrt(5)) / 2,
            n = 1 / i;
        _e.call(this, [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, -n, -i, 0, -n, i, 0, n, -i, 0, n, i, 0, -i, 0, -n, i, 0, -n, -i, 0, n, i, 0, n], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t, e), this.type = "DodecahedronBufferGeometry", this.parameters = {
            radius: t,
            detail: e
        }
    }

    function Pe(t, e, i, n, r, a) {
        ht.call(this), this.type = "TubeGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: i,
            radialSegments: n,
            closed: r
        }, void 0 !== a && console.warn("THREE.TubeGeometry: taper has been removed."), t = new Ce(t, e, i, n, r), this.tangents = t.tangents, this.normals = t.normals, this.binormals = t.binormals, this.fromBufferGeometry(t), this.mergeVertices()
    }

    function Ce(t, e, n, r, a) {
        function o(i) {
            var a = t.getPointAt(i / e),
                o = s.normals[i];
            for (i = s.binormals[i], l = 0; l <= r; l++) {
                var c = l / r * Math.PI * 2,
                    h = Math.sin(c);
                c = -Math.cos(c);
                p.x = c * o.x + h * i.x, p.y = c * o.y + h * i.y, p.z = c * o.z + h * i.z, p.normalize(), m.push(p.x, p.y, p.z), u.x = a.x + n * p.x, u.y = a.y + n * p.y, u.z = a.z + n * p.z, f.push(u.x, u.y, u.z)
            }
        }
        wt.call(this), this.type = "TubeBufferGeometry", this.parameters = {
            path: t,
            tubularSegments: e,
            radius: n,
            radialSegments: r,
            closed: a
        }, e = e || 64, n = n || 1, r = r || 8, a = a || !1;
        var s = t.computeFrenetFrames(e, a);
        this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
        var h, l, u = new c,
            p = new c,
            d = new i,
            f = [],
            m = [],
            g = [],
            v = [];
        for (h = 0; h < e; h++) o(h);
        for (o(!1 === a ? e : 0), h = 0; h <= e; h++)
            for (l = 0; l <= r; l++) d.x = h / e, d.y = l / r, g.push(d.x, d.y);
        ! function() {
            for (l = 1; l <= e; l++)
                for (h = 1; h <= r; h++) {
                    var t = (r + 1) * l + (h - 1),
                        i = (r + 1) * l + h,
                        n = (r + 1) * (l - 1) + h;
                    v.push((r + 1) * (l - 1) + (h - 1), t, n), v.push(t, i, n)
                }
        }(), this.setIndex(v), this.addAttribute("position", new yt(f, 3)), this.addAttribute("normal", new yt(m, 3)), this.addAttribute("uv", new yt(g, 2))
    }

    function Ie(t, e, i, n, r, a, o) {
        ht.call(this), this.type = "TorusKnotGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, void 0 !== o && console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."), this.fromBufferGeometry(new Ue(t, e, i, n, r, a)), this.mergeVertices()
    }

    function Ue(t, e, i, n, r, a) {
        function o(t, e, i, n, r) {
            var a = Math.sin(t);
            e = i / e * t, i = Math.cos(e), r.x = n * (2 + i) * .5 * Math.cos(t), r.y = n * (2 + i) * a * .5, r.z = n * Math.sin(e) * .5
        }
        wt.call(this), this.type = "TorusKnotBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            tubularSegments: i,
            radialSegments: n,
            p: r,
            q: a
        }, t = t || 100, e = e || 40, i = Math.floor(i) || 64, n = Math.floor(n) || 8, r = r || 2, a = a || 3;
        var s, h = [],
            l = [],
            u = [],
            p = [],
            d = new c,
            f = new c,
            m = new c,
            g = new c,
            v = new c,
            y = new c,
            x = new c;
        for (s = 0; s <= i; ++s) {
            var b = s / i * r * Math.PI * 2;
            for (o(b, r, a, t, m), o(b + .01, r, a, t, g), y.subVectors(g, m), x.addVectors(g, m), v.crossVectors(y, x), x.crossVectors(v, y), v.normalize(), x.normalize(), b = 0; b <= n; ++b) {
                var _ = b / n * Math.PI * 2,
                    w = -e * Math.cos(_);
                _ = e * Math.sin(_);
                d.x = m.x + (w * x.x + _ * v.x), d.y = m.y + (w * x.y + _ * v.y), d.z = m.z + (w * x.z + _ * v.z), l.push(d.x, d.y, d.z), f.subVectors(d, m).normalize(), u.push(f.x, f.y, f.z), p.push(s / i), p.push(b / n)
            }
        }
        for (b = 1; b <= i; b++)
            for (s = 1; s <= n; s++) t = (n + 1) * b + (s - 1), e = (n + 1) * b + s, r = (n + 1) * (b - 1) + s, h.push((n + 1) * (b - 1) + (s - 1), t, r), h.push(t, e, r);
        this.setIndex(h), this.addAttribute("position", new yt(l, 3)), this.addAttribute("normal", new yt(u, 3)), this.addAttribute("uv", new yt(p, 2))
    }

    function De(t, e, i, n, r) {
        ht.call(this), this.type = "TorusGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, this.fromBufferGeometry(new Ne(t, e, i, n, r)), this.mergeVertices()
    }

    function Ne(t, e, i, n, r) {
        wt.call(this), this.type = "TorusBufferGeometry", this.parameters = {
            radius: t,
            tube: e,
            radialSegments: i,
            tubularSegments: n,
            arc: r
        }, t = t || 100, e = e || 40, i = Math.floor(i) || 8, n = Math.floor(n) || 6, r = r || 2 * Math.PI;
        var a, o, s = [],
            h = [],
            l = [],
            u = [],
            p = new c,
            d = new c,
            f = new c;
        for (a = 0; a <= i; a++)
            for (o = 0; o <= n; o++) {
                var m = o / n * r,
                    g = a / i * Math.PI * 2;
                d.x = (t + e * Math.cos(g)) * Math.cos(m), d.y = (t + e * Math.cos(g)) * Math.sin(m), d.z = e * Math.sin(g), h.push(d.x, d.y, d.z), p.x = t * Math.cos(m), p.y = t * Math.sin(m), f.subVectors(d, p).normalize(), l.push(f.x, f.y, f.z), u.push(o / n), u.push(a / i)
            }
        for (a = 1; a <= i; a++)
            for (o = 1; o <= n; o++) t = (n + 1) * (a - 1) + o - 1, e = (n + 1) * (a - 1) + o, r = (n + 1) * a + o, s.push((n + 1) * a + o - 1, t, r), s.push(t, e, r);
        this.setIndex(s), this.addAttribute("position", new yt(h, 3)), this.addAttribute("normal", new yt(l, 3)), this.addAttribute("uv", new yt(u, 2))
    }

    function Oe(t, e) {
        ht.call(this), this.type = "ExtrudeGeometry", this.parameters = {
            shapes: t,
            options: e
        }, this.fromBufferGeometry(new Be(t, e)), this.mergeVertices()
    }

    function Be(t, e) {
        void 0 !== t && (wt.call(this), this.type = "ExtrudeBufferGeometry", t = Array.isArray(t) ? t : [t], this.addShapeList(t, e), this.computeVertexNormals())
    }

    function Fe(t, e) {
        ht.call(this), this.type = "TextGeometry", this.parameters = {
            text: t,
            parameters: e
        }, this.fromBufferGeometry(new ze(t, e)), this.mergeVertices()
    }

    function ze(t, e) {
        var i = (e = e || {}).font;
        if (!i || !i.isFont) return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."), new ht;
        t = i.generateShapes(t, e.size, e.curveSegments), e.amount = void 0 !== e.height ? e.height : 50, void 0 === e.bevelThickness && (e.bevelThickness = 10), void 0 === e.bevelSize && (e.bevelSize = 8), void 0 === e.bevelEnabled && (e.bevelEnabled = !1), Be.call(this, t, e), this.type = "TextBufferGeometry"
    }

    function Ge(t, e, i, n, r, a, o) {
        ht.call(this), this.type = "SphereGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, this.fromBufferGeometry(new He(t, e, i, n, r, a, o)), this.mergeVertices()
    }

    function He(t, e, i, n, r, a, o) {
        wt.call(this), this.type = "SphereBufferGeometry", this.parameters = {
            radius: t,
            widthSegments: e,
            heightSegments: i,
            phiStart: n,
            phiLength: r,
            thetaStart: a,
            thetaLength: o
        }, t = t || 50, e = Math.max(3, Math.floor(e) || 8), i = Math.max(2, Math.floor(i) || 6), n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var s, h, l = (a = void 0 !== a ? a : 0) + (o = void 0 !== o ? o : Math.PI),
            u = 0,
            p = [],
            d = new c,
            f = new c,
            m = [],
            g = [],
            v = [],
            y = [];
        for (h = 0; h <= i; h++) {
            var x = [],
                b = h / i;
            for (s = 0; s <= e; s++) {
                var _ = s / e;
                d.x = -t * Math.cos(n + _ * r) * Math.sin(a + b * o), d.y = t * Math.cos(a + b * o), d.z = t * Math.sin(n + _ * r) * Math.sin(a + b * o), g.push(d.x, d.y, d.z), f.set(d.x, d.y, d.z).normalize(), v.push(f.x, f.y, f.z), y.push(_, 1 - b), x.push(u++)
            }
            p.push(x)
        }
        for (h = 0; h < i; h++)
            for (s = 0; s < e; s++) t = p[h][s + 1], n = p[h][s], r = p[h + 1][s], o = p[h + 1][s + 1], (0 !== h || 0 < a) && m.push(t, n, o), (h !== i - 1 || l < Math.PI) && m.push(n, r, o);
        this.setIndex(m), this.addAttribute("position", new yt(g, 3)), this.addAttribute("normal", new yt(v, 3)), this.addAttribute("uv", new yt(y, 2))
    }

    function Ve(t, e, i, n, r, a) {
        ht.call(this), this.type = "RingGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: i,
            phiSegments: n,
            thetaStart: r,
            thetaLength: a
        }, this.fromBufferGeometry(new ke(t, e, i, n, r, a)), this.mergeVertices()
    }

    function ke(t, e, n, r, a, o) {
        wt.call(this), this.type = "RingBufferGeometry", this.parameters = {
            innerRadius: t,
            outerRadius: e,
            thetaSegments: n,
            phiSegments: r,
            thetaStart: a,
            thetaLength: o
        }, t = t || 20, e = e || 50, a = void 0 !== a ? a : 0, o = void 0 !== o ? o : 2 * Math.PI, n = void 0 !== n ? Math.max(3, n) : 8;
        var s, h, l = [],
            u = [],
            p = [],
            d = [],
            f = t,
            m = (e - t) / (r = void 0 !== r ? Math.max(1, r) : 1),
            g = new c,
            v = new i;
        for (s = 0; s <= r; s++) {
            for (h = 0; h <= n; h++) t = a + h / n * o, g.x = f * Math.cos(t), g.y = f * Math.sin(t), u.push(g.x, g.y, g.z), p.push(0, 0, 1), v.x = (g.x / e + 1) / 2, v.y = (g.y / e + 1) / 2, d.push(v.x, v.y);
            f += m
        }
        for (s = 0; s < r; s++)
            for (e = s * (n + 1), h = 0; h < n; h++) a = (t = h + e) + n + 1, o = t + n + 2, f = t + 1, l.push(t, a, f), l.push(a, o, f);
        this.setIndex(l), this.addAttribute("position", new yt(u, 3)), this.addAttribute("normal", new yt(p, 3)), this.addAttribute("uv", new yt(d, 2))
    }

    function je(t, e, i, n) {
        ht.call(this), this.type = "LatheGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: i,
            phiLength: n
        }, this.fromBufferGeometry(new We(t, e, i, n)), this.mergeVertices()
    }

    function We(t, e, n, r) {
        wt.call(this), this.type = "LatheBufferGeometry", this.parameters = {
            points: t,
            segments: e,
            phiStart: n,
            phiLength: r
        }, e = Math.floor(e) || 12, n = n || 0, r = r || 2 * Math.PI, r = hr.clamp(r, 0, 2 * Math.PI);
        var a, o = [],
            s = [],
            h = [],
            l = 1 / e,
            u = new c,
            p = new i;
        for (a = 0; a <= e; a++) {
            var d = n + a * l * r,
                f = Math.sin(d),
                m = Math.cos(d);
            for (d = 0; d <= t.length - 1; d++) u.x = t[d].x * f, u.y = t[d].y, u.z = t[d].x * m, s.push(u.x, u.y, u.z), p.x = a / e, p.y = d / (t.length - 1), h.push(p.x, p.y)
        }
        for (a = 0; a < e; a++)
            for (d = 0; d < t.length - 1; d++) l = (n = d + a * t.length) + t.length, u = n + t.length + 1, p = n + 1, o.push(n, l, p), o.push(l, u, p);
        if (this.setIndex(o), this.addAttribute("position", new yt(s, 3)), this.addAttribute("uv", new yt(h, 2)), this.computeVertexNormals(), r === 2 * Math.PI)
            for (r = this.attributes.normal.array, o = new c, s = new c, h = new c, n = e * t.length * 3, d = a = 0; a < t.length; a++, d += 3) o.x = r[d + 0], o.y = r[d + 1], o.z = r[d + 2], s.x = r[n + d + 0], s.y = r[n + d + 1], s.z = r[n + d + 2], h.addVectors(o, s).normalize(), r[d + 0] = r[n + d + 0] = h.x, r[d + 1] = r[n + d + 1] = h.y, r[d + 2] = r[n + d + 2] = h.z
    }

    function Xe(t, e) {
        ht.call(this), this.type = "ShapeGeometry", "object" == typeof e && (console.warn("THREE.ShapeGeometry: Options parameter has been removed."), e = e.curveSegments), this.parameters = {
            shapes: t,
            curveSegments: e
        }, this.fromBufferGeometry(new qe(t, e)), this.mergeVertices()
    }

    function qe(t, e) {
        function i(t) {
            var i, s = r.length / 3,
                h = (t = t.extractPoints(e)).shape,
                l = t.holes;
            if (!1 === Ar.isClockWise(h))
                for (h = h.reverse(), t = 0, i = l.length; t < i; t++) {
                    var u = l[t];
                    !0 === Ar.isClockWise(u) && (l[t] = u.reverse())
                }
            var p = Ar.triangulateShape(h, l);
            for (t = 0, i = l.length; t < i; t++) u = l[t], h = h.concat(u);
            for (t = 0, i = h.length; t < i; t++) u = h[t], r.push(u.x, u.y, 0), a.push(0, 0, 1), o.push(u.x, u.y);
            for (t = 0, i = p.length; t < i; t++) h = p[t], n.push(h[0] + s, h[1] + s, h[2] + s), c += 3
        }
        wt.call(this), this.type = "ShapeBufferGeometry", this.parameters = {
            shapes: t,
            curveSegments: e
        }, e = e || 12;
        var n = [],
            r = [],
            a = [],
            o = [],
            s = 0,
            c = 0;
        if (!1 === Array.isArray(t)) i(t);
        else
            for (var h = 0; h < t.length; h++) i(t[h]), this.addGroup(s, c, h), s += c, c = 0;
        this.setIndex(n), this.addAttribute("position", new yt(r, 3)), this.addAttribute("normal", new yt(a, 3)), this.addAttribute("uv", new yt(o, 2))
    }

    function Ye(t, e) {
        wt.call(this), this.type = "EdgesGeometry", this.parameters = {
            thresholdAngle: e
        };
        var i = [];
        e = Math.cos(hr.DEG2RAD * (void 0 !== e ? e : 1));
        var n = [0, 0],
            r = {},
            a = ["a", "b", "c"];
        if (t.isBufferGeometry) {
            var o = new ht;
            o.fromBufferGeometry(t)
        } else o = t.clone();
        o.mergeVertices(), o.computeFaceNormals(), t = o.vertices;
        for (var s = 0, c = (o = o.faces).length; s < c; s++)
            for (var h = o[s], l = 0; 3 > l; l++) {
                var u = h[a[l]],
                    p = h[a[(l + 1) % 3]];
                n[0] = Math.min(u, p), n[1] = Math.max(u, p), void 0 === r[u = n[0] + "," + n[1]] ? r[u] = {
                    index1: n[0],
                    index2: n[1],
                    face1: s,
                    face2: void 0
                } : r[u].face2 = s
            }
        for (u in r)(void 0 === (n = r[u]).face2 || o[n.face1].normal.dot(o[n.face2].normal) <= e) && (a = t[n.index1], i.push(a.x, a.y, a.z), a = t[n.index2], i.push(a.x, a.y, a.z));
        this.addAttribute("position", new yt(i, 3))
    }

    function Ze(t, e, i, n, r, a, o, s) {
        ht.call(this), this.type = "CylinderGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: i,
            radialSegments: n,
            heightSegments: r,
            openEnded: a,
            thetaStart: o,
            thetaLength: s
        }, this.fromBufferGeometry(new Je(t, e, i, n, r, a, o, s)), this.mergeVertices()
    }

    function Je(t, e, n, r, a, o, s, h) {
        function l(n) {
            var a, o = new i,
                l = new c,
                v = 0,
                b = !0 === n ? t : e,
                _ = !0 === n ? 1 : -1,
                w = g;
            for (a = 1; a <= r; a++) d.push(0, y * _, 0), f.push(0, _, 0), m.push(.5, .5), g++;
            var M = g;
            for (a = 0; a <= r; a++) {
                var E = a / r * h + s,
                    T = Math.cos(E);
                E = Math.sin(E);
                l.x = b * E, l.y = y * _, l.z = b * T, d.push(l.x, l.y, l.z), f.push(0, _, 0), o.x = .5 * T + .5, o.y = .5 * E * _ + .5, m.push(o.x, o.y), g++
            }
            for (a = 0; a < r; a++) o = w + a, l = M + a, !0 === n ? p.push(l, l + 1, o) : p.push(l + 1, l, o), v += 3;
            u.addGroup(x, v, !0 === n ? 1 : 2), x += v
        }
        wt.call(this), this.type = "CylinderBufferGeometry", this.parameters = {
            radiusTop: t,
            radiusBottom: e,
            height: n,
            radialSegments: r,
            heightSegments: a,
            openEnded: o,
            thetaStart: s,
            thetaLength: h
        };
        var u = this;
        t = void 0 !== t ? t : 20, e = void 0 !== e ? e : 20, n = void 0 !== n ? n : 100, r = Math.floor(r) || 8, a = Math.floor(a) || 1, o = void 0 !== o && o, s = void 0 !== s ? s : 0, h = void 0 !== h ? h : 2 * Math.PI;
        var p = [],
            d = [],
            f = [],
            m = [],
            g = 0,
            v = [],
            y = n / 2,
            x = 0;
        ! function() {
            var i, o, l = new c,
                b = new c,
                _ = 0,
                w = (e - t) / n;
            for (o = 0; o <= a; o++) {
                var M = [],
                    E = o / a,
                    T = E * (e - t) + t;
                for (i = 0; i <= r; i++) {
                    var S = i / r,
                        A = S * h + s,
                        R = Math.sin(A);
                    A = Math.cos(A);
                    b.x = T * R, b.y = -E * n + y, b.z = T * A, d.push(b.x, b.y, b.z), l.set(R, w, A).normalize(), f.push(l.x, l.y, l.z), m.push(S, 1 - E), M.push(g++)
                }
                v.push(M)
            }
            for (i = 0; i < r; i++)
                for (o = 0; o < a; o++) l = v[o + 1][i], b = v[o + 1][i + 1], w = v[o][i + 1], p.push(v[o][i], l, w), p.push(l, b, w), _ += 6;
            u.addGroup(x, _, 0), x += _
        }(), !1 === o && (0 < t && l(!0), 0 < e && l(!1)), this.setIndex(p), this.addAttribute("position", new yt(d, 3)), this.addAttribute("normal", new yt(f, 3)), this.addAttribute("uv", new yt(m, 2))
    }

    function Qe(t, e, i, n, r, a, o) {
        Ze.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function Ke(t, e, i, n, r, a, o) {
        Je.call(this, 0, t, e, i, n, r, a, o), this.type = "ConeBufferGeometry", this.parameters = {
            radius: t,
            height: e,
            radialSegments: i,
            heightSegments: n,
            openEnded: r,
            thetaStart: a,
            thetaLength: o
        }
    }

    function $e(t, e, i, n) {
        ht.call(this), this.type = "CircleGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: i,
            thetaLength: n
        }, this.fromBufferGeometry(new ti(t, e, i, n)), this.mergeVertices()
    }

    function ti(t, e, n, r) {
        wt.call(this), this.type = "CircleBufferGeometry", this.parameters = {
            radius: t,
            segments: e,
            thetaStart: n,
            thetaLength: r
        }, t = t || 50, e = void 0 !== e ? Math.max(3, e) : 8, n = void 0 !== n ? n : 0, r = void 0 !== r ? r : 2 * Math.PI;
        var a, o = [],
            s = [],
            h = [],
            l = [],
            u = new c,
            p = new i;
        s.push(0, 0, 0), h.push(0, 0, 1), l.push(.5, .5);
        var d = 0;
        for (a = 3; d <= e; d++, a += 3) {
            var f = n + d / e * r;
            u.x = t * Math.cos(f), u.y = t * Math.sin(f), s.push(u.x, u.y, u.z), h.push(0, 0, 1), p.x = (s[a] / t + 1) / 2, p.y = (s[a + 1] / t + 1) / 2, l.push(p.x, p.y)
        }
        for (a = 1; a <= e; a++) o.push(a, a + 1, 0);
        this.setIndex(o), this.addAttribute("position", new yt(s, 3)), this.addAttribute("normal", new yt(h, 3)), this.addAttribute("uv", new yt(l, 2))
    }

    function ei(t) {
        X.call(this), this.type = "ShadowMaterial", this.color = new H(0), this.opacity = 1, this.transparent = this.lights = !0, this.setValues(t)
    }

    function ii(t) {
        q.call(this, t), this.type = "RawShaderMaterial"
    }

    function ni(t) {
        X.call(this), this.defines = {
            STANDARD: ""
        }, this.type = "MeshStandardMaterial", this.color = new H(16777215), this.metalness = this.roughness = .5, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new H(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.metalnessMap = this.roughnessMap = null, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t)
    }

    function ri(t) {
        ni.call(this), this.defines = {
            PHYSICAL: ""
        }, this.type = "MeshPhysicalMaterial", this.reflectivity = .5, this.clearCoatRoughness = this.clearCoat = 0, this.setValues(t)
    }

    function ai(t) {
        X.call(this), this.type = "MeshPhongMaterial", this.color = new H(16777215), this.specular = new H(1118481), this.shininess = 30, this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new H(0), this.emissiveIntensity = 1, this.bumpMap = this.emissiveMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.envMap = this.alphaMap = this.specularMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t)
    }

    function oi(t) {
        ai.call(this), this.defines = {
            TOON: ""
        }, this.type = "MeshToonMaterial", this.gradientMap = null, this.setValues(t)
    }

    function si(t) {
        X.call(this), this.type = "MeshNormalMaterial", this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalScale = new i(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.morphNormals = this.morphTargets = this.skinning = this.lights = this.fog = !1, this.setValues(t)
    }

    function ci(t) {
        X.call(this), this.type = "MeshLambertMaterial", this.color = new H(16777215), this.lightMap = this.map = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new H(0), this.emissiveIntensity = 1, this.envMap = this.alphaMap = this.specularMap = this.emissiveMap = null, this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinejoin = this.wireframeLinecap = "round", this.morphNormals = this.morphTargets = this.skinning = !1, this.setValues(t)
    }

    function hi(t) {
        se.call(this), this.type = "LineDashedMaterial", this.scale = 1, this.dashSize = 3, this.gapSize = 1, this.setValues(t)
    }

    function li(t, e, i) {
        var n = this,
            r = !1,
            a = 0,
            o = 0;
        this.onStart = void 0, this.onLoad = t, this.onProgress = e, this.onError = i, this.itemStart = function(t) {
            o++, !1 === r && void 0 !== n.onStart && n.onStart(t, a, o), r = !0
        }, this.itemEnd = function(t) {
            a++, void 0 !== n.onProgress && n.onProgress(t, a, o), a === o && (r = !1, void 0 !== n.onLoad) && n.onLoad()
        }, this.itemError = function(t) {
            void 0 !== n.onError && n.onError(t)
        }
    }

    function ui(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function pi(t) {
        this.manager = void 0 !== t ? t : Cr, this._parser = null
    }

    function di(t) {
        this.manager = void 0 !== t ? t : Cr, this._parser = null
    }

    function fi(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function mi(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function gi(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function vi(t, e) {
        rt.call(this), this.type = "Light", this.color = new H(t), this.intensity = void 0 !== e ? e : 1, this.receiveShadow = void 0
    }

    function yi(t, e, i) {
        vi.call(this, t, i), this.type = "HemisphereLight", this.castShadow = void 0, this.position.copy(rt.DefaultUp), this.updateMatrix(), this.groundColor = new H(e)
    }

    function xi(t) {
        this.camera = t, this.bias = 0, this.radius = 1, this.mapSize = new i(512, 512), this.map = null, this.matrix = new h
    }

    function bi() {
        xi.call(this, new st(50, 1, .5, 500))
    }

    function _i(t, e, i, n, r, a) {
        vi.call(this, t, e), this.type = "SpotLight", this.position.copy(rt.DefaultUp), this.updateMatrix(), this.target = new rt, Object.defineProperty(this, "power", {
            get: function() {
                return this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / Math.PI
            }
        }), this.distance = void 0 !== i ? i : 0, this.angle = void 0 !== n ? n : Math.PI / 3, this.penumbra = void 0 !== r ? r : 0, this.decay = void 0 !== a ? a : 1, this.shadow = new bi
    }

    function wi(t, e, i, n) {
        vi.call(this, t, e), this.type = "PointLight", Object.defineProperty(this, "power", {
            get: function() {
                return 4 * this.intensity * Math.PI
            },
            set: function(t) {
                this.intensity = t / (4 * Math.PI)
            }
        }), this.distance = void 0 !== i ? i : 0, this.decay = void 0 !== n ? n : 1, this.shadow = new xi(new st(90, 1, .5, 500))
    }

    function Mi() {
        xi.call(this, new ot(-5, 5, 5, -5, .5, 500))
    }

    function Ei(t, e) {
        vi.call(this, t, e), this.type = "DirectionalLight", this.position.copy(rt.DefaultUp), this.updateMatrix(), this.target = new rt, this.shadow = new Mi
    }

    function Ti(t, e) {
        vi.call(this, t, e), this.type = "AmbientLight", this.castShadow = void 0
    }

    function Si(t, e, i, n) {
        vi.call(this, t, e), this.type = "RectAreaLight", this.position.set(0, 1, 0), this.updateMatrix(), this.width = void 0 !== i ? i : 10, this.height = void 0 !== n ? n : 10
    }

    function Ai(t, e, i, n) {
        this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== n ? n : new e.constructor(i), this.sampleValues = e, this.valueSize = i
    }

    function Ri(t, e, i, n) {
        Ai.call(this, t, e, i, n), this._offsetNext = this._weightNext = this._offsetPrev = this._weightPrev = -0
    }

    function Li(t, e, i, n) {
        Ai.call(this, t, e, i, n)
    }

    function Pi(t, e, i, n) {
        Ai.call(this, t, e, i, n)
    }

    function Ci(t, e, i, n) {
        if (void 0 === t) throw Error("track name is undefined");
        if (void 0 === e || 0 === e.length) throw Error("no keyframes in track named " + t);
        this.name = t, this.times = Ir.convertArray(e, this.TimeBufferType), this.values = Ir.convertArray(i, this.ValueBufferType), this.setInterpolation(n || this.DefaultInterpolation), this.validate(), this.optimize()
    }

    function Ii(t, e, i, n) {
        Ci.call(this, t, e, i, n)
    }

    function Ui(t, e, i, n) {
        Ai.call(this, t, e, i, n)
    }

    function Di(t, e, i, n) {
        Ci.call(this, t, e, i, n)
    }

    function Ni(t, e, i, n) {
        Ci.call(this, t, e, i, n)
    }

    function Oi(t, e, i, n) {
        Ci.call(this, t, e, i, n)
    }

    function Bi(t, e, i) {
        Ci.call(this, t, e, i)
    }

    function Fi(t, e, i, n) {
        Ci.call(this, t, e, i, n)
    }

    function zi(t, e, i, n) {
        Ci.apply(this, arguments)
    }

    function Gi(t, e, i) {
        this.name = t, this.tracks = i, this.duration = void 0 !== e ? e : -1, this.uuid = hr.generateUUID(), 0 > this.duration && this.resetDuration(), this.optimize()
    }

    function Hi(t) {
        this.manager = void 0 !== t ? t : Cr, this.textures = {}
    }

    function Vi(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function ki() {
        this.onLoadStart = function() {}, this.onLoadProgress = function() {}, this.onLoadComplete = function() {}
    }

    function ji(t) {
        "boolean" == typeof t && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), t = void 0), this.manager = void 0 !== t ? t : Cr, this.withCredentials = !1
    }

    function Wi(t) {
        this.manager = void 0 !== t ? t : Cr, this.texturePath = ""
    }

    function Xi(t, e, i, n, r) {
        var a = t * t;
        return (2 * i - 2 * n + (e = .5 * (n - e)) + (r = .5 * (r - i))) * t * a + (-3 * i + 3 * n - 2 * e - r) * a + e * t + i
    }

    function qi(t, e, i, n) {
        var r = 1 - t;
        return r * r * e + 2 * (1 - t) * t * i + t * t * n
    }

    function Yi(t, e, i, n, r) {
        var a = 1 - t,
            o = 1 - t;
        return a * a * a * e + 3 * o * o * t * i + 3 * (1 - t) * t * t * n + t * t * t * r
    }

    function Zi() {
        this.arcLengthDivisions = 200
    }

    function Ji(t, e) {
        this.arcLengthDivisions = 200, this.v1 = t, this.v2 = e
    }

    function Qi() {
        this.arcLengthDivisions = 200, this.curves = [], this.autoClose = !1
    }

    function Ki(t, e, i, n, r, a, o, s) {
        this.arcLengthDivisions = 200, this.aX = t, this.aY = e, this.xRadius = i, this.yRadius = n, this.aStartAngle = r, this.aEndAngle = a, this.aClockwise = o, this.aRotation = s || 0
    }

    function $i(t) {
        this.arcLengthDivisions = 200, this.points = void 0 === t ? [] : t
    }

    function tn(t, e, i, n) {
        this.arcLengthDivisions = 200, this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
    }

    function en(t, e, i) {
        this.arcLengthDivisions = 200, this.v0 = t, this.v1 = e, this.v2 = i
    }

    function nn(t) {
        Qi.call(this), this.currentPoint = new i, t && this.fromPoints(t)
    }

    function rn() {
        nn.apply(this, arguments), this.holes = []
    }

    function an() {
        this.subPaths = [], this.currentPath = null
    }

    function on(t) {
        this.data = t
    }

    function sn(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function cn(t) {
        this.manager = void 0 !== t ? t : Cr
    }

    function hn() {
        this.type = "StereoCamera", this.aspect = 1, this.eyeSep = .064, this.cameraL = new st, this.cameraL.layers.enable(1), this.cameraL.matrixAutoUpdate = !1, this.cameraR = new st, this.cameraR.layers.enable(2), this.cameraR.matrixAutoUpdate = !1
    }

    function ln(t, e, i) {
        rt.call(this), this.type = "CubeCamera";
        var n = new st(90, 1, t, e);
        n.up.set(0, -1, 0), n.lookAt(new c(1, 0, 0)), this.add(n);
        var r = new st(90, 1, t, e);
        r.up.set(0, -1, 0), r.lookAt(new c(-1, 0, 0)), this.add(r);
        var a = new st(90, 1, t, e);
        a.up.set(0, 0, 1), a.lookAt(new c(0, 1, 0)), this.add(a);
        var s = new st(90, 1, t, e);
        s.up.set(0, 0, -1), s.lookAt(new c(0, -1, 0)), this.add(s);
        var h = new st(90, 1, t, e);
        h.up.set(0, -1, 0), h.lookAt(new c(0, 0, 1)), this.add(h);
        var l = new st(90, 1, t, e);
        l.up.set(0, -1, 0), l.lookAt(new c(0, 0, -1)), this.add(l), this.renderTarget = new o(i, i, {
            format: 1022,
            magFilter: 1006,
            minFilter: 1006
        }), this.renderTarget.texture.name = "CubeCamera", this.update = function(t, e) {
            null === this.parent && this.updateMatrixWorld();
            var i = this.renderTarget,
                o = i.texture.generateMipmaps;
            i.texture.generateMipmaps = !1, i.activeCubeFace = 0, t.render(e, n, i), i.activeCubeFace = 1, t.render(e, r, i), i.activeCubeFace = 2, t.render(e, a, i), i.activeCubeFace = 3, t.render(e, s, i), i.activeCubeFace = 4, t.render(e, h, i), i.texture.generateMipmaps = o, i.activeCubeFace = 5, t.render(e, l, i), t.setRenderTarget(null)
        }, this.clear = function(t, e, i, n) {
            for (var r = this.renderTarget, a = 0; 6 > a; a++) r.activeCubeFace = a, t.setRenderTarget(r), t.clear(e, i, n);
            t.setRenderTarget(null)
        }
    }

    function un() {
        rt.call(this), this.type = "AudioListener", this.context = Vr.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null
    }

    function pn(t) {
        rt.call(this), this.type = "Audio", this.context = t.context, this.gain = this.context.createGain(), this.gain.connect(t.getInput()), this.autoplay = !1, this.buffer = null, this.loop = !1, this.startTime = 0, this.playbackRate = 1, this.isPlaying = !1, this.hasPlaybackControl = !0, this.sourceType = "empty", this.filters = []
    }

    function dn(t) {
        pn.call(this, t), this.panner = this.context.createPanner(), this.panner.connect(this.gain)
    }

    function fn(t, e) {
        this.analyser = t.context.createAnalyser(), this.analyser.fftSize = void 0 !== e ? e : 2048, this.data = new Uint8Array(this.analyser.frequencyBinCount), t.getOutput().connect(this.analyser)
    }

    function mn(t, e, i) {
        switch (this.binding = t, this.valueSize = i, t = Float64Array, e) {
            case "quaternion":
                e = this._slerp;
                break;
            case "string":
            case "bool":
                t = Array, e = this._select;
                break;
            default:
                e = this._lerp
        }
        this.buffer = new t(4 * i), this._mixBufferRegion = e, this.referenceCount = this.useCount = this.cumulativeWeight = 0
    }

    function gn(t, e, i) {
        i = i || vn.parseTrackName(e), this._targetGroup = t, this._bindings = t.subscribe_(e, i)
    }

    function vn(t, e, i) {
        this.path = e, this.parsedPath = i || vn.parseTrackName(e), this.node = vn.findNode(t, this.parsedPath.nodeName) || t, this.rootNode = t
    }

    function yn(t) {
        this.uuid = hr.generateUUID(), this._objects = Array.prototype.slice.call(arguments), this.nCachedObjects_ = 0;
        var e = {};
        this._indicesByUUID = e;
        for (var i = 0, n = arguments.length; i !== n; ++i) e[arguments[i].uuid] = i;
        this._paths = [], this._parsedPaths = [], this._bindings = [], this._bindingsIndicesByPath = {};
        var r = this;
        this.stats = {
            objects: {
                get total() {
                    return r._objects.length
                },
                get inUse() {
                    return this.total - r.nCachedObjects_
                }
            },
            get bindingsPerObject() {
                return r._bindings.length
            }
        }
    }

    function xn(t, e, i) {
        this._mixer = t, this._clip = e, this._localRoot = i || null, e = (t = e.tracks).length, i = Array(e);
        for (var n = {
                endingStart: 2400,
                endingEnd: 2400
            }, r = 0; r !== e; ++r) {
            var a = t[r].createInterpolant(null);
            i[r] = a, a.settings = n
        }
        this._interpolantSettings = n, this._interpolants = i, this._propertyBindings = Array(e), this._weightInterpolant = this._timeScaleInterpolant = this._byClipCacheIndex = this._cacheIndex = null, this.loop = 2201, this._loopCount = -1, this._startTime = null, this.time = 0, this._effectiveWeight = this.weight = this._effectiveTimeScale = this.timeScale = 1, this.repetitions = 1 / 0, this.paused = !1, this.enabled = !0, this.clampWhenFinished = !1, this.zeroSlopeAtEnd = this.zeroSlopeAtStart = !0
    }

    function bn(t) {
        this._root = t, this._initMemoryManager(), this.time = this._accuIndex = 0, this.timeScale = 1
    }

    function _n(t, e) {
        "string" == typeof t && (console.warn("THREE.Uniform: Type parameter is no longer needed."), t = e), this.value = t
    }

    function wn() {
        wt.call(this), this.type = "InstancedBufferGeometry", this.maxInstancedCount = void 0
    }

    function Mn(t, e, i, n) {
        this.uuid = hr.generateUUID(), this.data = t, this.itemSize = e, this.offset = i, this.normalized = !0 === n
    }

    function En(t, e) {
        this.uuid = hr.generateUUID(), this.array = t, this.stride = e, this.count = void 0 !== t ? t.length / e : 0, this.dynamic = !1, this.updateRange = {
            offset: 0,
            count: -1
        }, this.onUploadCallback = function() {}, this.version = 0
    }

    function Tn(t, e, i) {
        En.call(this, t, e), this.meshPerAttribute = i || 1
    }

    function Sn(t, e, i) {
        lt.call(this, t, e), this.meshPerAttribute = i || 1
    }

    function An(t, e, i, n) {
        this.ray = new Rt(t, e), this.near = i || 0, this.far = n || 1 / 0, this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        }, Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."), this.Points
                }
            }
        })
    }

    function Rn(t, e) {
        return t.distance - e.distance
    }

    function Ln(t, e, i, n) {
        if (!1 !== t.visible && (t.raycast(e, i), !0 === n)) {
            n = 0;
            for (var r = (t = t.children).length; n < r; n++) Ln(t[n], e, i, !0)
        }
    }

    function Pn(t) {
        this.autoStart = void 0 === t || t, this.elapsedTime = this.oldTime = this.startTime = 0, this.running = !1
    }

    function Cn(t, e, i) {
        return this.radius = void 0 !== t ? t : 1, this.phi = void 0 !== e ? e : 0, this.theta = void 0 !== i ? i : 0, this
    }

    function In(t, e, i) {
        return this.radius = void 0 !== t ? t : 1, this.theta = void 0 !== e ? e : 0, this.y = void 0 !== i ? i : 0, this
    }

    function Un(t) {
        rt.call(this), this.material = t, this.render = function(t) {}
    }

    function Dn(t, e, i, n) {
        this.object = t, this.size = void 0 !== e ? e : 1, t = void 0 !== i ? i : 16711680, n = void 0 !== n ? n : 1, e = 0, (i = this.object.geometry) && i.isGeometry ? e = 3 * i.faces.length : i && i.isBufferGeometry && (e = i.attributes.normal.count), i = new wt, e = new yt(6 * e, 3), i.addAttribute("position", e), he.call(this, i, new se({
            color: t,
            linewidth: n
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Nn(t, e) {
        rt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e, t = new wt, e = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1];
        for (var i = 0, n = 1; 32 > i; i++, n++) {
            var r = i / 32 * Math.PI * 2,
                a = n / 32 * Math.PI * 2;
            e.push(Math.cos(r), Math.sin(r), 1, Math.cos(a), Math.sin(a), 1)
        }
        t.addAttribute("position", new yt(e, 3)), e = new se({
            fog: !1
        }), this.cone = new he(t, e), this.add(this.cone), this.update()
    }

    function On(t) {
        for (var e = function t(e) {
                var i = [];
                e && e.isBone && i.push(e);
                for (var n = 0; n < e.children.length; n++) i.push.apply(i, t(e.children[n]));
                return i
            }(t), i = new wt, n = [], r = [], a = new H(0, 0, 1), o = new H(0, 1, 0), s = 0; s < e.length; s++) {
            var c = e[s];
            c.parent && c.parent.isBone && (n.push(0, 0, 0), n.push(0, 0, 0), r.push(a.r, a.g, a.b), r.push(o.r, o.g, o.b))
        }
        i.addAttribute("position", new yt(n, 3)), i.addAttribute("color", new yt(r, 3)), n = new se({
            vertexColors: 2,
            depthTest: !1,
            depthWrite: !1,
            transparent: !0
        }), he.call(this, i, n), this.root = t, this.bones = e, this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.onBeforeRender()
    }

    function Bn(t, e, i) {
        this.light = t, this.light.updateMatrixWorld(), this.color = i, t = new He(e, 4, 2), e = new At({
            wireframe: !0,
            fog: !1
        }), Ct.call(this, t, e), this.matrix = this.light.matrixWorld, this.matrixAutoUpdate = !1, this.update()
    }

    function Fn(t, e) {
        rt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = e, t = new se({
            fog: !1
        }), (e = new wt).addAttribute("position", new lt(new Float32Array(15), 3)), this.line = new ce(e, t), this.add(this.line), this.update()
    }

    function zn(t, e, i) {
        rt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, (t = new Te(e)).rotateY(.5 * Math.PI), this.material = new At({
            wireframe: !0,
            fog: !1
        }), void 0 === this.color && (this.material.vertexColors = 2), e = t.getAttribute("position"), e = new Float32Array(3 * e.count), t.addAttribute("color", new lt(e, 3)), this.add(new Ct(t, this.material)), this.update()
    }

    function Gn(t, e, i, n) {
        t = t || 10, e = e || 10, i = new H(void 0 !== i ? i : 4473924), n = new H(void 0 !== n ? n : 8947848);
        var r = e / 2,
            a = t / e,
            o = t / 2;
        t = [];
        for (var s = [], c = 0, h = 0, l = -o; c <= e; c++, l += a) {
            t.push(-o, 0, l, o, 0, l), t.push(l, 0, -o, l, 0, o);
            var u = c === r ? i : n;
            u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3, u.toArray(s, h), h += 3
        }(e = new wt).addAttribute("position", new yt(t, 3)), e.addAttribute("color", new yt(s, 3)), i = new se({
            vertexColors: 2
        }), he.call(this, e, i)
    }

    function Hn(t, e, i, n, r, a) {
        t = t || 10, e = e || 16, i = i || 8, n = n || 64, r = new H(void 0 !== r ? r : 4473924), a = new H(void 0 !== a ? a : 8947848);
        var o, s = [],
            c = [];
        for (o = 0; o <= e; o++) {
            var h = o / e * 2 * Math.PI,
                l = Math.sin(h) * t;
            h = Math.cos(h) * t, s.push(0, 0, 0), s.push(l, 0, h);
            var u = 1 & o ? r : a;
            c.push(u.r, u.g, u.b), c.push(u.r, u.g, u.b)
        }
        for (o = 0; o <= i; o++) {
            u = 1 & o ? r : a;
            var p = t - t / i * o;
            for (e = 0; e < n; e++) h = e / n * 2 * Math.PI, l = Math.sin(h) * p, h = Math.cos(h) * p, s.push(l, 0, h), c.push(u.r, u.g, u.b), h = (e + 1) / n * 2 * Math.PI, l = Math.sin(h) * p, h = Math.cos(h) * p, s.push(l, 0, h), c.push(u.r, u.g, u.b)
        }(t = new wt).addAttribute("position", new yt(s, 3)), t.addAttribute("color", new yt(c, 3)), s = new se({
            vertexColors: 2
        }), he.call(this, t, s)
    }

    function Vn(t, e, i, n) {
        this.object = t, this.size = void 0 !== e ? e : 1, t = void 0 !== i ? i : 16776960, n = void 0 !== n ? n : 1, e = 0, (i = this.object.geometry) && i.isGeometry ? e = i.faces.length : console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."), i = new wt, e = new yt(6 * e, 3), i.addAttribute("position", e), he.call(this, i, new se({
            color: t,
            linewidth: n
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function kn(t, e, i) {
        rt.call(this), this.light = t, this.light.updateMatrixWorld(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.color = i, void 0 === e && (e = 1), (t = new wt).addAttribute("position", new yt([-e, e, 0, e, e, 0, e, -e, 0, -e, -e, 0, -e, e, 0], 3)), e = new se({
            fog: !1
        }), this.lightPlane = new ce(t, e), this.add(this.lightPlane), (t = new wt).addAttribute("position", new yt([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new ce(t, e), this.add(this.targetLine), this.update()
    }

    function jn(t) {
        function e(t, e, n) {
            i(t, n), i(e, n)
        }

        function i(t, e) {
            a.push(0, 0, 0), o.push(e.r, e.g, e.b), void 0 === s[t] && (s[t] = []), s[t].push(a.length / 3 - 1)
        }
        var n = new wt,
            r = new se({
                color: 16777215,
                vertexColors: 1
            }),
            a = [],
            o = [],
            s = {},
            c = new H(16755200),
            h = new H(16711680),
            l = new H(43775),
            u = new H(16777215),
            p = new H(3355443);
        e("n1", "n2", c), e("n2", "n4", c), e("n4", "n3", c), e("n3", "n1", c), e("f1", "f2", c), e("f2", "f4", c), e("f4", "f3", c), e("f3", "f1", c), e("n1", "f1", c), e("n2", "f2", c), e("n3", "f3", c), e("n4", "f4", c), e("p", "n1", h), e("p", "n2", h), e("p", "n3", h), e("p", "n4", h), e("u1", "u2", l), e("u2", "u3", l), e("u3", "u1", l), e("c", "t", u), e("p", "c", p), e("cn1", "cn2", p), e("cn3", "cn4", p), e("cf1", "cf2", p), e("cf3", "cf4", p), n.addAttribute("position", new yt(a, 3)), n.addAttribute("color", new yt(o, 3)), he.call(this, n, r), this.camera = t, this.camera.updateProjectionMatrix && this.camera.updateProjectionMatrix(), this.matrix = t.matrixWorld, this.matrixAutoUpdate = !1, this.pointMap = s, this.update()
    }

    function Wn(t, e) {
        this.object = t, void 0 === e && (e = 16776960), t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var i = new Float32Array(24),
            n = new wt;
        n.setIndex(new lt(t, 1)), n.addAttribute("position", new lt(i, 3)), he.call(this, n, new se({
            color: e
        })), this.matrixAutoUpdate = !1, this.update()
    }

    function Xn(t, e) {
        this.type = "Box3Helper", this.box = t, t = void 0 !== e ? e : 16776960, e = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
        var i = new wt;
        i.setIndex(new lt(e, 1)), i.addAttribute("position", new yt([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3)), he.call(this, i, new se({
            color: t
        })), this.geometry.computeBoundingSphere(), this.onBeforeRender()
    }

    function qn(t, e, i) {
        this.type = "PlaneHelper", this.plane = t, this.size = void 0 === e ? 1 : e, t = void 0 !== i ? i : 16776960, (e = new wt).addAttribute("position", new yt([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3)), e.computeBoundingSphere(), ce.call(this, e, new se({
            color: t
        })), (e = new wt).addAttribute("position", new yt([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3)), e.computeBoundingSphere(), this.add(new Ct(e, new At({
            color: t,
            opacity: .2,
            transparent: !0,
            depthWrite: !1
        }))), this.onBeforeRender()
    }

    function Yn(t, e, i, n, r, a) {
        rt.call(this), void 0 === n && (n = 16776960), void 0 === i && (i = 1), void 0 === r && (r = .2 * i), void 0 === a && (a = .2 * r), void 0 === Gr && ((Gr = new wt).addAttribute("position", new yt([0, 0, 0, 0, 1, 0], 3)), (Hr = new Je(0, .5, 1, 5, 1)).translate(0, -.5, 0)), this.position.copy(e), this.line = new ce(Gr, new se({
            color: n
        })), this.line.matrixAutoUpdate = !1, this.add(this.line), this.cone = new Ct(Hr, new At({
            color: n
        })), this.cone.matrixAutoUpdate = !1, this.add(this.cone), this.setDirection(t), this.setLength(i, r, a)
    }

    function Zn(t) {
        var e = [0, 0, 0, t = t || 1, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 0, t];
        (t = new wt).addAttribute("position", new yt(e, 3)), t.addAttribute("color", new yt([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1], 3)), e = new se({
            vertexColors: 2
        }), he.call(this, t, e)
    }

    function Jn() {
        var t = 0,
            e = 0,
            i = 0,
            n = 0;
        return {
            initCatmullRom: function(r, a, o, s, c) {
                t = a, e = r = c * (o - r), i = -3 * a + 3 * o - 2 * r - (s = c * (s - a)), n = 2 * a - 2 * o + r + s
            },
            initNonuniformCatmullRom: function(r, a, o, s, c, h, l) {
                t = a, e = r = ((a - r) / c - (o - r) / (c + h) + (o - a) / h) * h, i = -3 * a + 3 * o - 2 * r - (s = ((o - a) / h - (s - a) / (h + l) + (s - o) / l) * h), n = 2 * a - 2 * o + r + s
            },
            calc: function(r) {
                var a = r * r;
                return t + e * r + i * a + n * a * r
            }
        }
    }

    function Qn(t) {
        this.arcLengthDivisions = 200, 2 > t.length && console.warn("THREE.CatmullRomCurve3: Points array needs at least two entries."), this.points = t || [], this.closed = !1
    }

    function Kn(t, e, i, n) {
        this.arcLengthDivisions = 200, this.v0 = t, this.v1 = e, this.v2 = i, this.v3 = n
    }

    function $n(t, e, i) {
        this.arcLengthDivisions = 200, this.v0 = t, this.v1 = e, this.v2 = i
    }

    function tr(t, e) {
        this.arcLengthDivisions = 200, this.v1 = t, this.v2 = e
    }

    function er(t, e, i, n, r, a) {
        Ki.call(this, t, e, i, i, n, r, a)
    }

    function ir(t) {
        console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Qn.call(this, t), this.type = "catmullrom", this.closed = !0
    }

    function nr(t) {
        console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."), Qn.call(this, t), this.type = "catmullrom"
    }

    function rr(t) {
        console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."), Qn.call(this, t), this.type = "catmullrom"
    }
    void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)), void 0 === Number.isInteger && (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    }), void 0 === Math.sign && (Math.sign = function(t) {
        return 0 > t ? -1 : 0 < t ? 1 : +t
    }), void 0 === Function.prototype.name && Object.defineProperty(Function.prototype, "name", {
        get: function() {
            return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]
        }
    }), void 0 === Object.assign && (Object.assign = function(t) {
        if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
        for (var e = Object(t), i = 1; i < arguments.length; i++) {
            var n = arguments[i];
            if (void 0 !== n && null !== n)
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    }), Object.assign(e.prototype, {
        addEventListener: function(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            var i = this._listeners;
            void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e)
        },
        hasEventListener: function(t, e) {
            if (void 0 === this._listeners) return !1;
            var i = this._listeners;
            return void 0 !== i[t] && -1 !== i[t].indexOf(e)
        },
        removeEventListener: function(t, e) {
            void 0 !== this._listeners && (void 0 !== (t = this._listeners[t]) && (-1 !== (e = t.indexOf(e)) && t.splice(e, 1)))
        },
        dispatchEvent: function(t) {
            if (void 0 !== this._listeners && void 0 !== (e = this._listeners[t.type])) {
                t.target = this;
                for (var e, i = 0, n = (e = e.slice(0)).length; i < n; i++) e[i].call(this, t)
            }
        }
    });
    var ar, or, sr, cr, hr = {
        DEG2RAD: Math.PI / 180,
        RAD2DEG: 180 / Math.PI,
        generateUUID: (or = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), sr = Array(36), cr = 0, function() {
            for (var t = 0; 36 > t; t++) 8 === t || 13 === t || 18 === t || 23 === t ? sr[t] = "-" : 14 === t ? sr[t] = "4" : (2 >= cr && (cr = 33554432 + 16777216 * Math.random() | 0), ar = 15 & cr, cr >>= 4, sr[t] = or[19 === t ? 3 & ar | 8 : ar]);
            return sr.join("")
        }),
        clamp: function(t, e, i) {
            return Math.max(e, Math.min(i, t))
        },
        euclideanModulo: function(t, e) {
            return (t % e + e) % e
        },
        mapLinear: function(t, e, i, n, r) {
            return n + (t - e) * (r - n) / (i - e)
        },
        lerp: function(t, e, i) {
            return (1 - i) * t + i * e
        },
        smoothstep: function(t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * (3 - 2 * t)
        },
        smootherstep: function(t, e, i) {
            return t <= e ? 0 : t >= i ? 1 : (t = (t - e) / (i - e)) * t * t * (t * (6 * t - 15) + 10)
        },
        randInt: function(t, e) {
            return t + Math.floor(Math.random() * (e - t + 1))
        },
        randFloat: function(t, e) {
            return t + Math.random() * (e - t)
        },
        randFloatSpread: function(t) {
            return t * (.5 - Math.random())
        },
        degToRad: function(t) {
            return t * hr.DEG2RAD
        },
        radToDeg: function(t) {
            return t * hr.RAD2DEG
        },
        isPowerOfTwo: function(t) {
            return 0 == (t & t - 1) && 0 !== t
        },
        nearestPowerOfTwo: function(t) {
            return Math.pow(2, Math.round(Math.log(t) / Math.LN2))
        },
        nextPowerOfTwo: function(t) {
            return t--, t |= t >> 1, t |= t >> 2, t |= t >> 4, t |= t >> 8, t |= t >> 16, ++t
        }
    };
    Object.defineProperties(i.prototype, {
        width: {
            get: function() {
                return this.x
            },
            set: function(t) {
                this.x = t
            }
        },
        height: {
            get: function() {
                return this.y
            },
            set: function(t) {
                this.y = t
            }
        }
    }), Object.assign(i.prototype, {
        isVector2: !0,
        set: function(t, e) {
            return this.x = t, this.y = e, this
        },
        setScalar: function(t) {
            return this.y = this.x = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this
        },
        multiply: function(t) {
            return this.x *= t.x, this.y *= t.y, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this
        },
        clampScalar: function() {
            var t = new i,
                e = new i;
            return function(i, n) {
                return t.set(i, i), e.set(n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        angle: function() {
            var t = Math.atan2(this.y, this.x);
            return 0 > t && (t += 2 * Math.PI), t
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x;
            return e * e + (t = this.y - t.y) * t
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this
        },
        lerpVectors: function(t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t
        },
        fromBufferAttribute: function(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this
        },
        rotateAround: function(t, e) {
            var i = Math.cos(e);
            e = Math.sin(e);
            var n = this.x - t.x,
                r = this.y - t.y;
            return this.x = n * i - r * e + t.x, this.y = n * e + r * i + t.y, this
        }
    });
    var lr = 0;
    n.DEFAULT_IMAGE = void 0, n.DEFAULT_MAPPING = 300, Object.defineProperty(n.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), Object.assign(n.prototype, e.prototype, {
        constructor: n,
        isTexture: !0,
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.name = t.name, this.image = t.image, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.type = t.type, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.generateMipmaps = t.generateMipmaps, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.encoding = t.encoding, this
        },
        toJSON: function(t) {
            if (void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
            var e = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                wrap: [this.wrapS, this.wrapT],
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY
            };
            if (void 0 !== this.image) {
                var i = this.image;
                if (void 0 === i.uuid && (i.uuid = hr.generateUUID()), void 0 === t.images[i.uuid]) {
                    var n = t.images,
                        r = i.uuid,
                        a = i.uuid;
                    if (i instanceof HTMLCanvasElement) var o = i;
                    else {
                        (o = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")).width = i.width, o.height = i.height;
                        var s = o.getContext("2d");
                        i instanceof ImageData ? s.putImageData(i, 0, 0) : s.drawImage(i, 0, 0, i.width, i.height)
                    }
                    o = 2048 < o.width || 2048 < o.height ? o.toDataURL("image/jpeg", .6) : o.toDataURL("image/png"), n[r] = {
                        uuid: a,
                        url: o
                    }
                }
                e.image = i.uuid
            }
            return t.textures[this.uuid] = e
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        },
        transformUv: function(t) {
            if (300 === this.mapping) {
                if (t.multiply(this.repeat), t.add(this.offset), 0 > t.x || 1 < t.x) switch (this.wrapS) {
                    case 1e3:
                        t.x -= Math.floor(t.x);
                        break;
                    case 1001:
                        t.x = 0 > t.x ? 0 : 1;
                        break;
                    case 1002:
                        t.x = 1 === Math.abs(Math.floor(t.x) % 2) ? Math.ceil(t.x) - t.x : t.x - Math.floor(t.x)
                }
                if (0 > t.y || 1 < t.y) switch (this.wrapT) {
                    case 1e3:
                        t.y -= Math.floor(t.y);
                        break;
                    case 1001:
                        t.y = 0 > t.y ? 0 : 1;
                        break;
                    case 1002:
                        t.y = 1 === Math.abs(Math.floor(t.y) % 2) ? Math.ceil(t.y) - t.y : t.y - Math.floor(t.y)
                }
                this.flipY && (t.y = 1 - t.y)
            }
        }
    }), Object.assign(r.prototype, {
        isVector4: !0,
        set: function(t, e, i, n) {
            return this.x = t, this.y = e, this.z = i, this.w = n, this
        },
        setScalar: function(t) {
            return this.w = this.z = this.y = this.x = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setW: function(t) {
            return this.w = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this.w += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = this.w;
            return t = t.elements, this.x = t[0] * e + t[4] * i + t[8] * n + t[12] * r, this.y = t[1] * e + t[5] * i + t[9] * n + t[13] * r, this.z = t[2] * e + t[6] * i + t[10] * n + t[14] * r, this.w = t[3] * e + t[7] * i + t[11] * n + t[15] * r, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        setAxisAngleFromQuaternion: function(t) {
            this.w = 2 * Math.acos(t.w);
            var e = Math.sqrt(1 - t.w * t.w);
            return 1e-4 > e ? (this.x = 1, this.z = this.y = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this
        },
        setAxisAngleFromRotationMatrix: function(t) {
            var e = (t = t.elements)[0],
                i = t[4],
                n = t[8],
                r = t[1],
                a = t[5],
                o = t[9],
                s = t[2],
                c = t[6],
                h = t[10];
            return .01 > Math.abs(i - r) && .01 > Math.abs(n - s) && .01 > Math.abs(o - c) ? .1 > Math.abs(i + r) && .1 > Math.abs(n + s) && .1 > Math.abs(o + c) && .1 > Math.abs(e + a + h - 3) ? (this.set(1, 0, 0, 0), this) : (t = Math.PI, h = (h + 1) / 2, i = (i + r) / 4, n = (n + s) / 4, o = (o + c) / 4, (e = (e + 1) / 2) > (a = (a + 1) / 2) && e > h ? .01 > e ? (c = 0, i = s = .707106781) : (s = i / (c = Math.sqrt(e)), i = n / c) : a > h ? .01 > a ? (c = .707106781, s = 0, i = .707106781) : (c = i / (s = Math.sqrt(a)), i = o / s) : .01 > h ? (s = c = .707106781, i = 0) : (c = n / (i = Math.sqrt(h)), s = o / i), this.set(c, s, i, t), this) : (t = Math.sqrt((c - o) * (c - o) + (n - s) * (n - s) + (r - i) * (r - i)), .001 > Math.abs(t) && (t = 1), this.x = (c - o) / t, this.y = (n - s) / t, this.z = (r - i) / t, this.w = Math.acos((e + a + h - 1) / 2), this)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this.w = Math.max(t.w, Math.min(e.w, this.w)), this
        },
        clampScalar: function() {
            var t, e;
            return function(i, n) {
                return void 0 === t && (t = new r, e = new r), t.set(i, i, i, i), e.set(n, n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this
        },
        lerpVectors: function(t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t
        },
        fromBufferAttribute: function(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this
        }
    }), Object.assign(a.prototype, e.prototype, {
        isWebGLRenderTarget: !0,
        setSize: function(t, e) {
            this.width === t && this.height === e || (this.width = t, this.height = e, this.dispose()), this.viewport.set(0, 0, t, e), this.scissor.set(0, 0, t, e)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.width = t.width, this.height = t.height, this.viewport.copy(t.viewport), this.texture = t.texture.clone(), this.depthBuffer = t.depthBuffer, this.stencilBuffer = t.stencilBuffer, this.depthTexture = t.depthTexture, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), o.prototype = Object.create(a.prototype), o.prototype.constructor = o, o.prototype.isWebGLRenderTargetCube = !0, Object.assign(s, {
        slerp: function(t, e, i, n) {
            return i.copy(t).slerp(e, n)
        },
        slerpFlat: function(t, e, i, n, r, a, o) {
            var s = i[n + 0],
                c = i[n + 1],
                h = i[n + 2];
            i = i[n + 3], n = r[a + 0];
            var l = r[a + 1],
                u = r[a + 2];
            if (i !== (r = r[a + 3]) || s !== n || c !== l || h !== u) {
                a = 1 - o;
                var p = s * n + c * l + h * u + i * r,
                    d = 0 <= p ? 1 : -1,
                    f = 1 - p * p;
                f > Number.EPSILON && (f = Math.sqrt(f), p = Math.atan2(f, p * d), a = Math.sin(a * p) / f, o = Math.sin(o * p) / f), s = s * a + n * (d *= o), c = c * a + l * d, h = h * a + u * d, i = i * a + r * d, a === 1 - o && (s *= o = 1 / Math.sqrt(s * s + c * c + h * h + i * i), c *= o, h *= o, i *= o)
            }
            t[e] = s, t[e + 1] = c, t[e + 2] = h, t[e + 3] = i
        }
    }), Object.defineProperties(s.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t, this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t, this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t, this.onChangeCallback()
            }
        },
        w: {
            get: function() {
                return this._w
            },
            set: function(t) {
                this._w = t, this.onChangeCallback()
            }
        }
    }), Object.assign(s.prototype, {
        set: function(t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._w = n, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        },
        copy: function(t) {
            return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this.onChangeCallback(), this
        },
        setFromEuler: function(t, e) {
            if (!t || !t.isEuler) throw Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            var i = t._x,
                n = t._y,
                r = t._z;
            t = t.order;
            var a = Math.cos,
                o = Math.sin,
                s = a(i / 2),
                c = a(n / 2);
            a = a(r / 2), i = o(i / 2), n = o(n / 2), r = o(r / 2);
            return "XYZ" === t ? (this._x = i * c * a + s * n * r, this._y = s * n * a - i * c * r, this._z = s * c * r + i * n * a, this._w = s * c * a - i * n * r) : "YXZ" === t ? (this._x = i * c * a + s * n * r, this._y = s * n * a - i * c * r, this._z = s * c * r - i * n * a, this._w = s * c * a + i * n * r) : "ZXY" === t ? (this._x = i * c * a - s * n * r, this._y = s * n * a + i * c * r, this._z = s * c * r + i * n * a, this._w = s * c * a - i * n * r) : "ZYX" === t ? (this._x = i * c * a - s * n * r, this._y = s * n * a + i * c * r, this._z = s * c * r - i * n * a, this._w = s * c * a + i * n * r) : "YZX" === t ? (this._x = i * c * a + s * n * r, this._y = s * n * a + i * c * r, this._z = s * c * r - i * n * a, this._w = s * c * a - i * n * r) : "XZY" === t && (this._x = i * c * a - s * n * r, this._y = s * n * a - i * c * r, this._z = s * c * r + i * n * a, this._w = s * c * a + i * n * r), !1 !== e && this.onChangeCallback(), this
        },
        setFromAxisAngle: function(t, e) {
            e /= 2;
            var i = Math.sin(e);
            return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(e), this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(t) {
            var e = (i = t.elements)[0];
            t = i[4];
            var i, n = i[8],
                r = i[1],
                a = i[5],
                o = i[9],
                s = i[2],
                c = i[6],
                h = e + a + (i = i[10]);
            return 0 < h ? (e = .5 / Math.sqrt(h + 1), this._w = .25 / e, this._x = (c - o) * e, this._y = (n - s) * e, this._z = (r - t) * e) : e > a && e > i ? (e = 2 * Math.sqrt(1 + e - a - i), this._w = (c - o) / e, this._x = .25 * e, this._y = (t + r) / e, this._z = (n + s) / e) : a > i ? (e = 2 * Math.sqrt(1 + a - e - i), this._w = (n - s) / e, this._x = (t + r) / e, this._y = .25 * e, this._z = (o + c) / e) : (e = 2 * Math.sqrt(1 + i - e - a), this._w = (r - t) / e, this._x = (n + s) / e, this._y = (o + c) / e, this._z = .25 * e), this.onChangeCallback(), this
        },
        setFromUnitVectors: function() {
            var t, e = new c;
            return function(i, n) {
                return void 0 === e && (e = new c), 1e-6 > (t = i.dot(n) + 1) ? (t = 0, Math.abs(i.x) > Math.abs(i.z) ? e.set(-i.y, i.x, 0) : e.set(0, -i.z, i.y)) : e.crossVectors(i, n), this._x = e.x, this._y = e.y, this._z = e.z, this._w = t, this.normalize()
            }
        }(),
        inverse: function() {
            return this.conjugate().normalize()
        },
        conjugate: function() {
            return this._x *= -1, this._y *= -1, this._z *= -1, this.onChangeCallback(), this
        },
        dot: function(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        },
        lengthSq: function() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        },
        length: function() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        },
        normalize: function() {
            var t = this.length();
            return 0 === t ? (this._z = this._y = this._x = 0, this._w = 1) : (t = 1 / t, this._x *= t, this._y *= t, this._z *= t, this._w *= t), this.onChangeCallback(), this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        },
        premultiply: function(t) {
            return this.multiplyQuaternions(t, this)
        },
        multiplyQuaternions: function(t, e) {
            var i = t._x,
                n = t._y,
                r = t._z;
            t = t._w;
            var a = e._x,
                o = e._y,
                s = e._z;
            return e = e._w, this._x = i * e + t * a + n * s - r * o, this._y = n * e + t * o + r * a - i * s, this._z = r * e + t * s + i * o - n * a, this._w = t * e - i * a - n * o - r * s, this.onChangeCallback(), this
        },
        slerp: function(t, e) {
            if (0 === e) return this;
            if (1 === e) return this.copy(t);
            var i = this._x,
                n = this._y,
                r = this._z,
                a = this._w;
            if (0 > (s = a * t._w + i * t._x + n * t._y + r * t._z) ? (this._w = -t._w, this._x = -t._x, this._y = -t._y, this._z = -t._z, s = -s) : this.copy(t), 1 <= s) return this._w = a, this._x = i, this._y = n, this._z = r, this;
            if (t = Math.sqrt(1 - s * s), .001 > Math.abs(t)) return this._w = .5 * (a + this._w), this._x = .5 * (i + this._x), this._y = .5 * (n + this._y), this._z = .5 * (r + this._z), this;
            var o = Math.atan2(t, s),
                s = Math.sin((1 - e) * o) / t;
            return e = Math.sin(e * o) / t, this._w = a * s + this._w * e, this._x = i * s + this._x * e, this._y = n * s + this._y * e, this._z = r * s + this._z * e, this.onChangeCallback(), this
        },
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this.onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t
        },
        onChange: function(t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function() {}
    }), Object.assign(c.prototype, {
        isVector3: !0,
        set: function(t, e, i) {
            return this.x = t, this.y = e, this.z = i, this
        },
        setScalar: function(t) {
            return this.z = this.y = this.x = t, this
        },
        setX: function(t) {
            return this.x = t, this
        },
        setY: function(t) {
            return this.y = t, this
        },
        setZ: function(t) {
            return this.z = t, this
        },
        setComponent: function(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw Error("index is out of range: " + t)
            }
            return this
        },
        getComponent: function(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw Error("index is out of range: " + t)
            }
        },
        clone: function() {
            return new this.constructor(this.x, this.y, this.z)
        },
        copy: function(t) {
            return this.x = t.x, this.y = t.y, this.z = t.z, this
        },
        add: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(t, e)) : (this.x += t.x, this.y += t.y, this.z += t.z, this)
        },
        addScalar: function(t) {
            return this.x += t, this.y += t, this.z += t, this
        },
        addVectors: function(t, e) {
            return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this
        },
        addScaledVector: function(t, e) {
            return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this
        },
        sub: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(t, e)) : (this.x -= t.x, this.y -= t.y, this.z -= t.z, this)
        },
        subScalar: function(t) {
            return this.x -= t, this.y -= t, this.z -= t, this
        },
        subVectors: function(t, e) {
            return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this
        },
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(t, e)) : (this.x *= t.x, this.y *= t.y, this.z *= t.z, this)
        },
        multiplyScalar: function(t) {
            return this.x *= t, this.y *= t, this.z *= t, this
        },
        multiplyVectors: function(t, e) {
            return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this
        },
        applyEuler: function() {
            var t = new s;
            return function(e) {
                return e && e.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."), this.applyQuaternion(t.setFromEuler(e))
            }
        }(),
        applyAxisAngle: function() {
            var t = new s;
            return function(e, i) {
                return this.applyQuaternion(t.setFromAxisAngle(e, i))
            }
        }(),
        applyMatrix3: function(t) {
            var e = this.x,
                i = this.y,
                n = this.z;
            return t = t.elements, this.x = t[0] * e + t[3] * i + t[6] * n, this.y = t[1] * e + t[4] * i + t[7] * n, this.z = t[2] * e + t[5] * i + t[8] * n, this
        },
        applyMatrix4: function(t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = 1 / ((t = t.elements)[3] * e + t[7] * i + t[11] * n + t[15]);
            return this.x = (t[0] * e + t[4] * i + t[8] * n + t[12]) * r, this.y = (t[1] * e + t[5] * i + t[9] * n + t[13]) * r, this.z = (t[2] * e + t[6] * i + t[10] * n + t[14]) * r, this
        },
        applyQuaternion: function(t) {
            var e = this.x,
                i = this.y,
                n = this.z,
                r = t.x,
                a = t.y,
                o = t.z,
                s = (t = t.w) * e + a * n - o * i,
                c = t * i + o * e - r * n,
                h = t * n + r * i - a * e;
            e = -r * e - a * i - o * n;
            return this.x = s * t + e * -r + c * -o - h * -a, this.y = c * t + e * -a + h * -r - s * -o, this.z = h * t + e * -o + s * -a - c * -r, this
        },
        project: function() {
            var t = new h;
            return function(e) {
                return t.multiplyMatrices(e.projectionMatrix, t.getInverse(e.matrixWorld)), this.applyMatrix4(t)
            }
        }(),
        unproject: function() {
            var t = new h;
            return function(e) {
                return t.multiplyMatrices(e.matrixWorld, t.getInverse(e.projectionMatrix)), this.applyMatrix4(t)
            }
        }(),
        transformDirection: function(t) {
            var e = this.x,
                i = this.y,
                n = this.z;
            return t = t.elements, this.x = t[0] * e + t[4] * i + t[8] * n, this.y = t[1] * e + t[5] * i + t[9] * n, this.z = t[2] * e + t[6] * i + t[10] * n, this.normalize()
        },
        divide: function(t) {
            return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
        },
        divideScalar: function(t) {
            return this.multiplyScalar(1 / t)
        },
        min: function(t) {
            return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this
        },
        max: function(t) {
            return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this
        },
        clamp: function(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)), this.y = Math.max(t.y, Math.min(e.y, this.y)), this.z = Math.max(t.z, Math.min(e.z, this.z)), this
        },
        clampScalar: function() {
            var t = new c,
                e = new c;
            return function(i, n) {
                return t.set(i, i, i), e.set(n, n, n), this.clamp(t, e)
            }
        }(),
        clampLength: function(t, e) {
            var i = this.length();
            return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)))
        },
        floor: function() {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this
        },
        ceil: function() {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this
        },
        round: function() {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this
        },
        roundToZero: function() {
            return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x), this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y), this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z), this
        },
        negate: function() {
            return this.x = -this.x, this.y = -this.y, this.z = -this.z, this
        },
        dot: function(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        },
        lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        },
        length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        },
        lengthManhattan: function() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        },
        normalize: function() {
            return this.divideScalar(this.length() || 1)
        },
        setLength: function(t) {
            return this.normalize().multiplyScalar(t)
        },
        lerp: function(t, e) {
            return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this
        },
        lerpVectors: function(t, e, i) {
            return this.subVectors(e, t).multiplyScalar(i).add(t)
        },
        cross: function(t, e) {
            if (void 0 !== e) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."), this.crossVectors(t, e);
            e = this.x;
            var i = this.y,
                n = this.z;
            return this.x = i * t.z - n * t.y, this.y = n * t.x - e * t.z, this.z = e * t.y - i * t.x, this
        },
        crossVectors: function(t, e) {
            var i = t.x,
                n = t.y;
            t = t.z;
            var r = e.x,
                a = e.y;
            return e = e.z, this.x = n * e - t * a, this.y = t * r - i * e, this.z = i * a - n * r, this
        },
        projectOnVector: function(t) {
            var e = t.dot(this) / t.lengthSq();
            return this.copy(t).multiplyScalar(e)
        },
        projectOnPlane: function() {
            var t = new c;
            return function(e) {
                return t.copy(this).projectOnVector(e), this.sub(t)
            }
        }(),
        reflect: function() {
            var t = new c;
            return function(e) {
                return this.sub(t.copy(e).multiplyScalar(2 * this.dot(e)))
            }
        }(),
        angleTo: function(t) {
            return t = this.dot(t) / Math.sqrt(this.lengthSq() * t.lengthSq()), Math.acos(hr.clamp(t, -1, 1))
        },
        distanceTo: function(t) {
            return Math.sqrt(this.distanceToSquared(t))
        },
        distanceToSquared: function(t) {
            var e = this.x - t.x,
                i = this.y - t.y;
            return e * e + i * i + (t = this.z - t.z) * t
        },
        distanceToManhattan: function(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        },
        setFromSpherical: function(t) {
            var e = Math.sin(t.phi) * t.radius;
            return this.x = e * Math.sin(t.theta), this.y = Math.cos(t.phi) * t.radius, this.z = e * Math.cos(t.theta), this
        },
        setFromCylindrical: function(t) {
            return this.x = t.radius * Math.sin(t.theta), this.y = t.y, this.z = t.radius * Math.cos(t.theta), this
        },
        setFromMatrixPosition: function(t) {
            return t = t.elements, this.x = t[12], this.y = t[13], this.z = t[14], this
        },
        setFromMatrixScale: function(t) {
            var e = this.setFromMatrixColumn(t, 0).length(),
                i = this.setFromMatrixColumn(t, 1).length();
            return t = this.setFromMatrixColumn(t, 2).length(), this.x = e, this.y = i, this.z = t, this
        },
        setFromMatrixColumn: function(t, e) {
            return this.fromArray(t.elements, 4 * e)
        },
        equals: function(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t
        },
        fromBufferAttribute: function(t, e, i) {
            return void 0 !== i && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."), this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this
        }
    }), Object.assign(h.prototype, {
        isMatrix4: !0,
        set: function(t, e, i, n, r, a, o, s, c, h, l, u, p, d, f, m) {
            var g = this.elements;
            return g[0] = t, g[4] = e, g[8] = i, g[12] = n, g[1] = r, g[5] = a, g[9] = o, g[13] = s, g[2] = c, g[6] = h, g[10] = l, g[14] = u, g[3] = p, g[7] = d, g[11] = f, g[15] = m, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new h).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements;
            return t = t.elements, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], e[9] = t[9], e[10] = t[10], e[11] = t[11], e[12] = t[12], e[13] = t[13], e[14] = t[14], e[15] = t[15], this
        },
        copyPosition: function(t) {
            var e = this.elements;
            return t = t.elements, e[12] = t[12], e[13] = t[13], e[14] = t[14], this
        },
        extractBasis: function(t, e, i) {
            return t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), i.setFromMatrixColumn(this, 2), this
        },
        makeBasis: function(t, e, i) {
            return this.set(t.x, e.x, i.x, 0, t.y, e.y, i.y, 0, t.z, e.z, i.z, 0, 0, 0, 0, 1), this
        },
        extractRotation: function() {
            var t = new c;
            return function(e) {
                var i = this.elements,
                    n = e.elements,
                    r = 1 / t.setFromMatrixColumn(e, 0).length(),
                    a = 1 / t.setFromMatrixColumn(e, 1).length();
                return e = 1 / t.setFromMatrixColumn(e, 2).length(), i[0] = n[0] * r, i[1] = n[1] * r, i[2] = n[2] * r, i[4] = n[4] * a, i[5] = n[5] * a, i[6] = n[6] * a, i[8] = n[8] * e, i[9] = n[9] * e, i[10] = n[10] * e, this
            }
        }(),
        makeRotationFromEuler: function(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            var e = this.elements,
                i = t.x,
                n = t.y,
                r = t.z,
                a = Math.cos(i),
                o = (i = Math.sin(i), Math.cos(n)),
                s = (n = Math.sin(n), Math.cos(r));
            r = Math.sin(r);
            if ("XYZ" === t.order) {
                var c = a * s,
                    h = a * r,
                    l = i * s;
                t = i * r, e[0] = o * s, e[4] = -o * r, e[8] = n, e[1] = h + l * n, e[5] = c - t * n, e[9] = -i * o, e[2] = t - c * n, e[6] = l + h * n, e[10] = a * o
            } else "YXZ" === t.order ? (c = o * s, h = o * r, l = n * s, t = n * r, e[0] = c + t * i, e[4] = l * i - h, e[8] = a * n, e[1] = a * r, e[5] = a * s, e[9] = -i, e[2] = h * i - l, e[6] = t + c * i, e[10] = a * o) : "ZXY" === t.order ? (c = o * s, h = o * r, l = n * s, t = n * r, e[0] = c - t * i, e[4] = -a * r, e[8] = l + h * i, e[1] = h + l * i, e[5] = a * s, e[9] = t - c * i, e[2] = -a * n, e[6] = i, e[10] = a * o) : "ZYX" === t.order ? (c = a * s, h = a * r, l = i * s, t = i * r, e[0] = o * s, e[4] = l * n - h, e[8] = c * n + t, e[1] = o * r, e[5] = t * n + c, e[9] = h * n - l, e[2] = -n, e[6] = i * o, e[10] = a * o) : "YZX" === t.order ? (c = a * o, h = a * n, l = i * o, t = i * n, e[0] = o * s, e[4] = t - c * r, e[8] = l * r + h, e[1] = r, e[5] = a * s, e[9] = -i * s, e[2] = -n * s, e[6] = h * r + l, e[10] = c - t * r) : "XZY" === t.order && (c = a * o, h = a * n, l = i * o, t = i * n, e[0] = o * s, e[4] = -r, e[8] = n * s, e[1] = c * r + t, e[5] = a * s, e[9] = h * r - l, e[2] = l * r - h, e[6] = i * s, e[10] = t * r + c);
            return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        makeRotationFromQuaternion: function(t) {
            var e = this.elements,
                i = t._x,
                n = t._y,
                r = t._z,
                a = t._w,
                o = r + r;
            t = i * (h = i + i);
            var s = i * (l = n + n),
                c = (i = i * o, n * l),
                h = (n = n * o, r = r * o, a * h),
                l = a * l;
            a *= o;
            return e[0] = 1 - (c + r), e[4] = s - a, e[8] = i + l, e[1] = s + a, e[5] = 1 - (t + r), e[9] = n - h, e[2] = i - l, e[6] = n + h, e[10] = 1 - (t + c), e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this
        },
        lookAt: function() {
            var t = new c,
                e = new c,
                i = new c;
            return function(n, r, a) {
                var o = this.elements;
                return i.subVectors(n, r), 0 === i.lengthSq() && (i.z = 1), i.normalize(), t.crossVectors(a, i), 0 === t.lengthSq() && (1 === Math.abs(a.z) ? i.x += 1e-4 : i.z += 1e-4, i.normalize(), t.crossVectors(a, i)), t.normalize(), e.crossVectors(i, t), o[0] = t.x, o[4] = e.x, o[8] = i.x, o[1] = t.y, o[5] = e.y, o[9] = i.y, o[2] = t.z, o[6] = e.z, o[10] = i.z, this
            }
        }(),
        multiply: function(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var i = t.elements,
                n = e.elements;
            e = this.elements, t = i[0];
            var r = i[4],
                a = i[8],
                o = i[12],
                s = i[1],
                c = i[5],
                h = i[9],
                l = i[13],
                u = i[2],
                p = i[6],
                d = i[10],
                f = i[14],
                m = i[3],
                g = i[7],
                v = i[11],
                y = (i = i[15], n[0]),
                x = n[4],
                b = n[8],
                _ = n[12],
                w = n[1],
                M = n[5],
                E = n[9],
                T = n[13],
                S = n[2],
                A = n[6],
                R = n[10],
                L = n[14],
                P = n[3],
                C = n[7],
                I = n[11];
            n = n[15];
            return e[0] = t * y + r * w + a * S + o * P, e[4] = t * x + r * M + a * A + o * C, e[8] = t * b + r * E + a * R + o * I, e[12] = t * _ + r * T + a * L + o * n, e[1] = s * y + c * w + h * S + l * P, e[5] = s * x + c * M + h * A + l * C, e[9] = s * b + c * E + h * R + l * I, e[13] = s * _ + c * T + h * L + l * n, e[2] = u * y + p * w + d * S + f * P, e[6] = u * x + p * M + d * A + f * C, e[10] = u * b + p * E + d * R + f * I, e[14] = u * _ + p * T + d * L + f * n, e[3] = m * y + g * w + v * S + i * P, e[7] = m * x + g * M + v * A + i * C, e[11] = m * b + g * E + v * R + i * I, e[15] = m * _ + g * T + v * L + i * n, this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this
        },
        applyToBufferAttribute: function() {
            var t = new c;
            return function(e) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix4(this), e.setXYZ(i, t.x, t.y, t.z);
                return e
            }
        }(),
        determinant: function() {
            var t = this.elements,
                e = t[0],
                i = t[4],
                n = t[8],
                r = t[12],
                a = t[1],
                o = t[5],
                s = t[9],
                c = t[13],
                h = t[2],
                l = t[6],
                u = t[10],
                p = t[14];
            return t[3] * (+r * s * l - n * c * l - r * o * u + i * c * u + n * o * p - i * s * p) + t[7] * (+e * s * p - e * c * u + r * a * u - n * a * p + n * c * h - r * s * h) + t[11] * (+e * c * l - e * o * p - r * a * l + i * a * p + r * o * h - i * c * h) + t[15] * (-n * o * h - e * s * l + e * o * u + n * a * l - i * a * u + i * s * h)
        },
        transpose: function() {
            var t = this.elements,
                e = t[1];
            return t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this
        },
        setPosition: function(t) {
            var e = this.elements;
            return e[12] = t.x, e[13] = t.y, e[14] = t.z, this
        },
        getInverse: function(t, e) {
            var i = this.elements;
            t = (n = t.elements)[0];
            var n, r = n[1],
                a = n[2],
                o = n[3],
                s = n[4],
                c = n[5],
                h = n[6],
                l = n[7],
                u = n[8],
                p = n[9],
                d = n[10],
                f = n[11],
                m = n[12],
                g = n[13],
                v = n[14],
                y = p * v * l - g * d * l + g * h * f - c * v * f - p * h * (n = n[15]) + c * d * n,
                x = m * d * l - u * v * l - m * h * f + s * v * f + u * h * n - s * d * n,
                b = u * g * l - m * p * l + m * c * f - s * g * f - u * c * n + s * p * n,
                _ = m * p * h - u * g * h - m * c * d + s * g * d + u * c * v - s * p * v,
                w = t * y + r * x + a * b + o * _;
            if (0 === w) {
                if (!0 === e) throw Error("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0");
                return console.warn("THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0"), this.identity()
            }
            return e = 1 / w, i[0] = y * e, i[1] = (g * d * o - p * v * o - g * a * f + r * v * f + p * a * n - r * d * n) * e, i[2] = (c * v * o - g * h * o + g * a * l - r * v * l - c * a * n + r * h * n) * e, i[3] = (p * h * o - c * d * o - p * a * l + r * d * l + c * a * f - r * h * f) * e, i[4] = x * e, i[5] = (u * v * o - m * d * o + m * a * f - t * v * f - u * a * n + t * d * n) * e, i[6] = (m * h * o - s * v * o - m * a * l + t * v * l + s * a * n - t * h * n) * e, i[7] = (s * d * o - u * h * o + u * a * l - t * d * l - s * a * f + t * h * f) * e, i[8] = b * e, i[9] = (m * p * o - u * g * o - m * r * f + t * g * f + u * r * n - t * p * n) * e, i[10] = (s * g * o - m * c * o + m * r * l - t * g * l - s * r * n + t * c * n) * e, i[11] = (u * c * o - s * p * o - u * r * l + t * p * l + s * r * f - t * c * f) * e, i[12] = _ * e, i[13] = (u * g * a - m * p * a + m * r * d - t * g * d - u * r * v + t * p * v) * e, i[14] = (m * c * a - s * g * a - m * r * h + t * g * h + s * r * v - t * c * v) * e, i[15] = (s * p * a - u * c * a + u * r * h - t * p * h - s * r * d + t * c * d) * e, this
        },
        scale: function(t) {
            var e = this.elements,
                i = t.x,
                n = t.y;
            return t = t.z, e[0] *= i, e[4] *= n, e[8] *= t, e[1] *= i, e[5] *= n, e[9] *= t, e[2] *= i, e[6] *= n, e[10] *= t, e[3] *= i, e[7] *= n, e[11] *= t, this
        },
        getMaxScaleOnAxis: function() {
            var t = this.elements;
            return Math.sqrt(Math.max(t[0] * t[0] + t[1] * t[1] + t[2] * t[2], t[4] * t[4] + t[5] * t[5] + t[6] * t[6], t[8] * t[8] + t[9] * t[9] + t[10] * t[10]))
        },
        makeTranslation: function(t, e, i) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, i, 0, 0, 0, 1), this
        },
        makeRotationX: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t), this.set(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1), this
        },
        makeRotationY: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t), this.set(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1), this
        },
        makeRotationZ: function(t) {
            var e = Math.cos(t);
            return t = Math.sin(t), this.set(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this
        },
        makeRotationAxis: function(t, e) {
            var i = Math.cos(e);
            e = Math.sin(e);
            var n = 1 - i,
                r = t.x,
                a = t.y;
            t = t.z;
            var o = n * r,
                s = n * a;
            return this.set(o * r + i, o * a - e * t, o * t + e * a, 0, o * a + e * t, s * a + i, s * t - e * r, 0, o * t - e * a, s * t + e * r, n * t * t + i, 0, 0, 0, 0, 1), this
        },
        makeScale: function(t, e, i) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this
        },
        makeShear: function(t, e, i) {
            return this.set(1, e, i, 0, t, 1, i, 0, t, e, 1, 0, 0, 0, 0, 1), this
        },
        compose: function(t, e, i) {
            return this.makeRotationFromQuaternion(e), this.scale(i), this.setPosition(t), this
        },
        decompose: function() {
            var t = new c,
                e = new h;
            return function(i, n, r) {
                var a = this.elements,
                    o = t.set(a[0], a[1], a[2]).length(),
                    s = t.set(a[4], a[5], a[6]).length(),
                    c = t.set(a[8], a[9], a[10]).length();
                0 > this.determinant() && (o = -o), i.x = a[12], i.y = a[13], i.z = a[14], e.copy(this), i = 1 / o;
                a = 1 / s;
                var h = 1 / c;
                return e.elements[0] *= i, e.elements[1] *= i, e.elements[2] *= i, e.elements[4] *= a, e.elements[5] *= a, e.elements[6] *= a, e.elements[8] *= h, e.elements[9] *= h, e.elements[10] *= h, n.setFromRotationMatrix(e), r.x = o, r.y = s, r.z = c, this
            }
        }(),
        makePerspective: function(t, e, i, n, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            var o = this.elements;
            return o[0] = 2 * r / (e - t), o[4] = 0, o[8] = (e + t) / (e - t), o[12] = 0, o[1] = 0, o[5] = 2 * r / (i - n), o[9] = (i + n) / (i - n), o[13] = 0, o[2] = 0, o[6] = 0, o[10] = -(a + r) / (a - r), o[14] = -2 * a * r / (a - r), o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this
        },
        makeOrthographic: function(t, e, i, n, r, a) {
            var o = this.elements,
                s = 1 / (e - t),
                c = 1 / (i - n),
                h = 1 / (a - r);
            return o[0] = 2 * s, o[4] = 0, o[8] = 0, o[12] = -(e + t) * s, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -(i + n) * c, o[2] = 0, o[6] = 0, o[10] = -2 * h, o[14] = -(a + r) * h, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this
        },
        equals: function(t) {
            var e = this.elements;
            t = t.elements;
            for (var i = 0; 16 > i; i++)
                if (e[i] !== t[i]) return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; 16 > i; i++) this.elements[i] = t[i + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t[e + 9] = i[9], t[e + 10] = i[10], t[e + 11] = i[11], t[e + 12] = i[12], t[e + 13] = i[13], t[e + 14] = i[14], t[e + 15] = i[15], t
        }
    }), l.prototype = Object.create(n.prototype), l.prototype.constructor = l, l.prototype.isDataTexture = !0, u.prototype = Object.create(n.prototype), u.prototype.constructor = u, u.prototype.isCubeTexture = !0, Object.defineProperty(u.prototype, "images", {
        get: function() {
            return this.image
        },
        set: function(t) {
            this.image = t
        }
    });
    var ur = new n,
        pr = new u,
        dr = [],
        fr = [],
        mr = new Float32Array(16),
        gr = new Float32Array(9);
    z.prototype.setValue = function(t, e) {
        for (var i = this.seq, n = 0, r = i.length; n !== r; ++n) {
            var a = i[n];
            a.setValue(t, e[a.id])
        }
    };
    var vr = /([\w\d_]+)(\])?(\[|\.)?/g;
    G.prototype.setValue = function(t, e, i) {
        void 0 !== (e = this.map[e]) && e.setValue(t, i, this.renderer)
    }, G.prototype.setOptional = function(t, e, i) {
        void 0 !== (e = e[i]) && this.setValue(t, i, e)
    }, G.upload = function(t, e, i, n) {
        for (var r = 0, a = e.length; r !== a; ++r) {
            var o = e[r],
                s = i[o.id];
            !1 !== s.needsUpdate && o.setValue(t, s.value, n)
        }
    }, G.seqWithValue = function(t, e) {
        for (var i = [], n = 0, r = t.length; n !== r; ++n) {
            var a = t[n];
            a.id in e && i.push(a)
        }
        return i
    };
    var yr = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        fuchsia: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    };
    Object.assign(H.prototype, {
        isColor: !0,
        r: 1,
        g: 1,
        b: 1,
        set: function(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t), this
        },
        setScalar: function(t) {
            return this.b = this.g = this.r = t, this
        },
        setHex: function(t) {
            return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, this
        },
        setRGB: function(t, e, i) {
            return this.r = t, this.g = e, this.b = i, this
        },
        setHSL: function() {
            function t(t, e, i) {
                return 0 > i && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : .5 > i ? e : i < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            return function(e, i, n) {
                return e = hr.euclideanModulo(e, 1), i = hr.clamp(i, 0, 1), n = hr.clamp(n, 0, 1), 0 === i ? this.r = this.g = this.b = n : (n = 2 * n - (i = .5 >= n ? n * (1 + i) : n + i - n * i), this.r = t(n, i, e + 1 / 3), this.g = t(n, i, e), this.b = t(n, i, e - 1 / 3)), this
            }
        }(),
        setStyle: function(t) {
            function e(e) {
                void 0 !== e && 1 > parseFloat(e) && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            var i;
            if (i = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(t)) {
                var n = i[2];
                switch (i[1]) {
                    case "rgb":
                    case "rgba":
                        if (i = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) return this.r = Math.min(255, parseInt(i[1], 10)) / 255, this.g = Math.min(255, parseInt(i[2], 10)) / 255, this.b = Math.min(255, parseInt(i[3], 10)) / 255, e(i[5]), this;
                        if (i = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) return this.r = Math.min(100, parseInt(i[1], 10)) / 100, this.g = Math.min(100, parseInt(i[2], 10)) / 100, this.b = Math.min(100, parseInt(i[3], 10)) / 100, e(i[5]), this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (i = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(n)) {
                            n = parseFloat(i[1]) / 360;
                            var r = parseInt(i[2], 10) / 100,
                                a = parseInt(i[3], 10) / 100;
                            return e(i[5]), this.setHSL(n, r, a)
                        }
                }
            } else if (i = /^\#([A-Fa-f0-9]+)$/.exec(t)) {
                if (3 === (n = (i = i[1]).length)) return this.r = parseInt(i.charAt(0) + i.charAt(0), 16) / 255, this.g = parseInt(i.charAt(1) + i.charAt(1), 16) / 255, this.b = parseInt(i.charAt(2) + i.charAt(2), 16) / 255, this;
                if (6 === n) return this.r = parseInt(i.charAt(0) + i.charAt(1), 16) / 255, this.g = parseInt(i.charAt(2) + i.charAt(3), 16) / 255, this.b = parseInt(i.charAt(4) + i.charAt(5), 16) / 255, this
            }
            return t && 0 < t.length && (void 0 !== (i = yr[t]) ? this.setHex(i) : console.warn("THREE.Color: Unknown color " + t)), this
        },
        clone: function() {
            return new this.constructor(this.r, this.g, this.b)
        },
        copy: function(t) {
            return this.r = t.r, this.g = t.g, this.b = t.b, this
        },
        copyGammaToLinear: function(t, e) {
            return void 0 === e && (e = 2), this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        copyLinearToGamma: function(t, e) {
            return void 0 === e && (e = 2), e = 0 < e ? 1 / e : 1, this.r = Math.pow(t.r, e), this.g = Math.pow(t.g, e), this.b = Math.pow(t.b, e), this
        },
        convertGammaToLinear: function() {
            var t = this.r,
                e = this.g,
                i = this.b;
            return this.r = t * t, this.g = e * e, this.b = i * i, this
        },
        convertLinearToGamma: function() {
            return this.r = Math.sqrt(this.r), this.g = Math.sqrt(this.g), this.b = Math.sqrt(this.b), this
        },
        getHex: function() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        },
        getHexString: function() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        },
        getHSL: function(t) {
            t = t || {
                h: 0,
                s: 0,
                l: 0
            };
            var e, i = this.r,
                n = this.g,
                r = this.b,
                a = Math.max(i, n, r),
                o = ((c = Math.min(i, n, r)) + a) / 2;
            if (c === a) c = e = 0;
            else {
                var s = a - c,
                    c = .5 >= o ? s / (a + c) : s / (2 - a - c);
                switch (a) {
                    case i:
                        e = (n - r) / s + (n < r ? 6 : 0);
                        break;
                    case n:
                        e = (r - i) / s + 2;
                        break;
                    case r:
                        e = (i - n) / s + 4
                }
                e /= 6
            }
            return t.h = e, t.s = c, t.l = o, t
        },
        getStyle: function() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        },
        offsetHSL: function(t, e, i) {
            var n = this.getHSL();
            return n.h += t, n.s += e, n.l += i, this.setHSL(n.h, n.s, n.l), this
        },
        add: function(t) {
            return this.r += t.r, this.g += t.g, this.b += t.b, this
        },
        addColors: function(t, e) {
            return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this
        },
        addScalar: function(t) {
            return this.r += t, this.g += t, this.b += t, this
        },
        sub: function(t) {
            return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this
        },
        multiply: function(t) {
            return this.r *= t.r, this.g *= t.g, this.b *= t.b, this
        },
        multiplyScalar: function(t) {
            return this.r *= t, this.g *= t, this.b *= t, this
        },
        lerp: function(t, e) {
            return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this
        },
        equals: function(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        },
        fromArray: function(t, e) {
            return void 0 === e && (e = 0), this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t
        },
        toJSON: function() {
            return this.getHex()
        }
    });
    var xr = {
            common: {
                diffuse: {
                    value: new H(15658734)
                },
                opacity: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new r(0, 0, 1, 1)
                },
                alphaMap: {
                    value: null
                }
            },
            specularmap: {
                specularMap: {
                    value: null
                }
            },
            envmap: {
                envMap: {
                    value: null
                },
                flipEnvMap: {
                    value: -1
                },
                reflectivity: {
                    value: 1
                },
                refractionRatio: {
                    value: .98
                }
            },
            aomap: {
                aoMap: {
                    value: null
                },
                aoMapIntensity: {
                    value: 1
                }
            },
            lightmap: {
                lightMap: {
                    value: null
                },
                lightMapIntensity: {
                    value: 1
                }
            },
            emissivemap: {
                emissiveMap: {
                    value: null
                }
            },
            bumpmap: {
                bumpMap: {
                    value: null
                },
                bumpScale: {
                    value: 1
                }
            },
            normalmap: {
                normalMap: {
                    value: null
                },
                normalScale: {
                    value: new i(1, 1)
                }
            },
            displacementmap: {
                displacementMap: {
                    value: null
                },
                displacementScale: {
                    value: 1
                },
                displacementBias: {
                    value: 0
                }
            },
            roughnessmap: {
                roughnessMap: {
                    value: null
                }
            },
            metalnessmap: {
                metalnessMap: {
                    value: null
                }
            },
            gradientmap: {
                gradientMap: {
                    value: null
                }
            },
            fog: {
                fogDensity: {
                    value: 25e-5
                },
                fogNear: {
                    value: 1
                },
                fogFar: {
                    value: 2e3
                },
                fogColor: {
                    value: new H(16777215)
                }
            },
            lights: {
                ambientLightColor: {
                    value: []
                },
                directionalLights: {
                    value: [],
                    properties: {
                        direction: {},
                        color: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                directionalShadowMap: {
                    value: []
                },
                directionalShadowMatrix: {
                    value: []
                },
                spotLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        direction: {},
                        distance: {},
                        coneCos: {},
                        penumbraCos: {},
                        decay: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {}
                    }
                },
                spotShadowMap: {
                    value: []
                },
                spotShadowMatrix: {
                    value: []
                },
                pointLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        decay: {},
                        distance: {},
                        shadow: {},
                        shadowBias: {},
                        shadowRadius: {},
                        shadowMapSize: {},
                        shadowCameraNear: {},
                        shadowCameraFar: {}
                    }
                },
                pointShadowMap: {
                    value: []
                },
                pointShadowMatrix: {
                    value: []
                },
                hemisphereLights: {
                    value: [],
                    properties: {
                        direction: {},
                        skyColor: {},
                        groundColor: {}
                    }
                },
                rectAreaLights: {
                    value: [],
                    properties: {
                        color: {},
                        position: {},
                        width: {},
                        height: {}
                    }
                }
            },
            points: {
                diffuse: {
                    value: new H(15658734)
                },
                opacity: {
                    value: 1
                },
                size: {
                    value: 1
                },
                scale: {
                    value: 1
                },
                map: {
                    value: null
                },
                offsetRepeat: {
                    value: new r(0, 0, 1, 1)
                }
            }
        },
        br = {
            merge: function(t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var n, r = this.clone(t[i]);
                    for (n in r) e[n] = r[n]
                }
                return e
            },
            clone: function(t) {
                var e, i = {};
                for (e in t)
                    for (var n in i[e] = {}, t[e]) {
                        var r = t[e][n];
                        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture) ? i[e][n] = r.clone() : Array.isArray(r) ? i[e][n] = r.slice() : i[e][n] = r
                    }
                return i
            }
        },
        _r = {
            alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n",
            alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n",
            alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n",
            aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n",
            aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
            begin_vertex: "\nvec3 transformed = vec3( position );\n",
            beginnormal_vertex: "\nvec3 objectNormal = vec3( normal );\n",
            bsdfs: "float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t}\n\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat theta = acos( dot( N, V ) );\n\tvec2 uv = vec2(\n\t\tsqrt( saturate( roughness ) ),\n\t\tsaturate( theta / ( 0.5 * PI ) ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.86267 + (0.49788 + 0.01436 * y ) * y;\n\tfloat b = 3.45068 + (4.18814 + y) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = (x > 0.0) ? v : 0.5 * inversesqrt( 1.0 - x * x ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tvec3 result = vec3( LTC_ClippedSphereFormFactor( vectorFormFactor ) );\n\treturn result;\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n",
            bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n",
            clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t\t\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\t\tvec4 plane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t\n\t#endif\n#endif\n",
            clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n",
            clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n",
            clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n",
            color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
            color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n",
            color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
            color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
            common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transpose( const in mat3 v ) {\n\tmat3 tmp;\n\ttmp[0] = vec3(v[0].x, v[1].x, v[2].x);\n\ttmp[1] = vec3(v[0].y, v[1].y, v[2].y);\n\ttmp[2] = vec3(v[0].z, v[1].z, v[2].z);\n\treturn tmp;\n}\n",
            cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n",
            defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n",
            displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n",
            displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n",
            emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n",
            emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n",
            encodings_fragment: "  gl_FragColor = linearToOutputTexel( gl_FragColor );\n",
            encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM            = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.x, max( value.g, value.b ) );\n\tfloat D      = max( maxRange / maxRGB, 1.0 );\n\tD            = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n\tXp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract(Le);\n\tvResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n\treturn vec4( max(vRGB, 0.0), 1.0 );\n}\n",
            envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n",
            envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n",
            envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n",
            envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n",
            fog_vertex: "\n#ifdef USE_FOG\nfogDepth = -mvPosition.z;\n#endif",
            fog_pars_vertex: "#ifdef USE_FOG\n  varying float fogDepth;\n#endif\n",
            fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n",
            fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif\n",
            gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif\n",
            lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n",
            lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
            lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n",
            lights_pars: "uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltcMat;\tuniform sampler2D ltcMag;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n",
            lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n",
            lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n",
            lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n",
            lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos - halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos + halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos + halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos - halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tfloat norm = texture2D( ltcMag, uv ).a;\n\t\tvec4 t = texture2D( ltcMat, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3(   1,   0, t.y ),\n\t\t\tvec3(   0, t.z,   0 ),\n\t\t\tvec3( t.w,   0, t.x )\n\t\t);\n\t\treflectedLight.directSpecular += lightColor * material.specularColor * norm * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n",
            lights_template: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n",
            logdepthbuf_fragment: "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif",
            logdepthbuf_pars_fragment: "#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n",
            logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif",
            logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n",
            map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n",
            map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n",
            map_particle_fragment: "#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n",
            map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n",
            metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif\n",
            metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
            morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n",
            morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
            morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n",
            normal_fragment: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n",
            normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n",
            packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n",
            premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n",
            project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;\n",
            dithering_fragment: "#if defined( DITHERING )\n  gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif\n",
            dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif\n",
            roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif\n",
            roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
            shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n",
            shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n",
            shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n",
            shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n",
            skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
            skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n",
            skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif\n",
            skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n",
            specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
            specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
            tonemapping_fragment: "#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n",
            tonemapping_pars_fragment: "#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n",
            uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
            uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n",
            uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif",
            uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
            uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
            uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
            worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif\n",
            cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n",
            cube_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n",
            depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n",
            distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}\n",
            distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}\n",
            equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n",
            equirect_vert: "varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n",
            linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}\n",
            meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}\n",
            meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}\n",
            normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}\n",
            points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n",
            points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}\n",
            shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n}\n",
            shadow_vert: "#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n"
        },
        wr = {
            basic: {
                uniforms: br.merge([xr.common, xr.specularmap, xr.envmap, xr.aomap, xr.lightmap, xr.fog]),
                vertexShader: _r.meshbasic_vert,
                fragmentShader: _r.meshbasic_frag
            },
            lambert: {
                uniforms: br.merge([xr.common, xr.specularmap, xr.envmap, xr.aomap, xr.lightmap, xr.emissivemap, xr.fog, xr.lights, {
                    emissive: {
                        value: new H(0)
                    }
                }]),
                vertexShader: _r.meshlambert_vert,
                fragmentShader: _r.meshlambert_frag
            },
            phong: {
                uniforms: br.merge([xr.common, xr.specularmap, xr.envmap, xr.aomap, xr.lightmap, xr.emissivemap, xr.bumpmap, xr.normalmap, xr.displacementmap, xr.gradientmap, xr.fog, xr.lights, {
                    emissive: {
                        value: new H(0)
                    },
                    specular: {
                        value: new H(1118481)
                    },
                    shininess: {
                        value: 30
                    }
                }]),
                vertexShader: _r.meshphong_vert,
                fragmentShader: _r.meshphong_frag
            },
            standard: {
                uniforms: br.merge([xr.common, xr.envmap, xr.aomap, xr.lightmap, xr.emissivemap, xr.bumpmap, xr.normalmap, xr.displacementmap, xr.roughnessmap, xr.metalnessmap, xr.fog, xr.lights, {
                    emissive: {
                        value: new H(0)
                    },
                    roughness: {
                        value: .5
                    },
                    metalness: {
                        value: .5
                    },
                    envMapIntensity: {
                        value: 1
                    }
                }]),
                vertexShader: _r.meshphysical_vert,
                fragmentShader: _r.meshphysical_frag
            },
            points: {
                uniforms: br.merge([xr.points, xr.fog]),
                vertexShader: _r.points_vert,
                fragmentShader: _r.points_frag
            },
            dashed: {
                uniforms: br.merge([xr.common, xr.fog, {
                    scale: {
                        value: 1
                    },
                    dashSize: {
                        value: 1
                    },
                    totalSize: {
                        value: 2
                    }
                }]),
                vertexShader: _r.linedashed_vert,
                fragmentShader: _r.linedashed_frag
            },
            depth: {
                uniforms: br.merge([xr.common, xr.displacementmap]),
                vertexShader: _r.depth_vert,
                fragmentShader: _r.depth_frag
            },
            normal: {
                uniforms: br.merge([xr.common, xr.bumpmap, xr.normalmap, xr.displacementmap, {
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: _r.normal_vert,
                fragmentShader: _r.normal_frag
            },
            cube: {
                uniforms: {
                    tCube: {
                        value: null
                    },
                    tFlip: {
                        value: -1
                    },
                    opacity: {
                        value: 1
                    }
                },
                vertexShader: _r.cube_vert,
                fragmentShader: _r.cube_frag
            },
            equirect: {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: _r.equirect_vert,
                fragmentShader: _r.equirect_frag
            },
            distanceRGBA: {
                uniforms: br.merge([xr.common, xr.displacementmap, {
                    referencePosition: {
                        value: new c
                    },
                    nearDistance: {
                        value: 1
                    },
                    farDistance: {
                        value: 1e3
                    }
                }]),
                vertexShader: _r.distanceRGBA_vert,
                fragmentShader: _r.distanceRGBA_frag
            },
            shadow: {
                uniforms: br.merge([xr.lights, {
                    color: {
                        value: new H(0)
                    },
                    opacity: {
                        value: 1
                    }
                }]),
                vertexShader: _r.shadow_vert,
                fragmentShader: _r.shadow_frag
            }
        };
    wr.physical = {
        uniforms: br.merge([wr.standard.uniforms, {
            clearCoat: {
                value: 0
            },
            clearCoatRoughness: {
                value: 0
            }
        }]),
        vertexShader: _r.meshphysical_vert,
        fragmentShader: _r.meshphysical_frag
    }, Object.assign(V.prototype, {
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new i;
            return function(e, i) {
                return i = t.copy(i).multiplyScalar(.5), this.min.copy(e).sub(i), this.max.copy(e).add(i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = 1 / 0, this.max.x = this.max.y = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y
        },
        getCenter: function(t) {
            return t = t || new i, this.isEmpty() ? t.set(0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return t = t || new i, this.isEmpty() ? t.set(0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y
        },
        getParameter: function(t, e) {
            return (e || new i).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y)
        },
        clampPoint: function(t, e) {
            return (e || new i).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new i;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }), j.prototype = Object.create(n.prototype), j.prototype.constructor = j;
    var Mr = 0;
    Object.assign(X.prototype, e.prototype, {
        isMaterial: !0,
        onBeforeCompile: function() {},
        setValues: function(t) {
            if (void 0 !== t)
                for (var e in t) {
                    var i = t[e];
                    if (void 0 === i) console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                    else if ("shading" === e) console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === i;
                    else {
                        var n = this[e];
                        void 0 === n ? console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.") : n && n.isColor ? n.set(i) : n && n.isVector3 && i && i.isVector3 ? n.copy(i) : this[e] = "overdraw" === e ? Number(i) : i
                    }
                }
        },
        toJSON: function(t) {
            function e(t) {
                var e, i = [];
                for (e in t) {
                    var n = t[e];
                    delete n.metadata, i.push(n)
                }
                return i
            }
            var i = void 0 === t;
            i && (t = {
                textures: {},
                images: {}
            });
            var n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            return n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearCoat && (n.clearCoat = this.clearCoat), void 0 !== this.clearCoatRoughness && (n.clearCoatRoughness = this.clearCoatRoughness), this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid, n.reflectivity = this.reflectivity), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid), void 0 !== this.size && (n.size = this.size), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), !0 === this.flatShading && (n.flatShading = this.flatShading), 0 !== this.side && (n.side = this.side), 0 !== this.vertexColors && (n.vertexColors = this.vertexColors), 1 > this.opacity && (n.opacity = this.opacity), !0 === this.transparent && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, !0 === this.dithering && (n.dithering = !0), 0 < this.alphaTest && (n.alphaTest = this.alphaTest), !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha), !0 === this.wireframe && (n.wireframe = this.wireframe), 1 < this.wireframeLinewidth && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), !0 === this.morphTargets && (n.morphTargets = !0), !0 === this.skinning && (n.skinning = !0), !1 === this.visible && (n.visible = !1), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), i && (i = e(t.textures), t = e(t.images), 0 < i.length && (n.textures = i), 0 < t.length && (n.images = t)), n
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.name = t.name, this.fog = t.fog, this.lights = t.lights, this.blending = t.blending, this.side = t.side, this.flatShading = t.flatShading, this.vertexColors = t.vertexColors, this.opacity = t.opacity, this.transparent = t.transparent, this.blendSrc = t.blendSrc, this.blendDst = t.blendDst, this.blendEquation = t.blendEquation, this.blendSrcAlpha = t.blendSrcAlpha, this.blendDstAlpha = t.blendDstAlpha, this.blendEquationAlpha = t.blendEquationAlpha, this.depthFunc = t.depthFunc, this.depthTest = t.depthTest, this.depthWrite = t.depthWrite, this.colorWrite = t.colorWrite, this.precision = t.precision, this.polygonOffset = t.polygonOffset, this.polygonOffsetFactor = t.polygonOffsetFactor, this.polygonOffsetUnits = t.polygonOffsetUnits, this.dithering = t.dithering, this.alphaTest = t.alphaTest, this.premultipliedAlpha = t.premultipliedAlpha, this.overdraw = t.overdraw, this.visible = t.visible, this.userData = JSON.parse(JSON.stringify(t.userData)), this.clipShadows = t.clipShadows, this.clipIntersection = t.clipIntersection;
            var e = null;
            if (null !== (t = t.clippingPlanes))
                for (var i = t.length, n = (e = Array(i), 0); n !== i; ++n) e[n] = t[n].clone();
            return this.clippingPlanes = e, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), q.prototype = Object.create(X.prototype), q.prototype.constructor = q, q.prototype.isShaderMaterial = !0, q.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.fragmentShader = t.fragmentShader, this.vertexShader = t.vertexShader, this.uniforms = br.clone(t.uniforms), this.defines = t.defines, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.lights = t.lights, this.clipping = t.clipping, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this.extensions = t.extensions, this
    }, q.prototype.toJSON = function(t) {
        return (t = X.prototype.toJSON.call(this, t)).uniforms = this.uniforms, t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t
    }, Y.prototype = Object.create(X.prototype), Y.prototype.constructor = Y, Y.prototype.isMeshDepthMaterial = !0, Y.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.depthPacking = t.depthPacking, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this
    }, Z.prototype = Object.create(X.prototype), Z.prototype.constructor = Z, Z.prototype.isMeshDistanceMaterial = !0, Z.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.referencePosition.copy(t.referencePosition), this.nearDistance = t.nearDistance, this.farDistance = t.farDistance, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.map = t.map, this.alphaMap = t.alphaMap, this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this
    }, Object.assign(J.prototype, {
        isBox3: !0,
        set: function(t, e) {
            return this.min.copy(t), this.max.copy(e), this
        },
        setFromArray: function(t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.length; s < c; s += 3) {
                var h = t[s],
                    l = t[s + 1],
                    u = t[s + 2];
                h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(e, i, n), this.max.set(r, a, o), this
        },
        setFromBufferAttribute: function(t) {
            for (var e = 1 / 0, i = 1 / 0, n = 1 / 0, r = -1 / 0, a = -1 / 0, o = -1 / 0, s = 0, c = t.count; s < c; s++) {
                var h = t.getX(s),
                    l = t.getY(s),
                    u = t.getZ(s);
                h < e && (e = h), l < i && (i = l), u < n && (n = u), h > r && (r = h), l > a && (a = l), u > o && (o = u)
            }
            return this.min.set(e, i, n), this.max.set(r, a, o), this
        },
        setFromPoints: function(t) {
            this.makeEmpty();
            for (var e = 0, i = t.length; e < i; e++) this.expandByPoint(t[e]);
            return this
        },
        setFromCenterAndSize: function() {
            var t = new c;
            return function(e, i) {
                return i = t.copy(i).multiplyScalar(.5), this.min.copy(e).sub(i), this.max.copy(e).add(i), this
            }
        }(),
        setFromObject: function(t) {
            return this.makeEmpty(), this.expandByObject(t)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.min.copy(t.min), this.max.copy(t.max), this
        },
        makeEmpty: function() {
            return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this
        },
        isEmpty: function() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        },
        getCenter: function(t) {
            return t = t || new c, this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        },
        getSize: function(t) {
            return t = t || new c, this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        },
        expandByPoint: function(t) {
            return this.min.min(t), this.max.max(t), this
        },
        expandByVector: function(t) {
            return this.min.sub(t), this.max.add(t), this
        },
        expandByScalar: function(t) {
            return this.min.addScalar(-t), this.max.addScalar(t), this
        },
        expandByObject: function() {
            var t = new c;
            return function(e) {
                var i = this;
                return e.updateMatrixWorld(!0), e.traverse(function(e) {
                    var n, r = e.geometry;
                    if (void 0 !== r)
                        if (r.isGeometry) {
                            var a = r.vertices;
                            for (r = 0, n = a.length; r < n; r++) t.copy(a[r]), t.applyMatrix4(e.matrixWorld), i.expandByPoint(t)
                        } else if (r.isBufferGeometry && void 0 !== (a = r.attributes.position))
                        for (r = 0, n = a.count; r < n; r++) t.fromBufferAttribute(a, r).applyMatrix4(e.matrixWorld), i.expandByPoint(t)
                }), this
            }
        }(),
        containsPoint: function(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        },
        containsBox: function(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        },
        getParameter: function(t, e) {
            return (e || new c).set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        },
        intersectsBox: function(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        },
        intersectsSphere: function() {
            var t = new c;
            return function(e) {
                return this.clampPoint(e.center, t), t.distanceToSquared(e.center) <= e.radius * e.radius
            }
        }(),
        intersectsPlane: function(t) {
            if (0 < t.normal.x) var e = t.normal.x * this.min.x,
                i = t.normal.x * this.max.x;
            else e = t.normal.x * this.max.x, i = t.normal.x * this.min.x;
            return 0 < t.normal.y ? (e += t.normal.y * this.min.y, i += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, i += t.normal.y * this.min.y), 0 < t.normal.z ? (e += t.normal.z * this.min.z, i += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, i += t.normal.z * this.min.z), e <= t.constant && i >= t.constant
        },
        clampPoint: function(t, e) {
            return (e || new c).copy(t).clamp(this.min, this.max)
        },
        distanceToPoint: function() {
            var t = new c;
            return function(e) {
                return t.copy(e).clamp(this.min, this.max).sub(e).length()
            }
        }(),
        getBoundingSphere: function() {
            var t = new c;
            return function(e) {
                return e = e || new Q, this.getCenter(e.center), e.radius = .5 * this.getSize(t).length(), e
            }
        }(),
        intersect: function(t) {
            return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this
        },
        union: function(t) {
            return this.min.min(t.min), this.max.max(t.max), this
        },
        applyMatrix4: function() {
            var t = [new c, new c, new c, new c, new c, new c, new c, new c];
            return function(e) {
                return this.isEmpty() ? this : (t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(t), this)
            }
        }(),
        translate: function(t) {
            return this.min.add(t), this.max.add(t), this
        },
        equals: function(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }), Object.assign(Q.prototype, {
        set: function(t, e) {
            return this.center.copy(t), this.radius = e, this
        },
        setFromPoints: function() {
            var t = new J;
            return function(e, i) {
                var n = this.center;
                void 0 !== i ? n.copy(i) : t.setFromPoints(e).getCenter(n);
                for (var r = i = 0, a = e.length; r < a; r++) i = Math.max(i, n.distanceToSquared(e[r]));
                return this.radius = Math.sqrt(i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.center.copy(t.center), this.radius = t.radius, this
        },
        empty: function() {
            return 0 >= this.radius
        },
        containsPoint: function(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        },
        distanceToPoint: function(t) {
            return t.distanceTo(this.center) - this.radius
        },
        intersectsSphere: function(t) {
            var e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        },
        intersectsBox: function(t) {
            return t.intersectsSphere(this)
        },
        intersectsPlane: function(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        },
        clampPoint: function(t, e) {
            var i = this.center.distanceToSquared(t);
            return (e = e || new c).copy(t), i > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e
        },
        getBoundingBox: function(t) {
            return (t = t || new J).set(this.center, this.center), t.expandByScalar(this.radius), t
        },
        applyMatrix4: function(t) {
            return this.center.applyMatrix4(t), this.radius *= t.getMaxScaleOnAxis(), this
        },
        translate: function(t) {
            return this.center.add(t), this
        },
        equals: function(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
    }), Object.assign(K.prototype, {
        isMatrix3: !0,
        set: function(t, e, i, n, r, a, o, s, c) {
            var h = this.elements;
            return h[0] = t, h[1] = n, h[2] = o, h[3] = e, h[4] = r, h[5] = s, h[6] = i, h[7] = a, h[8] = c, this
        },
        identity: function() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this
        },
        clone: function() {
            return (new this.constructor).fromArray(this.elements)
        },
        copy: function(t) {
            var e = this.elements;
            return t = t.elements, e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[3], e[4] = t[4], e[5] = t[5], e[6] = t[6], e[7] = t[7], e[8] = t[8], this
        },
        setFromMatrix4: function(t) {
            return t = t.elements, this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
        },
        applyToBufferAttribute: function() {
            var t = new c;
            return function(e) {
                for (var i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.applyMatrix3(this), e.setXYZ(i, t.x, t.y, t.z);
                return e
            }
        }(),
        multiply: function(t) {
            return this.multiplyMatrices(this, t)
        },
        premultiply: function(t) {
            return this.multiplyMatrices(t, this)
        },
        multiplyMatrices: function(t, e) {
            var i = t.elements,
                n = e.elements;
            e = this.elements, t = i[0];
            var r = i[3],
                a = i[6],
                o = i[1],
                s = i[4],
                c = i[7],
                h = i[2],
                l = i[5],
                u = (i = i[8], n[0]),
                p = n[3],
                d = n[6],
                f = n[1],
                m = n[4],
                g = n[7],
                v = n[2],
                y = n[5];
            n = n[8];
            return e[0] = t * u + r * f + a * v, e[3] = t * p + r * m + a * y, e[6] = t * d + r * g + a * n, e[1] = o * u + s * f + c * v, e[4] = o * p + s * m + c * y, e[7] = o * d + s * g + c * n, e[2] = h * u + l * f + i * v, e[5] = h * p + l * m + i * y, e[8] = h * d + l * g + i * n, this
        },
        multiplyScalar: function(t) {
            var e = this.elements;
            return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this
        },
        determinant: function() {
            var t, e = (t = this.elements)[0],
                i = t[1],
                n = t[2],
                r = t[3],
                a = t[4],
                o = t[5],
                s = t[6],
                c = t[7];
            return e * a * (t = t[8]) - e * o * c - i * r * t + i * o * s + n * r * c - n * a * s
        },
        getInverse: function(t, e) {
            t && t.isMatrix4 && console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
            var i = t.elements;
            t = this.elements;
            var n = i[0],
                r = i[1],
                a = i[2],
                o = i[3],
                s = i[4],
                c = i[5],
                h = i[6],
                l = i[7],
                u = (i = i[8]) * s - c * l,
                p = c * h - i * o,
                d = l * o - s * h,
                f = n * u + r * p + a * d;
            if (0 === f) {
                if (!0 === e) throw Error("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0");
                return console.warn("THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0"), this.identity()
            }
            return e = 1 / f, t[0] = u * e, t[1] = (a * l - i * r) * e, t[2] = (c * r - a * s) * e, t[3] = p * e, t[4] = (i * n - a * h) * e, t[5] = (a * o - c * n) * e, t[6] = d * e, t[7] = (r * h - l * n) * e, t[8] = (s * n - r * o) * e, this
        },
        transpose: function() {
            var t = this.elements,
                e = t[1];
            return t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this
        },
        getNormalMatrix: function(t) {
            return this.setFromMatrix4(t).getInverse(this).transpose()
        },
        transposeIntoArray: function(t) {
            var e = this.elements;
            return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this
        },
        equals: function(t) {
            var e = this.elements;
            t = t.elements;
            for (var i = 0; 9 > i; i++)
                if (e[i] !== t[i]) return !1;
            return !0
        },
        fromArray: function(t, e) {
            void 0 === e && (e = 0);
            for (var i = 0; 9 > i; i++) this.elements[i] = t[i + e];
            return this
        },
        toArray: function(t, e) {
            void 0 === t && (t = []), void 0 === e && (e = 0);
            var i = this.elements;
            return t[e] = i[0], t[e + 1] = i[1], t[e + 2] = i[2], t[e + 3] = i[3], t[e + 4] = i[4], t[e + 5] = i[5], t[e + 6] = i[6], t[e + 7] = i[7], t[e + 8] = i[8], t
        }
    }), Object.assign($.prototype, {
        set: function(t, e) {
            return this.normal.copy(t), this.constant = e, this
        },
        setComponents: function(t, e, i, n) {
            return this.normal.set(t, e, i), this.constant = n, this
        },
        setFromNormalAndCoplanarPoint: function(t, e) {
            return this.normal.copy(t), this.constant = -e.dot(this.normal), this
        },
        setFromCoplanarPoints: function() {
            var t = new c,
                e = new c;
            return function(i, n, r) {
                return n = t.subVectors(r, n).cross(e.subVectors(i, n)).normalize(), this.setFromNormalAndCoplanarPoint(n, i), this
            }
        }(),
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.normal.copy(t.normal), this.constant = t.constant, this
        },
        normalize: function() {
            var t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t), this.constant *= t, this
        },
        negate: function() {
            return this.constant *= -1, this.normal.negate(), this
        },
        distanceToPoint: function(t) {
            return this.normal.dot(t) + this.constant
        },
        distanceToSphere: function(t) {
            return this.distanceToPoint(t.center) - t.radius
        },
        projectPoint: function(t, e) {
            return (e || new c).copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        },
        intersectLine: function() {
            var t = new c;
            return function(e, i) {
                i = i || new c;
                var n = e.delta(t),
                    r = this.normal.dot(n);
                if (0 === r) {
                    if (0 === this.distanceToPoint(e.start)) return i.copy(e.start)
                } else if (!(0 > (r = -(e.start.dot(this.normal) + this.constant) / r) || 1 < r)) return i.copy(n).multiplyScalar(r).add(e.start)
            }
        }(),
        intersectsLine: function(t) {
            var e = this.distanceToPoint(t.start);
            return t = this.distanceToPoint(t.end), 0 > e && 0 < t || 0 > t && 0 < e
        },
        intersectsBox: function(t) {
            return t.intersectsPlane(this)
        },
        intersectsSphere: function(t) {
            return t.intersectsPlane(this)
        },
        coplanarPoint: function(t) {
            return (t || new c).copy(this.normal).multiplyScalar(-this.constant)
        },
        applyMatrix4: function() {
            var t = new c,
                e = new K;
            return function(i, n) {
                return n = n || e.getNormalMatrix(i), i = this.coplanarPoint(t).applyMatrix4(i), n = this.normal.applyMatrix3(n).normalize(), this.constant = -i.dot(n), this
            }
        }(),
        translate: function(t) {
            return this.constant -= t.dot(this.normal), this
        },
        equals: function(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
    }), Object.assign(tt.prototype, {
        set: function(t, e, i, n, r, a) {
            var o = this.planes;
            return o[0].copy(t), o[1].copy(e), o[2].copy(i), o[3].copy(n), o[4].copy(r), o[5].copy(a), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            for (var e = this.planes, i = 0; 6 > i; i++) e[i].copy(t.planes[i]);
            return this
        },
        setFromMatrix: function(t) {
            var e = this.planes;
            t = (g = t.elements)[0];
            var i = g[1],
                n = g[2],
                r = g[3],
                a = g[4],
                o = g[5],
                s = g[6],
                c = g[7],
                h = g[8],
                l = g[9],
                u = g[10],
                p = g[11],
                d = g[12],
                f = g[13],
                m = g[14],
                g = g[15];
            return e[0].setComponents(r - t, c - a, p - h, g - d).normalize(), e[1].setComponents(r + t, c + a, p + h, g + d).normalize(), e[2].setComponents(r + i, c + o, p + l, g + f).normalize(), e[3].setComponents(r - i, c - o, p - l, g - f).normalize(), e[4].setComponents(r - n, c - s, p - u, g - m).normalize(), e[5].setComponents(r + n, c + s, p + u, g + m).normalize(), this
        },
        intersectsObject: function() {
            var t = new Q;
            return function(e) {
                var i = e.geometry;
                return null === i.boundingSphere && i.computeBoundingSphere(), t.copy(i.boundingSphere).applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSprite: function() {
            var t = new Q;
            return function(e) {
                return t.center.set(0, 0, 0), t.radius = .7071067811865476, t.applyMatrix4(e.matrixWorld), this.intersectsSphere(t)
            }
        }(),
        intersectsSphere: function(t) {
            var e = this.planes,
                i = t.center;
            t = -t.radius;
            for (var n = 0; 6 > n; n++)
                if (e[n].distanceToPoint(i) < t) return !1;
            return !0
        },
        intersectsBox: function() {
            var t = new c,
                e = new c;
            return function(i) {
                for (var n = this.planes, r = 0; 6 > r; r++) {
                    var a = n[r];
                    t.x = 0 < a.normal.x ? i.min.x : i.max.x, e.x = 0 < a.normal.x ? i.max.x : i.min.x, t.y = 0 < a.normal.y ? i.min.y : i.max.y, e.y = 0 < a.normal.y ? i.max.y : i.min.y, t.z = 0 < a.normal.z ? i.min.z : i.max.z, e.z = 0 < a.normal.z ? i.max.z : i.min.z;
                    var o = a.distanceToPoint(t);
                    a = a.distanceToPoint(e);
                    if (0 > o && 0 > a) return !1
                }
                return !0
            }
        }(),
        containsPoint: function(t) {
            for (var e = this.planes, i = 0; 6 > i; i++)
                if (0 > e[i].distanceToPoint(t)) return !1;
            return !0
        }
    }), it.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "), it.DefaultOrder = "XYZ", Object.defineProperties(it.prototype, {
        x: {
            get: function() {
                return this._x
            },
            set: function(t) {
                this._x = t, this.onChangeCallback()
            }
        },
        y: {
            get: function() {
                return this._y
            },
            set: function(t) {
                this._y = t, this.onChangeCallback()
            }
        },
        z: {
            get: function() {
                return this._z
            },
            set: function(t) {
                this._z = t, this.onChangeCallback()
            }
        },
        order: {
            get: function() {
                return this._order
            },
            set: function(t) {
                this._order = t, this.onChangeCallback()
            }
        }
    }), Object.assign(it.prototype, {
        isEuler: !0,
        set: function(t, e, i, n) {
            return this._x = t, this._y = e, this._z = i, this._order = n || this._order, this.onChangeCallback(), this
        },
        clone: function() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        },
        copy: function(t) {
            return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this.onChangeCallback(), this
        },
        setFromRotationMatrix: function(t, e, i) {
            var n = hr.clamp;
            t = (u = t.elements)[0];
            var r = u[4],
                a = u[8],
                o = u[1],
                s = u[5],
                c = u[9],
                h = u[2],
                l = u[6],
                u = u[10];
            return "XYZ" === (e = e || this._order) ? (this._y = Math.asin(n(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2(-c, u), this._z = Math.atan2(-r, t)) : (this._x = Math.atan2(l, s), this._z = 0)) : "YXZ" === e ? (this._x = Math.asin(-n(c, -1, 1)), .99999 > Math.abs(c) ? (this._y = Math.atan2(a, u), this._z = Math.atan2(o, s)) : (this._y = Math.atan2(-h, t), this._z = 0)) : "ZXY" === e ? (this._x = Math.asin(n(l, -1, 1)), .99999 > Math.abs(l) ? (this._y = Math.atan2(-h, u), this._z = Math.atan2(-r, s)) : (this._y = 0, this._z = Math.atan2(o, t))) : "ZYX" === e ? (this._y = Math.asin(-n(h, -1, 1)), .99999 > Math.abs(h) ? (this._x = Math.atan2(l, u), this._z = Math.atan2(o, t)) : (this._x = 0, this._z = Math.atan2(-r, s))) : "YZX" === e ? (this._z = Math.asin(n(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(-c, s), this._y = Math.atan2(-h, t)) : (this._x = 0, this._y = Math.atan2(a, u))) : "XZY" === e ? (this._z = Math.asin(-n(r, -1, 1)), .99999 > Math.abs(r) ? (this._x = Math.atan2(l, s), this._y = Math.atan2(a, t)) : (this._x = Math.atan2(-c, u), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + e), this._order = e, !1 !== i && this.onChangeCallback(), this
        },
        setFromQuaternion: function() {
            var t = new h;
            return function(e, i, n) {
                return t.makeRotationFromQuaternion(e), this.setFromRotationMatrix(t, i, n)
            }
        }(),
        setFromVector3: function(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        },
        reorder: function() {
            var t = new s;
            return function(e) {
                return t.setFromEuler(this), this.setFromQuaternion(t, e)
            }
        }(),
        equals: function(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        },
        fromArray: function(t) {
            return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this.onChangeCallback(), this
        },
        toArray: function(t, e) {
            return void 0 === t && (t = []), void 0 === e && (e = 0), t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t
        },
        toVector3: function(t) {
            return t ? t.set(this._x, this._y, this._z) : new c(this._x, this._y, this._z)
        },
        onChange: function(t) {
            return this.onChangeCallback = t, this
        },
        onChangeCallback: function() {}
    }), Object.assign(nt.prototype, {
        set: function(t) {
            this.mask = 1 << t | 0
        },
        enable: function(t) {
            this.mask = this.mask | 1 << t | 0
        },
        toggle: function(t) {
            this.mask ^= 1 << t | 0
        },
        disable: function(t) {
            this.mask &= ~(1 << t | 0)
        },
        test: function(t) {
            return 0 != (this.mask & t.mask)
        }
    });
    var Er = 0;
    rt.DefaultUp = new c(0, 1, 0), rt.DefaultMatrixAutoUpdate = !0, Object.assign(rt.prototype, e.prototype, {
        isObject3D: !0,
        onBeforeRender: function() {},
        onAfterRender: function() {},
        applyMatrix: function(t) {
            this.matrix.multiplyMatrices(t, this.matrix), this.matrix.decompose(this.position, this.quaternion, this.scale)
        },
        applyQuaternion: function(t) {
            return this.quaternion.premultiply(t), this
        },
        setRotationFromAxisAngle: function(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        },
        setRotationFromEuler: function(t) {
            this.quaternion.setFromEuler(t, !0)
        },
        setRotationFromMatrix: function(t) {
            this.quaternion.setFromRotationMatrix(t)
        },
        setRotationFromQuaternion: function(t) {
            this.quaternion.copy(t)
        },
        rotateOnAxis: function() {
            var t = new s;
            return function(e, i) {
                return t.setFromAxisAngle(e, i), this.quaternion.multiply(t), this
            }
        }(),
        rotateX: function() {
            var t = new c(1, 0, 0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateY: function() {
            var t = new c(0, 1, 0);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        rotateZ: function() {
            var t = new c(0, 0, 1);
            return function(e) {
                return this.rotateOnAxis(t, e)
            }
        }(),
        translateOnAxis: function() {
            var t = new c;
            return function(e, i) {
                return t.copy(e).applyQuaternion(this.quaternion), this.position.add(t.multiplyScalar(i)), this
            }
        }(),
        translateX: function() {
            var t = new c(1, 0, 0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateY: function() {
            var t = new c(0, 1, 0);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        translateZ: function() {
            var t = new c(0, 0, 1);
            return function(e) {
                return this.translateOnAxis(t, e)
            }
        }(),
        localToWorld: function(t) {
            return t.applyMatrix4(this.matrixWorld)
        },
        worldToLocal: function() {
            var t = new h;
            return function(e) {
                return e.applyMatrix4(t.getInverse(this.matrixWorld))
            }
        }(),
        lookAt: function() {
            var t = new h;
            return function(e) {
                this.isCamera ? t.lookAt(this.position, e, this.up) : t.lookAt(e, this.position, this.up), this.quaternion.setFromRotationMatrix(t)
            }
        }(),
        add: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++) this.add(arguments[e]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t), t.parent = this, t.dispatchEvent({
                type: "added"
            }), this.children.push(t)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t), this)
        },
        remove: function(t) {
            if (1 < arguments.length) {
                for (var e = 0; e < arguments.length; e++) this.remove(arguments[e]);
                return this
            }
            return -1 !== (e = this.children.indexOf(t)) && (t.parent = null, t.dispatchEvent({
                type: "removed"
            }), this.children.splice(e, 1)), this
        },
        getObjectById: function(t) {
            return this.getObjectByProperty("id", t)
        },
        getObjectByName: function(t) {
            return this.getObjectByProperty("name", t)
        },
        getObjectByProperty: function(t, e) {
            if (this[t] === e) return this;
            for (var i = 0, n = this.children.length; i < n; i++) {
                var r = this.children[i].getObjectByProperty(t, e);
                if (void 0 !== r) return r
            }
        },
        getWorldPosition: function(t) {
            return t = t || new c, this.updateMatrixWorld(!0), t.setFromMatrixPosition(this.matrixWorld)
        },
        getWorldQuaternion: function() {
            var t = new c,
                e = new c;
            return function(i) {
                return i = i || new s, this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, i, e), i
            }
        }(),
        getWorldRotation: function() {
            var t = new s;
            return function(e) {
                return e = e || new it, this.getWorldQuaternion(t), e.setFromQuaternion(t, this.rotation.order, !1)
            }
        }(),
        getWorldScale: function() {
            var t = new c,
                e = new s;
            return function(i) {
                return i = i || new c, this.updateMatrixWorld(!0), this.matrixWorld.decompose(t, e, i), i
            }
        }(),
        getWorldDirection: function() {
            var t = new s;
            return function(e) {
                return e = e || new c, this.getWorldQuaternion(t), e.set(0, 0, 1).applyQuaternion(t)
            }
        }(),
        raycast: function() {},
        traverse: function(t) {
            t(this);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverse(t)
        },
        traverseVisible: function(t) {
            if (!1 !== this.visible) {
                t(this);
                for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].traverseVisible(t)
            }
        },
        traverseAncestors: function(t) {
            var e = this.parent;
            null !== e && (t(e), e.traverseAncestors(t))
        },
        updateMatrix: function() {
            this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0
        },
        updateMatrixWorld: function(t) {
            this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, t = !0);
            for (var e = this.children, i = 0, n = e.length; i < n; i++) e[i].updateMatrixWorld(t)
        },
        toJSON: function(t) {
            function e(e, i) {
                return void 0 === e[i.uuid] && (e[i.uuid] = i.toJSON(t)), i.uuid
            }

            function i(t) {
                var e, i = [];
                for (e in t) {
                    var n = t[e];
                    delete n.metadata, i.push(n)
                }
                return i
            }
            var n = void 0 === t || "" === t,
                r = {};
            n && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {}
            }, r.metadata = {
                version: 4.5,
                type: "Object",
                generator: "Object3D.toJSON"
            });
            var a = {};
            if (a.uuid = this.uuid, a.type = this.type, "" !== this.name && (a.name = this.name), !0 === this.castShadow && (a.castShadow = !0), !0 === this.receiveShadow && (a.receiveShadow = !0), !1 === this.visible && (a.visible = !1), "{}" !== JSON.stringify(this.userData) && (a.userData = this.userData), a.matrix = this.matrix.toArray(), void 0 !== this.geometry && (a.geometry = e(t.geometries, this.geometry)), void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    for (var o = [], s = 0, c = this.material.length; s < c; s++) o.push(e(t.materials, this.material[s]));
                    a.material = o
                } else a.material = e(t.materials, this.material);
            if (0 < this.children.length)
                for (a.children = [], s = 0; s < this.children.length; s++) a.children.push(this.children[s].toJSON(t).object);
            return n && (n = i(t.geometries), o = i(t.materials), s = i(t.textures), c = i(t.images), 0 < n.length && (r.geometries = n), 0 < o.length && (r.materials = o), 0 < s.length && (r.textures = s), 0 < c.length && (r.images = c)), r.object = a, r
        },
        clone: function(t) {
            return (new this.constructor).copy(this, t)
        },
        copy: function(t, e) {
            if (void 0 === e && (e = !0), this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e)
                for (e = 0; e < t.children.length; e++) this.add(t.children[e].clone());
            return this
        }
    }), at.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: at,
        isCamera: !0,
        copy: function(t, e) {
            return rt.prototype.copy.call(this, t, e), this.matrixWorldInverse.copy(t.matrixWorldInverse), this.projectionMatrix.copy(t.projectionMatrix), this
        },
        getWorldDirection: function() {
            var t = new s;
            return function(e) {
                return e = e || new c, this.getWorldQuaternion(t), e.set(0, 0, -1).applyQuaternion(t)
            }
        }(),
        updateMatrixWorld: function(t) {
            rt.prototype.updateMatrixWorld.call(this, t), this.matrixWorldInverse.getInverse(this.matrixWorld)
        },
        clone: function() {
            return (new this.constructor).copy(this)
        }
    }), ot.prototype = Object.assign(Object.create(at.prototype), {
        constructor: ot,
        isOrthographicCamera: !0,
        copy: function(t, e) {
            return at.prototype.copy.call(this, t, e), this.left = t.left, this.right = t.right, this.top = t.top, this.bottom = t.bottom, this.near = t.near, this.far = t.far, this.zoom = t.zoom, this.view = null === t.view ? null : Object.assign({}, t.view), this
        },
        setViewOffset: function(t, e, i, n, r, a) {
            this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: i,
                offsetY: n,
                width: r,
                height: a
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = (this.right - this.left) / (2 * this.zoom),
                e = (this.top - this.bottom) / (2 * this.zoom),
                i = (n = (this.right + this.left) / 2) - t,
                n = n + t;
            t = (a = (this.top + this.bottom) / 2) + e, e = a - e;
            if (null !== this.view) {
                n = this.zoom / (this.view.width / this.view.fullWidth), e = this.zoom / (this.view.height / this.view.fullHeight);
                var r = (this.right - this.left) / this.view.width,
                    a = (this.top - this.bottom) / this.view.height;
                n = (i = i + this.view.offsetX / n * r) + this.view.width / n * r, e = (t = t - this.view.offsetY / e * a) - this.view.height / e * a
            }
            this.projectionMatrix.makeOrthographic(i, n, t, e, this.near, this.far)
        },
        toJSON: function(t) {
            return (t = rt.prototype.toJSON.call(this, t)).object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, null !== this.view && (t.object.view = Object.assign({}, this.view)), t
        }
    }), st.prototype = Object.assign(Object.create(at.prototype), {
        constructor: st,
        isPerspectiveCamera: !0,
        copy: function(t, e) {
            return at.prototype.copy.call(this, t, e), this.fov = t.fov, this.zoom = t.zoom, this.near = t.near, this.far = t.far, this.focus = t.focus, this.aspect = t.aspect, this.view = null === t.view ? null : Object.assign({}, t.view), this.filmGauge = t.filmGauge, this.filmOffset = t.filmOffset, this
        },
        setFocalLength: function(t) {
            t = .5 * this.getFilmHeight() / t, this.fov = 2 * hr.RAD2DEG * Math.atan(t), this.updateProjectionMatrix()
        },
        getFocalLength: function() {
            var t = Math.tan(.5 * hr.DEG2RAD * this.fov);
            return .5 * this.getFilmHeight() / t
        },
        getEffectiveFOV: function() {
            return 2 * hr.RAD2DEG * Math.atan(Math.tan(.5 * hr.DEG2RAD * this.fov) / this.zoom)
        },
        getFilmWidth: function() {
            return this.filmGauge * Math.min(this.aspect, 1)
        },
        getFilmHeight: function() {
            return this.filmGauge / Math.max(this.aspect, 1)
        },
        setViewOffset: function(t, e, i, n, r, a) {
            this.aspect = t / e, this.view = {
                fullWidth: t,
                fullHeight: e,
                offsetX: i,
                offsetY: n,
                width: r,
                height: a
            }, this.updateProjectionMatrix()
        },
        clearViewOffset: function() {
            this.view = null, this.updateProjectionMatrix()
        },
        updateProjectionMatrix: function() {
            var t = this.near,
                e = 2 * (o = t * Math.tan(.5 * hr.DEG2RAD * this.fov) / this.zoom),
                i = -.5 * (s = this.aspect * e),
                n = this.view;
            if (null !== n) {
                var r = n.fullWidth,
                    a = n.fullHeight,
                    o = (i = i + n.offsetX * s / r, o - n.offsetY * e / a),
                    s = n.width / r * s;
                e = n.height / a * e
            }
            0 !== (n = this.filmOffset) && (i += t * n / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + s, o, o - e, t, this.far)
        },
        toJSON: function(t) {
            return (t = rt.prototype.toJSON.call(this, t)).object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, null !== this.view && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t
        }
    }), Object.assign(ct.prototype, {
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            this.a = t.a, this.b = t.b, this.c = t.c, this.normal.copy(t.normal), this.color.copy(t.color), this.materialIndex = t.materialIndex;
            for (var e = 0, i = t.vertexNormals.length; e < i; e++) this.vertexNormals[e] = t.vertexNormals[e].clone();
            for (e = 0, i = t.vertexColors.length; e < i; e++) this.vertexColors[e] = t.vertexColors[e].clone();
            return this
        }
    });
    var Tr = 0;
    Object.assign(ht.prototype, e.prototype, {
        isGeometry: !0,
        applyMatrix: function(t) {
            for (var e = (new K).getNormalMatrix(t), i = 0, n = this.vertices.length; i < n; i++) this.vertices[i].applyMatrix4(t);
            for (i = 0, n = this.faces.length; i < n; i++) {
                (t = this.faces[i]).normal.applyMatrix3(e).normalize();
                for (var r = 0, a = t.vertexNormals.length; r < a; r++) t.vertexNormals[r].applyMatrix3(e).normalize()
            }
            return null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this.normalsNeedUpdate = this.verticesNeedUpdate = !0, this
        },
        rotateX: function() {
            var t = new h;
            return function(e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function() {
            var t = new h;
            return function(e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function() {
            var t = new h;
            return function(e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function() {
            var t = new h;
            return function(e, i, n) {
                return t.makeTranslation(e, i, n), this.applyMatrix(t), this
            }
        }(),
        scale: function() {
            var t = new h;
            return function(e, i, n) {
                return t.makeScale(e, i, n), this.applyMatrix(t), this
            }
        }(),
        lookAt: function() {
            var t = new rt;
            return function(e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        fromBufferGeometry: function(t) {
            function e(t, e, i, r) {
                r = new ct(t, e, i, void 0 !== s ? [p[t].clone(), p[e].clone(), p[i].clone()] : [], void 0 !== h ? [n.colors[t].clone(), n.colors[e].clone(), n.colors[i].clone()] : [], r), n.faces.push(r), void 0 !== l && n.faceVertexUvs[0].push([d[t].clone(), d[e].clone(), d[i].clone()]), void 0 !== u && n.faceVertexUvs[1].push([f[t].clone(), f[e].clone(), f[i].clone()])
            }
            var n = this,
                r = null !== t.index ? t.index.array : void 0,
                a = t.attributes,
                o = a.position.array,
                s = void 0 !== a.normal ? a.normal.array : void 0,
                h = void 0 !== a.color ? a.color.array : void 0,
                l = void 0 !== a.uv ? a.uv.array : void 0,
                u = void 0 !== a.uv2 ? a.uv2.array : void 0;
            void 0 !== u && (this.faceVertexUvs[1] = []);
            for (var p = [], d = [], f = [], m = a = 0; a < o.length; a += 3, m += 2) n.vertices.push(new c(o[a], o[a + 1], o[a + 2])), void 0 !== s && p.push(new c(s[a], s[a + 1], s[a + 2])), void 0 !== h && n.colors.push(new H(h[a], h[a + 1], h[a + 2])), void 0 !== l && d.push(new i(l[m], l[m + 1])), void 0 !== u && f.push(new i(u[m], u[m + 1]));
            var g = t.groups;
            if (0 < g.length)
                for (a = 0; a < g.length; a++) {
                    m = v = (o = g[a]).start;
                    for (var v = v + o.count; m < v; m += 3) void 0 !== r ? e(r[m], r[m + 1], r[m + 2], o.materialIndex) : e(m, m + 1, m + 2, o.materialIndex)
                } else if (void 0 !== r)
                    for (a = 0; a < r.length; a += 3) e(r[a], r[a + 1], r[a + 2]);
                else
                    for (a = 0; a < o.length / 3; a += 3) e(a, a + 1, a + 2);
            return this.computeFaceNormals(), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), this
        },
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        normalize: function() {
            this.computeBoundingSphere();
            var t = this.boundingSphere.center,
                e = 0 === (e = this.boundingSphere.radius) ? 1 : 1 / e,
                i = new h;
            return i.set(e, 0, 0, -e * t.x, 0, e, 0, -e * t.y, 0, 0, e, -e * t.z, 0, 0, 0, 1), this.applyMatrix(i), this
        },
        computeFaceNormals: function() {
            for (var t = new c, e = new c, i = 0, n = this.faces.length; i < n; i++) {
                var r = this.faces[i],
                    a = this.vertices[r.a],
                    o = this.vertices[r.b];
                t.subVectors(this.vertices[r.c], o), e.subVectors(a, o), t.cross(e), t.normalize(), r.normal.copy(t)
            }
        },
        computeVertexNormals: function(t) {
            var e;
            void 0 === t && (t = !0);
            var i = Array(this.vertices.length),
                n = 0;
            for (e = this.vertices.length; n < e; n++) i[n] = new c;
            if (t) {
                var r = new c,
                    a = new c;
                for (t = 0, n = this.faces.length; t < n; t++) {
                    e = this.faces[t];
                    var o = this.vertices[e.a],
                        s = this.vertices[e.b],
                        h = this.vertices[e.c];
                    r.subVectors(h, s), a.subVectors(o, s), r.cross(a), i[e.a].add(r), i[e.b].add(r), i[e.c].add(r)
                }
            } else
                for (this.computeFaceNormals(), t = 0, n = this.faces.length; t < n; t++) i[(e = this.faces[t]).a].add(e.normal), i[e.b].add(e.normal), i[e.c].add(e.normal);
            for (n = 0, e = this.vertices.length; n < e; n++) i[n].normalize();
            for (t = 0, n = this.faces.length; t < n; t++) 3 === (o = (e = this.faces[t]).vertexNormals).length ? (o[0].copy(i[e.a]), o[1].copy(i[e.b]), o[2].copy(i[e.c])) : (o[0] = i[e.a].clone(), o[1] = i[e.b].clone(), o[2] = i[e.c].clone());
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeFlatVertexNormals: function() {
            var t;
            this.computeFaceNormals();
            var e = 0;
            for (t = this.faces.length; e < t; e++) {
                var i = this.faces[e],
                    n = i.vertexNormals;
                3 === n.length ? (n[0].copy(i.normal), n[1].copy(i.normal), n[2].copy(i.normal)) : (n[0] = i.normal.clone(), n[1] = i.normal.clone(), n[2] = i.normal.clone())
            }
            0 < this.faces.length && (this.normalsNeedUpdate = !0)
        },
        computeMorphNormals: function() {
            var t, e, i = 0;
            for (e = this.faces.length; i < e; i++) {
                var n = this.faces[i];
                n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []);
                var r = 0;
                for (t = n.vertexNormals.length; r < t; r++) n.__originalVertexNormals[r] ? n.__originalVertexNormals[r].copy(n.vertexNormals[r]) : n.__originalVertexNormals[r] = n.vertexNormals[r].clone()
            }
            var a = new ht;
            for (a.faces = this.faces, r = 0, t = this.morphTargets.length; r < t; r++) {
                if (!this.morphNormals[r]) {
                    this.morphNormals[r] = {}, this.morphNormals[r].faceNormals = [], this.morphNormals[r].vertexNormals = [], n = this.morphNormals[r].faceNormals;
                    var o = this.morphNormals[r].vertexNormals;
                    for (i = 0, e = this.faces.length; i < e; i++) {
                        var s = new c,
                            h = {
                                a: new c,
                                b: new c,
                                c: new c
                            };
                        n.push(s), o.push(h)
                    }
                }
                for (o = this.morphNormals[r], a.vertices = this.morphTargets[r].vertices, a.computeFaceNormals(), a.computeVertexNormals(), i = 0, e = this.faces.length; i < e; i++) n = this.faces[i], s = o.faceNormals[i], h = o.vertexNormals[i], s.copy(n.normal), h.a.copy(n.vertexNormals[0]), h.b.copy(n.vertexNormals[1]), h.c.copy(n.vertexNormals[2])
            }
            for (i = 0, e = this.faces.length; i < e; i++)(n = this.faces[i]).normal = n.__originalFaceNormal, n.vertexNormals = n.__originalVertexNormals
        },
        computeLineDistances: function() {
            for (var t = 0, e = this.vertices, i = 0, n = e.length; i < n; i++) 0 < i && (t += e[i].distanceTo(e[i - 1])), this.lineDistances[i] = t
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new J), this.boundingBox.setFromPoints(this.vertices)
        },
        computeBoundingSphere: function() {
            null === this.boundingSphere && (this.boundingSphere = new Q), this.boundingSphere.setFromPoints(this.vertices)
        },
        merge: function(t, e, i) {
            if (t && t.isGeometry) {
                var n, r = this.vertices.length,
                    a = this.vertices,
                    o = t.vertices,
                    s = this.faces,
                    c = t.faces,
                    h = this.faceVertexUvs[0],
                    l = t.faceVertexUvs[0],
                    u = this.colors,
                    p = t.colors;
                void 0 === i && (i = 0), void 0 !== e && (n = (new K).getNormalMatrix(e)), t = 0;
                for (var d = o.length; t < d; t++) {
                    var f = o[t].clone();
                    void 0 !== e && f.applyMatrix4(e), a.push(f)
                }
                for (t = 0, d = p.length; t < d; t++) u.push(p[t].clone());
                for (t = 0, d = c.length; t < d; t++) {
                    var m = (o = c[t]).vertexNormals;
                    p = o.vertexColors;
                    for ((u = new ct(o.a + r, o.b + r, o.c + r)).normal.copy(o.normal), void 0 !== n && u.normal.applyMatrix3(n).normalize(), e = 0, a = m.length; e < a; e++) f = m[e].clone(), void 0 !== n && f.applyMatrix3(n).normalize(), u.vertexNormals.push(f);
                    for (u.color.copy(o.color), e = 0, a = p.length; e < a; e++) f = p[e], u.vertexColors.push(f.clone());
                    u.materialIndex = o.materialIndex + i, s.push(u)
                }
                for (t = 0, d = l.length; t < d; t++)
                    if (n = [], void 0 !== (i = l[t])) {
                        for (e = 0, a = i.length; e < a; e++) n.push(i[e].clone());
                        h.push(n)
                    }
            } else console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", t)
        },
        mergeMesh: function(t) {
            t && t.isMesh ? (t.matrixAutoUpdate && t.updateMatrix(), this.merge(t.geometry, t.matrix)) : console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", t)
        },
        mergeVertices: function() {
            var t, e = {},
                i = [],
                n = [],
                r = Math.pow(10, 4),
                a = 0;
            for (t = this.vertices.length; a < t; a++) {
                var o = this.vertices[a];
                void 0 === e[o = Math.round(o.x * r) + "_" + Math.round(o.y * r) + "_" + Math.round(o.z * r)] ? (e[o] = a, i.push(this.vertices[a]), n[a] = i.length - 1) : n[a] = n[e[o]]
            }
            for (e = [], a = 0, t = this.faces.length; a < t; a++)
                for ((r = this.faces[a]).a = n[r.a], r.b = n[r.b], r.c = n[r.c], r = [r.a, r.b, r.c], o = 0; 3 > o; o++)
                    if (r[o] === r[(o + 1) % 3]) {
                        e.push(a);
                        break
                    } for (a = e.length - 1; 0 <= a; a--)
                for (r = e[a], this.faces.splice(r, 1), n = 0, t = this.faceVertexUvs.length; n < t; n++) this.faceVertexUvs[n].splice(r, 1);
            return a = this.vertices.length - i.length, this.vertices = i, a
        },
        sortFacesByMaterialIndex: function() {
            for (var t = this.faces, e = t.length, i = 0; i < e; i++) t[i]._id = i;
            t.sort(function(t, e) {
                return t.materialIndex - e.materialIndex
            });
            var n, r, a = this.faceVertexUvs[0],
                o = this.faceVertexUvs[1];
            for (a && a.length === e && (n = []), o && o.length === e && (r = []), i = 0; i < e; i++) {
                var s = t[i]._id;
                n && n.push(a[s]), r && r.push(o[s])
            }
            n && (this.faceVertexUvs[0] = n), r && (this.faceVertexUvs[1] = r)
        },
        toJSON: function() {
            function t(t, e, i) {
                return i ? t | 1 << e : t & ~(1 << e)
            }

            function e(t) {
                var e = t.x.toString() + t.y.toString() + t.z.toString();
                return void 0 !== h[e] ? h[e] : (h[e] = c.length / 3, c.push(t.x, t.y, t.z), h[e])
            }

            function i(t) {
                var e = t.r.toString() + t.g.toString() + t.b.toString();
                return void 0 !== u[e] ? u[e] : (u[e] = l.length, l.push(t.getHex()), u[e])
            }

            function n(t) {
                var e = t.x.toString() + t.y.toString();
                return void 0 !== d[e] ? d[e] : (d[e] = p.length / 2, p.push(t.x, t.y), d[e])
            }
            var r = {
                metadata: {
                    version: 4.5,
                    type: "Geometry",
                    generator: "Geometry.toJSON"
                }
            };
            if (r.uuid = this.uuid, r.type = this.type, "" !== this.name && (r.name = this.name), void 0 !== this.parameters) {
                var a, o = this.parameters;
                for (a in o) void 0 !== o[a] && (r[a] = o[a]);
                return r
            }
            for (o = [], a = 0; a < this.vertices.length; a++) {
                var s = this.vertices[a];
                o.push(s.x, s.y, s.z)
            }
            s = [];
            var c = [],
                h = {},
                l = [],
                u = {},
                p = [],
                d = {};
            for (a = 0; a < this.faces.length; a++) {
                var f = this.faces[a],
                    m = void 0 !== this.faceVertexUvs[0][a],
                    g = 0 < f.normal.length(),
                    v = 0 < f.vertexNormals.length,
                    y = 1 !== f.color.r || 1 !== f.color.g || 1 !== f.color.b,
                    x = 0 < f.vertexColors.length,
                    b = t(b = t(b = t(b = t(b = t(b = t(b = t(b = t(b = 0, 0, 0), 1, !0), 2, !1), 3, m), 4, g), 5, v), 6, y), 7, x);
                s.push(b), s.push(f.a, f.b, f.c), s.push(f.materialIndex), m && (m = this.faceVertexUvs[0][a], s.push(n(m[0]), n(m[1]), n(m[2]))), g && s.push(e(f.normal)), v && (g = f.vertexNormals, s.push(e(g[0]), e(g[1]), e(g[2]))), y && s.push(i(f.color)), x && (f = f.vertexColors, s.push(i(f[0]), i(f[1]), i(f[2])))
            }
            return r.data = {}, r.data.vertices = o, r.data.normals = c, 0 < l.length && (r.data.colors = l), 0 < p.length && (r.data.uvs = [p]), r.data.faces = s, r
        },
        clone: function() {
            return (new ht).copy(this)
        },
        copy: function(t) {
            var e, i, n;
            this.vertices = [], this.colors = [], this.faces = [], this.faceVertexUvs = [
                []
            ], this.morphTargets = [], this.morphNormals = [], this.skinWeights = [], this.skinIndices = [], this.lineDistances = [], this.boundingSphere = this.boundingBox = null, this.name = t.name;
            var r = t.vertices,
                a = 0;
            for (e = r.length; a < e; a++) this.vertices.push(r[a].clone());
            for (a = 0, e = (r = t.colors).length; a < e; a++) this.colors.push(r[a].clone());
            for (a = 0, e = (r = t.faces).length; a < e; a++) this.faces.push(r[a].clone());
            for (a = 0, e = t.faceVertexUvs.length; a < e; a++) {
                var o = t.faceVertexUvs[a];
                for (void 0 === this.faceVertexUvs[a] && (this.faceVertexUvs[a] = []), r = 0, i = o.length; r < i; r++) {
                    var s = o[r],
                        c = [],
                        h = 0;
                    for (n = s.length; h < n; h++) c.push(s[h].clone());
                    this.faceVertexUvs[a].push(c)
                }
            }
            for (a = 0, e = (h = t.morphTargets).length; a < e; a++) {
                if ((n = {}).name = h[a].name, void 0 !== h[a].vertices)
                    for (n.vertices = [], r = 0, i = h[a].vertices.length; r < i; r++) n.vertices.push(h[a].vertices[r].clone());
                if (void 0 !== h[a].normals)
                    for (n.normals = [], r = 0, i = h[a].normals.length; r < i; r++) n.normals.push(h[a].normals[r].clone());
                this.morphTargets.push(n)
            }
            for (a = 0, e = (h = t.morphNormals).length; a < e; a++) {
                if (n = {}, void 0 !== h[a].vertexNormals)
                    for (n.vertexNormals = [], r = 0, i = h[a].vertexNormals.length; r < i; r++) o = h[a].vertexNormals[r], (s = {}).a = o.a.clone(), s.b = o.b.clone(), s.c = o.c.clone(), n.vertexNormals.push(s);
                if (void 0 !== h[a].faceNormals)
                    for (n.faceNormals = [], r = 0, i = h[a].faceNormals.length; r < i; r++) n.faceNormals.push(h[a].faceNormals[r].clone());
                this.morphNormals.push(n)
            }
            for (a = 0, e = (r = t.skinWeights).length; a < e; a++) this.skinWeights.push(r[a].clone());
            for (a = 0, e = (r = t.skinIndices).length; a < e; a++) this.skinIndices.push(r[a].clone());
            for (a = 0, e = (r = t.lineDistances).length; a < e; a++) this.lineDistances.push(r[a]);
            return null !== (a = t.boundingBox) && (this.boundingBox = a.clone()), null !== (a = t.boundingSphere) && (this.boundingSphere = a.clone()), this.elementsNeedUpdate = t.elementsNeedUpdate, this.verticesNeedUpdate = t.verticesNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.lineDistancesNeedUpdate = t.lineDistancesNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Object.defineProperty(lt.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), Object.assign(lt.prototype, {
        isBufferAttribute: !0,
        setArray: function(t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.itemSize : 0, this.array = t
        },
        setDynamic: function(t) {
            return this.dynamic = t, this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.dynamic = t.dynamic, this
        },
        copyAt: function(t, e, i) {
            t *= this.itemSize, i *= e.itemSize;
            for (var n = 0, r = this.itemSize; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        },
        copyArray: function(t) {
            return this.array.set(t), this
        },
        copyColorsArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", n), a = new H), e[i++] = a.r, e[i++] = a.g, e[i++] = a.b
            }
            return this
        },
        copyIndicesArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                e[i++] = a.a, e[i++] = a.b, e[i++] = a.c
            }
            return this
        },
        copyVector2sArray: function(t) {
            for (var e = this.array, n = 0, r = 0, a = t.length; r < a; r++) {
                var o = t[r];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", r), o = new i), e[n++] = o.x, e[n++] = o.y
            }
            return this
        },
        copyVector3sArray: function(t) {
            for (var e = this.array, i = 0, n = 0, r = t.length; n < r; n++) {
                var a = t[n];
                void 0 === a && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", n), a = new c), e[i++] = a.x, e[i++] = a.y, e[i++] = a.z
            }
            return this
        },
        copyVector4sArray: function(t) {
            for (var e = this.array, i = 0, n = 0, a = t.length; n < a; n++) {
                var o = t[n];
                void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", n), o = new r), e[i++] = o.x, e[i++] = o.y, e[i++] = o.z, e[i++] = o.w
            }
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        getX: function(t) {
            return this.array[t * this.itemSize]
        },
        setX: function(t, e) {
            return this.array[t * this.itemSize] = e, this
        },
        getY: function(t) {
            return this.array[t * this.itemSize + 1]
        },
        setY: function(t, e) {
            return this.array[t * this.itemSize + 1] = e, this
        },
        getZ: function(t) {
            return this.array[t * this.itemSize + 2]
        },
        setZ: function(t, e) {
            return this.array[t * this.itemSize + 2] = e, this
        },
        getW: function(t) {
            return this.array[t * this.itemSize + 3]
        },
        setW: function(t, e) {
            return this.array[t * this.itemSize + 3] = e, this
        },
        setXY: function(t, e, i) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this
        },
        setXYZ: function(t, e, i, n) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this
        },
        setXYZW: function(t, e, i, n, r) {
            return t *= this.itemSize, this.array[t + 0] = e, this.array[t + 1] = i, this.array[t + 2] = n, this.array[t + 3] = r, this
        },
        onUpload: function(t) {
            return this.onUploadCallback = t, this
        },
        clone: function() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
    }), ut.prototype = Object.create(lt.prototype), ut.prototype.constructor = ut, pt.prototype = Object.create(lt.prototype), pt.prototype.constructor = pt, dt.prototype = Object.create(lt.prototype), dt.prototype.constructor = dt, ft.prototype = Object.create(lt.prototype), ft.prototype.constructor = ft, mt.prototype = Object.create(lt.prototype), mt.prototype.constructor = mt, gt.prototype = Object.create(lt.prototype), gt.prototype.constructor = gt, vt.prototype = Object.create(lt.prototype), vt.prototype.constructor = vt, yt.prototype = Object.create(lt.prototype), yt.prototype.constructor = yt, xt.prototype = Object.create(lt.prototype), xt.prototype.constructor = xt, Object.assign(bt.prototype, {
        computeGroups: function(t) {
            var e = [],
                i = void 0;
            t = t.faces;
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                if (r.materialIndex !== i) {
                    i = r.materialIndex, void 0 !== a && (a.count = 3 * n - a.start, e.push(a));
                    var a = {
                        start: 3 * n,
                        materialIndex: i
                    }
                }
            }
            void 0 !== a && (a.count = 3 * n - a.start, e.push(a)), this.groups = e
        },
        fromGeometry: function(t) {
            var e = t.faces,
                n = t.vertices,
                r = t.faceVertexUvs,
                a = r[0] && 0 < r[0].length,
                o = r[1] && 0 < r[1].length,
                s = t.morphTargets,
                c = s.length;
            if (0 < c) {
                for (var h = [], l = 0; l < c; l++) h[l] = [];
                this.morphTargets.position = h
            }
            var u = t.morphNormals,
                p = u.length;
            if (0 < p) {
                var d = [];
                for (l = 0; l < p; l++) d[l] = [];
                this.morphTargets.normal = d
            }
            var f = t.skinIndices,
                m = t.skinWeights,
                g = f.length === n.length,
                v = m.length === n.length;
            for (l = 0; l < e.length; l++) {
                var y = e[l];
                this.vertices.push(n[y.a], n[y.b], n[y.c]);
                var x = y.vertexNormals;
                for (3 === x.length ? this.normals.push(x[0], x[1], x[2]) : (x = y.normal, this.normals.push(x, x, x)), 3 === (x = y.vertexColors).length ? this.colors.push(x[0], x[1], x[2]) : (x = y.color, this.colors.push(x, x, x)), !0 === a && (void 0 !== (x = r[0][l]) ? this.uvs.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", l), this.uvs.push(new i, new i, new i))), !0 === o && (void 0 !== (x = r[1][l]) ? this.uvs2.push(x[0], x[1], x[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", l), this.uvs2.push(new i, new i, new i))), x = 0; x < c; x++) {
                    var b = s[x].vertices;
                    h[x].push(b[y.a], b[y.b], b[y.c])
                }
                for (x = 0; x < p; x++) b = u[x].vertexNormals[l], d[x].push(b.a, b.b, b.c);
                g && this.skinIndices.push(f[y.a], f[y.b], f[y.c]), v && this.skinWeights.push(m[y.a], m[y.b], m[y.c])
            }
            return this.computeGroups(t), this.verticesNeedUpdate = t.verticesNeedUpdate, this.normalsNeedUpdate = t.normalsNeedUpdate, this.colorsNeedUpdate = t.colorsNeedUpdate, this.uvsNeedUpdate = t.uvsNeedUpdate, this.groupsNeedUpdate = t.groupsNeedUpdate, this
        }
    }), wt.MaxIndex = 65535, Object.assign(wt.prototype, e.prototype, {
        isBufferGeometry: !0,
        getIndex: function() {
            return this.index
        },
        setIndex: function(t) {
            Array.isArray(t) ? this.index = new(65535 < _t(t) ? vt : mt)(t, 1) : this.index = t
        },
        addAttribute: function(t, e, i) {
            if (e && e.isBufferAttribute || e && e.isInterleavedBufferAttribute) {
                if ("index" !== t) return this.attributes[t] = e, this;
                console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(e)
            } else console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(t, new lt(e, i))
        },
        getAttribute: function(t) {
            return this.attributes[t]
        },
        removeAttribute: function(t) {
            return delete this.attributes[t], this
        },
        addGroup: function(t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: void 0 !== i ? i : 0
            })
        },
        clearGroups: function() {
            this.groups = []
        },
        setDrawRange: function(t, e) {
            this.drawRange.start = t, this.drawRange.count = e
        },
        applyMatrix: function(t) {
            var e = this.attributes.position;
            return void 0 !== e && (t.applyToBufferAttribute(e), e.needsUpdate = !0), void 0 !== (e = this.attributes.normal) && ((new K).getNormalMatrix(t).applyToBufferAttribute(e), e.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this
        },
        rotateX: function() {
            var t = new h;
            return function(e) {
                return t.makeRotationX(e), this.applyMatrix(t), this
            }
        }(),
        rotateY: function() {
            var t = new h;
            return function(e) {
                return t.makeRotationY(e), this.applyMatrix(t), this
            }
        }(),
        rotateZ: function() {
            var t = new h;
            return function(e) {
                return t.makeRotationZ(e), this.applyMatrix(t), this
            }
        }(),
        translate: function() {
            var t = new h;
            return function(e, i, n) {
                return t.makeTranslation(e, i, n), this.applyMatrix(t), this
            }
        }(),
        scale: function() {
            var t = new h;
            return function(e, i, n) {
                return t.makeScale(e, i, n), this.applyMatrix(t), this
            }
        }(),
        lookAt: function() {
            var t = new rt;
            return function(e) {
                t.lookAt(e), t.updateMatrix(), this.applyMatrix(t.matrix)
            }
        }(),
        center: function() {
            this.computeBoundingBox();
            var t = this.boundingBox.getCenter().negate();
            return this.translate(t.x, t.y, t.z), t
        },
        setFromObject: function(t) {
            var e = t.geometry;
            if (t.isPoints || t.isLine) {
                t = new yt(3 * e.vertices.length, 3);
                var i = new yt(3 * e.colors.length, 3);
                this.addAttribute("position", t.copyVector3sArray(e.vertices)), this.addAttribute("color", i.copyColorsArray(e.colors)), e.lineDistances && e.lineDistances.length === e.vertices.length && (t = new yt(e.lineDistances.length, 1), this.addAttribute("lineDistance", t.copyArray(e.lineDistances))), null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()), null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone())
            } else t.isMesh && e && e.isGeometry && this.fromGeometry(e);
            return this
        },
        updateFromObject: function(t) {
            var e = t.geometry;
            if (t.isMesh) {
                var i = e.__directGeometry;
                if (!0 === e.elementsNeedUpdate && (i = void 0, e.elementsNeedUpdate = !1), void 0 === i) return this.fromGeometry(e);
                i.verticesNeedUpdate = e.verticesNeedUpdate, i.normalsNeedUpdate = e.normalsNeedUpdate, i.colorsNeedUpdate = e.colorsNeedUpdate, i.uvsNeedUpdate = e.uvsNeedUpdate, i.groupsNeedUpdate = e.groupsNeedUpdate, e.verticesNeedUpdate = !1, e.normalsNeedUpdate = !1, e.colorsNeedUpdate = !1, e.uvsNeedUpdate = !1, e.groupsNeedUpdate = !1, e = i
            }
            return !0 === e.verticesNeedUpdate && (void 0 !== (i = this.attributes.position) && (i.copyVector3sArray(e.vertices), i.needsUpdate = !0), e.verticesNeedUpdate = !1), !0 === e.normalsNeedUpdate && (void 0 !== (i = this.attributes.normal) && (i.copyVector3sArray(e.normals), i.needsUpdate = !0), e.normalsNeedUpdate = !1), !0 === e.colorsNeedUpdate && (void 0 !== (i = this.attributes.color) && (i.copyColorsArray(e.colors), i.needsUpdate = !0), e.colorsNeedUpdate = !1), e.uvsNeedUpdate && (void 0 !== (i = this.attributes.uv) && (i.copyVector2sArray(e.uvs), i.needsUpdate = !0), e.uvsNeedUpdate = !1), e.lineDistancesNeedUpdate && (void 0 !== (i = this.attributes.lineDistance) && (i.copyArray(e.lineDistances), i.needsUpdate = !0), e.lineDistancesNeedUpdate = !1), e.groupsNeedUpdate && (e.computeGroups(t.geometry), this.groups = e.groups, e.groupsNeedUpdate = !1), this
        },
        fromGeometry: function(t) {
            return t.__directGeometry = (new bt).fromGeometry(t), this.fromDirectGeometry(t.__directGeometry)
        },
        fromDirectGeometry: function(t) {
            var e = new Float32Array(3 * t.vertices.length);
            for (var i in this.addAttribute("position", new lt(e, 3).copyVector3sArray(t.vertices)), 0 < t.normals.length && (e = new Float32Array(3 * t.normals.length), this.addAttribute("normal", new lt(e, 3).copyVector3sArray(t.normals))), 0 < t.colors.length && (e = new Float32Array(3 * t.colors.length), this.addAttribute("color", new lt(e, 3).copyColorsArray(t.colors))), 0 < t.uvs.length && (e = new Float32Array(2 * t.uvs.length), this.addAttribute("uv", new lt(e, 2).copyVector2sArray(t.uvs))), 0 < t.uvs2.length && (e = new Float32Array(2 * t.uvs2.length), this.addAttribute("uv2", new lt(e, 2).copyVector2sArray(t.uvs2))), 0 < t.indices.length && (e = new(65535 < _t(t.indices) ? Uint32Array : Uint16Array)(3 * t.indices.length), this.setIndex(new lt(e, 1).copyIndicesArray(t.indices))), this.groups = t.groups, t.morphTargets) {
                e = [];
                for (var n = t.morphTargets[i], r = 0, a = n.length; r < a; r++) {
                    var o = n[r],
                        s = new yt(3 * o.length, 3);
                    e.push(s.copyVector3sArray(o))
                }
                this.morphAttributes[i] = e
            }
            return 0 < t.skinIndices.length && (i = new yt(4 * t.skinIndices.length, 4), this.addAttribute("skinIndex", i.copyVector4sArray(t.skinIndices))), 0 < t.skinWeights.length && (i = new yt(4 * t.skinWeights.length, 4), this.addAttribute("skinWeight", i.copyVector4sArray(t.skinWeights))), null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()), null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone()), this
        },
        computeBoundingBox: function() {
            null === this.boundingBox && (this.boundingBox = new J);
            var t = this.attributes.position;
            void 0 !== t ? this.boundingBox.setFromBufferAttribute(t) : this.boundingBox.makeEmpty(), (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        },
        computeBoundingSphere: function() {
            var t = new J,
                e = new c;
            return function() {
                null === this.boundingSphere && (this.boundingSphere = new Q);
                var i = this.attributes.position;
                if (i) {
                    var n = this.boundingSphere.center;
                    t.setFromBufferAttribute(i), t.getCenter(n);
                    for (var r = 0, a = 0, o = i.count; a < o; a++) e.x = i.getX(a), e.y = i.getY(a), e.z = i.getZ(a), r = Math.max(r, n.distanceToSquared(e));
                    this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
                }
            }
        }(),
        computeFaceNormals: function() {},
        computeVertexNormals: function() {
            var t = this.index,
                e = this.attributes,
                i = this.groups;
            if (e.position) {
                var n = e.position.array;
                if (void 0 === e.normal) this.addAttribute("normal", new lt(new Float32Array(n.length), 3));
                else
                    for (var r = 0, a = (o = e.normal.array).length; r < a; r++) o[r] = 0;
                var o = e.normal.array,
                    s = new c,
                    h = new c,
                    l = new c,
                    u = new c,
                    p = new c;
                if (t) {
                    t = t.array, 0 === i.length && this.addGroup(0, t.length);
                    for (var d = 0, f = i.length; d < f; ++d) {
                        a = (r = i[d]).start;
                        var m = r.count;
                        for (r = a, a += m; r < a; r += 3) {
                            m = 3 * t[r + 0];
                            var g = 3 * t[r + 1],
                                v = 3 * t[r + 2];
                            s.fromArray(n, m), h.fromArray(n, g), l.fromArray(n, v), u.subVectors(l, h), p.subVectors(s, h), u.cross(p), o[m] += u.x, o[m + 1] += u.y, o[m + 2] += u.z, o[g] += u.x, o[g + 1] += u.y, o[g + 2] += u.z, o[v] += u.x, o[v + 1] += u.y, o[v + 2] += u.z
                        }
                    }
                } else
                    for (r = 0, a = n.length; r < a; r += 9) s.fromArray(n, r), h.fromArray(n, r + 3), l.fromArray(n, r + 6), u.subVectors(l, h), p.subVectors(s, h), u.cross(p), o[r] = u.x, o[r + 1] = u.y, o[r + 2] = u.z, o[r + 3] = u.x, o[r + 4] = u.y, o[r + 5] = u.z, o[r + 6] = u.x, o[r + 7] = u.y, o[r + 8] = u.z;
                this.normalizeNormals(), e.normal.needsUpdate = !0
            }
        },
        merge: function(t, e) {
            if (t && t.isBufferGeometry) {
                void 0 === e && (e = 0);
                var i, n = this.attributes;
                for (i in n)
                    if (void 0 !== t.attributes[i])
                        for (var r = n[i].array, a = (s = t.attributes[i]).array, o = 0, s = s.itemSize * e; o < a.length; o++, s++) r[s] = a[o];
                return this
            }
            console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t)
        },
        normalizeNormals: function() {
            var t = new c;
            return function() {
                for (var e = this.attributes.normal, i = 0, n = e.count; i < n; i++) t.x = e.getX(i), t.y = e.getY(i), t.z = e.getZ(i), t.normalize(), e.setXYZ(i, t.x, t.y, t.z)
            }
        }(),
        toNonIndexed: function() {
            if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."), this;
            var t, e = new wt,
                i = this.index.array,
                n = this.attributes;
            for (t in n) {
                for (var r, a = (o = n[t]).array, o = o.itemSize, s = new a.constructor(i.length * o), c = 0, h = 0, l = i.length; h < l; h++) {
                    r = i[h] * o;
                    for (var u = 0; u < o; u++) s[c++] = a[r++]
                }
                e.addAttribute(t, new lt(s, o))
            }
            return e
        },
        toJSON: function() {
            var t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid, t.type = this.type, "" !== this.name && (t.name = this.name), void 0 !== this.parameters) {
                var e = this.parameters;
                for (var i in e) void 0 !== e[i] && (t[i] = e[i]);
                return t
            }
            t.data = {
                attributes: {}
            };
            var n = this.index;
            for (i in null !== n && (e = Array.prototype.slice.call(n.array), t.data.index = {
                    type: n.array.constructor.name,
                    array: e
                }), n = this.attributes) {
                var r = n[i];
                e = Array.prototype.slice.call(r.array), t.data.attributes[i] = {
                    itemSize: r.itemSize,
                    type: r.array.constructor.name,
                    array: e,
                    normalized: r.normalized
                }
            }
            return 0 < (i = this.groups).length && (t.data.groups = JSON.parse(JSON.stringify(i))), null !== (i = this.boundingSphere) && (t.data.boundingSphere = {
                center: i.center.toArray(),
                radius: i.radius
            }), t
        },
        clone: function() {
            return (new wt).copy(this)
        },
        copy: function(t) {
            var e;
            this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingSphere = this.boundingBox = null, this.name = t.name;
            var i = t.index;
            for (o in null !== i && this.setIndex(i.clone()), i = t.attributes) this.addAttribute(o, i[o].clone());
            var n = t.morphAttributes;
            for (o in n) {
                var r = [],
                    a = n[o];
                for (i = 0, e = a.length; i < e; i++) r.push(a[i].clone());
                this.morphAttributes[o] = r
            }
            var o = t.groups;
            for (i = 0, e = o.length; i < e; i++) n = o[i], this.addGroup(n.start, n.count, n.materialIndex);
            return null !== (o = t.boundingBox) && (this.boundingBox = o.clone()), null !== (o = t.boundingSphere) && (this.boundingSphere = o.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this
        },
        dispose: function() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }), Mt.prototype = Object.create(ht.prototype), Mt.prototype.constructor = Mt, Et.prototype = Object.create(wt.prototype), Et.prototype.constructor = Et, Tt.prototype = Object.create(ht.prototype), Tt.prototype.constructor = Tt, St.prototype = Object.create(wt.prototype), St.prototype.constructor = St, At.prototype = Object.create(X.prototype), At.prototype.constructor = At, At.prototype.isMeshBasicMaterial = !0, At.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this
    }, Object.assign(Rt.prototype, {
        set: function(t, e) {
            return this.origin.copy(t), this.direction.copy(e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.origin.copy(t.origin), this.direction.copy(t.direction), this
        },
        at: function(t, e) {
            return (e || new c).copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        lookAt: function(t) {
            return this.direction.copy(t).sub(this.origin).normalize(), this
        },
        recast: function() {
            var t = new c;
            return function(e) {
                return this.origin.copy(this.at(e, t)), this
            }
        }(),
        closestPointToPoint: function(t, e) {
            return (e = e || new c).subVectors(t, this.origin), 0 > (t = e.dot(this.direction)) ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(t).add(this.origin)
        },
        distanceToPoint: function(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        },
        distanceSqToPoint: function() {
            var t = new c;
            return function(e) {
                var i = t.subVectors(e, this.origin).dot(this.direction);
                return 0 > i ? this.origin.distanceToSquared(e) : (t.copy(this.direction).multiplyScalar(i).add(this.origin), t.distanceToSquared(e))
            }
        }(),
        distanceSqToSegment: function() {
            var t = new c,
                e = new c,
                i = new c;
            return function(n, r, a, o) {
                t.copy(n).add(r).multiplyScalar(.5), e.copy(r).sub(n).normalize(), i.copy(this.origin).sub(t);
                var s = .5 * n.distanceTo(r),
                    c = -this.direction.dot(e),
                    h = i.dot(this.direction),
                    l = -i.dot(e),
                    u = i.lengthSq(),
                    p = Math.abs(1 - c * c);
                if (0 < p) {
                    r = c * h - l;
                    var d = s * p;
                    0 <= (n = c * l - h) ? r >= -d ? r <= d ? c = (n *= s = 1 / p) * (n + c * (r *= s) + 2 * h) + r * (c * n + r + 2 * l) + u : (r = s, c = -(n = Math.max(0, -(c * r + h))) * n + r * (r + 2 * l) + u) : (r = -s, c = -(n = Math.max(0, -(c * r + h))) * n + r * (r + 2 * l) + u) : r <= -d ? c = -(n = Math.max(0, -(-c * s + h))) * n + (r = 0 < n ? -s : Math.min(Math.max(-s, -l), s)) * (r + 2 * l) + u : r <= d ? (n = 0, c = (r = Math.min(Math.max(-s, -l), s)) * (r + 2 * l) + u) : c = -(n = Math.max(0, -(c * s + h))) * n + (r = 0 < n ? s : Math.min(Math.max(-s, -l), s)) * (r + 2 * l) + u
                } else r = 0 < c ? -s : s, c = -(n = Math.max(0, -(c * r + h))) * n + r * (r + 2 * l) + u;
                return a && a.copy(this.direction).multiplyScalar(n).add(this.origin), o && o.copy(e).multiplyScalar(r).add(t), c
            }
        }(),
        intersectSphere: function() {
            var t = new c;
            return function(e, i) {
                t.subVectors(e.center, this.origin);
                var n = t.dot(this.direction),
                    r = t.dot(t) - n * n;
                return r > (e = e.radius * e.radius) ? null : (r = n - (e = Math.sqrt(e - r)), n += e, 0 > r && 0 > n ? null : 0 > r ? this.at(n, i) : this.at(r, i))
            }
        }(),
        intersectsSphere: function(t) {
            return this.distanceToPoint(t.center) <= t.radius
        },
        distanceToPlane: function(t) {
            var e = t.normal.dot(this.direction);
            return 0 === e ? 0 === t.distanceToPoint(this.origin) ? 0 : null : 0 <= (t = -(this.origin.dot(t.normal) + t.constant) / e) ? t : null
        },
        intersectPlane: function(t, e) {
            return null === (t = this.distanceToPlane(t)) ? null : this.at(t, e)
        },
        intersectsPlane: function(t) {
            var e = t.distanceToPoint(this.origin);
            return 0 === e || 0 > t.normal.dot(this.direction) * e
        },
        intersectBox: function(t, e) {
            var i = 1 / this.direction.x,
                n = 1 / this.direction.y,
                r = 1 / this.direction.z,
                a = this.origin;
            if (0 <= i) {
                var o = (t.min.x - a.x) * i;
                i *= t.max.x - a.x
            } else o = (t.max.x - a.x) * i, i *= t.min.x - a.x;
            if (0 <= n) {
                var s = (t.min.y - a.y) * n;
                n *= t.max.y - a.y
            } else s = (t.max.y - a.y) * n, n *= t.min.y - a.y;
            return o > n || s > i ? null : ((s > o || o != o) && (o = s), (n < i || i != i) && (i = n), 0 <= r ? (s = (t.min.z - a.z) * r, t = (t.max.z - a.z) * r) : (s = (t.max.z - a.z) * r, t = (t.min.z - a.z) * r), o > t || s > i ? null : ((s > o || o != o) && (o = s), (t < i || i != i) && (i = t), 0 > i ? null : this.at(0 <= o ? o : i, e)))
        },
        intersectsBox: function() {
            var t = new c;
            return function(e) {
                return null !== this.intersectBox(e, t)
            }
        }(),
        intersectTriangle: function() {
            var t = new c,
                e = new c,
                i = new c,
                n = new c;
            return function(r, a, o, s, c) {
                if (e.subVectors(a, r), i.subVectors(o, r), n.crossVectors(e, i), 0 < (a = this.direction.dot(n))) {
                    if (s) return null;
                    s = 1
                } else {
                    if (!(0 > a)) return null;
                    s = -1, a = -a
                }
                return t.subVectors(this.origin, r), 0 > (r = s * this.direction.dot(i.crossVectors(t, i))) ? null : 0 > (o = s * this.direction.dot(e.cross(t))) || r + o > a ? null : 0 > (r = -s * t.dot(n)) ? null : this.at(r / a, c)
            }
        }(),
        applyMatrix4: function(t) {
            return this.origin.applyMatrix4(t), this.direction.transformDirection(t), this
        },
        equals: function(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
    }), Object.assign(Lt.prototype, {
        set: function(t, e) {
            return this.start.copy(t), this.end.copy(e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.start.copy(t.start), this.end.copy(t.end), this
        },
        getCenter: function(t) {
            return (t || new c).addVectors(this.start, this.end).multiplyScalar(.5)
        },
        delta: function(t) {
            return (t || new c).subVectors(this.end, this.start)
        },
        distanceSq: function() {
            return this.start.distanceToSquared(this.end)
        },
        distance: function() {
            return this.start.distanceTo(this.end)
        },
        at: function(t, e) {
            return e = e || new c, this.delta(e).multiplyScalar(t).add(this.start)
        },
        closestPointToPointParameter: function() {
            var t = new c,
                e = new c;
            return function(i, n) {
                return t.subVectors(i, this.start), e.subVectors(this.end, this.start), i = e.dot(e), i = e.dot(t) / i, n && (i = hr.clamp(i, 0, 1)), i
            }
        }(),
        closestPointToPoint: function(t, e, i) {
            return t = this.closestPointToPointParameter(t, e), i = i || new c, this.delta(i).multiplyScalar(t).add(this.start)
        },
        applyMatrix4: function(t) {
            return this.start.applyMatrix4(t), this.end.applyMatrix4(t), this
        },
        equals: function(t) {
            return t.start.equals(this.start) && t.end.equals(this.end)
        }
    }), Object.assign(Pt, {
        normal: function() {
            var t = new c;
            return function(e, i, n, r) {
                return (r = r || new c).subVectors(n, i), t.subVectors(e, i), r.cross(t), 0 < (e = r.lengthSq()) ? r.multiplyScalar(1 / Math.sqrt(e)) : r.set(0, 0, 0)
            }
        }(),
        barycoordFromPoint: function() {
            var t = new c,
                e = new c,
                i = new c;
            return function(n, r, a, o, s) {
                t.subVectors(o, r), e.subVectors(a, r), i.subVectors(n, r), n = t.dot(t), r = t.dot(e), a = t.dot(i);
                var h = e.dot(e);
                o = e.dot(i);
                var l = n * h - r * r;
                return s = s || new c, 0 === l ? s.set(-2, -1, -1) : (h = (h * a - r * o) * (l = 1 / l), n = (n * o - r * a) * l, s.set(1 - h - n, n, h))
            }
        }(),
        containsPoint: function() {
            var t = new c;
            return function(e, i, n, r) {
                return 0 <= (e = Pt.barycoordFromPoint(e, i, n, r, t)).x && 0 <= e.y && 1 >= e.x + e.y
            }
        }()
    }), Object.assign(Pt.prototype, {
        set: function(t, e, i) {
            return this.a.copy(t), this.b.copy(e), this.c.copy(i), this
        },
        setFromPointsAndIndices: function(t, e, i, n) {
            return this.a.copy(t[e]), this.b.copy(t[i]), this.c.copy(t[n]), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.a.copy(t.a), this.b.copy(t.b), this.c.copy(t.c), this
        },
        area: function() {
            var t = new c,
                e = new c;
            return function() {
                return t.subVectors(this.c, this.b), e.subVectors(this.a, this.b), .5 * t.cross(e).length()
            }
        }(),
        midpoint: function(t) {
            return (t || new c).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        },
        normal: function(t) {
            return Pt.normal(this.a, this.b, this.c, t)
        },
        plane: function(t) {
            return (t || new $).setFromCoplanarPoints(this.a, this.b, this.c)
        },
        barycoordFromPoint: function(t, e) {
            return Pt.barycoordFromPoint(t, this.a, this.b, this.c, e)
        },
        containsPoint: function(t) {
            return Pt.containsPoint(t, this.a, this.b, this.c)
        },
        closestPointToPoint: function() {
            var t = new $,
                e = [new Lt, new Lt, new Lt],
                i = new c,
                n = new c;
            return function(r, a) {
                a = a || new c;
                var o = 1 / 0;
                if (t.setFromCoplanarPoints(this.a, this.b, this.c), t.projectPoint(r, i), !0 === this.containsPoint(i)) a.copy(i);
                else
                    for (e[0].set(this.a, this.b), e[1].set(this.b, this.c), e[2].set(this.c, this.a), r = 0; r < e.length; r++) {
                        e[r].closestPointToPoint(i, !0, n);
                        var s = i.distanceToSquared(n);
                        s < o && (o = s, a.copy(n))
                    }
                return a
            }
        }(),
        equals: function(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }), Ct.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: Ct,
        isMesh: !0,
        setDrawMode: function(t) {
            this.drawMode = t
        },
        copy: function(t) {
            return rt.prototype.copy.call(this, t), this.drawMode = t.drawMode, this
        },
        updateMorphTargets: function() {
            var t = this.geometry;
            if (t.isBufferGeometry) {
                t = t.morphAttributes;
                var e = Object.keys(t);
                if (0 < e.length) {
                    var i = t[e[0]];
                    if (void 0 !== i)
                        for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = i.length; t < e; t++) {
                            var n = i[t].name || String(t);
                            this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
                        }
                }
            } else if (void 0 !== (i = t.morphTargets) && 0 < i.length)
                for (this.morphTargetInfluences = [], this.morphTargetDictionary = {}, t = 0, e = i.length; t < e; t++) n = i[t].name || String(t), this.morphTargetInfluences.push(0), this.morphTargetDictionary[n] = t
        },
        raycast: function() {
            function t(t, e, i, n, r, a, o) {
                return Pt.barycoordFromPoint(t, e, i, n, y), r.multiplyScalar(y.x), a.multiplyScalar(y.y), o.multiplyScalar(y.z), r.add(a).add(o), r.clone()
            }

            function e(t, e, i, n, r, a, o, s) {
                return null === (1 === e.side ? n.intersectTriangle(o, a, r, !0, s) : n.intersectTriangle(r, a, o, 2 !== e.side, s)) ? null : (b.copy(s), b.applyMatrix4(t.matrixWorld), (e = i.ray.origin.distanceTo(b)) < i.near || e > i.far ? null : {
                    distance: e,
                    point: b.clone(),
                    object: t
                })
            }

            function n(i, n, r, a, o, c, h, p) {
                return s.fromBufferAttribute(a, c), l.fromBufferAttribute(a, h), u.fromBufferAttribute(a, p), (i = e(i, i.material, n, r, s, l, u, x)) && (o && (m.fromBufferAttribute(o, c), g.fromBufferAttribute(o, h), v.fromBufferAttribute(o, p), i.uv = t(x, s, l, u, m, g, v)), i.face = new ct(c, h, p, Pt.normal(s, l, u)), i.faceIndex = c), i
            }
            var r = new h,
                a = new Rt,
                o = new Q,
                s = new c,
                l = new c,
                u = new c,
                p = new c,
                d = new c,
                f = new c,
                m = new i,
                g = new i,
                v = new i,
                y = new c,
                x = new c,
                b = new c;
            return function(i, c) {
                var h, y = this.geometry,
                    b = this.material,
                    _ = this.matrixWorld;
                if (void 0 !== b && (null === y.boundingSphere && y.computeBoundingSphere(), o.copy(y.boundingSphere), o.applyMatrix4(_), !1 !== i.ray.intersectsSphere(o) && (r.getInverse(_), a.copy(i.ray).applyMatrix4(r), null === y.boundingBox || !1 !== a.intersectsBox(y.boundingBox))))
                    if (y.isBufferGeometry) {
                        b = y.index;
                        var w, M = y.attributes.position;
                        _ = y.attributes.uv;
                        if (null !== b) {
                            var E = 0;
                            for (w = b.count; E < w; E += 3) {
                                y = b.getX(E);
                                var T = b.getX(E + 1),
                                    S = b.getX(E + 2);
                                (h = n(this, i, a, M, _, y, T, S)) && (h.faceIndex = Math.floor(E / 3), c.push(h))
                            }
                        } else
                            for (E = 0, w = M.count; E < w; E += 3)(h = n(this, i, a, M, _, y = E, T = E + 1, S = E + 2)) && (h.index = y, c.push(h))
                    } else if (y.isGeometry) {
                    _ = Array.isArray(b);
                    E = y.vertices, w = y.faces, 0 < (T = y.faceVertexUvs[0]).length && (M = T);
                    for (var A = 0, R = w.length; A < R; A++) {
                        var L = w[A];
                        if (void 0 !== (h = _ ? b[L.materialIndex] : b)) {
                            T = E[L.a], S = E[L.b];
                            var P = E[L.c];
                            if (!0 === h.morphTargets) {
                                var C = y.morphTargets,
                                    I = this.morphTargetInfluences;
                                s.set(0, 0, 0), l.set(0, 0, 0), u.set(0, 0, 0);
                                for (var U = 0, D = C.length; U < D; U++) {
                                    var N = I[U];
                                    if (0 !== N) {
                                        var O = C[U].vertices;
                                        s.addScaledVector(p.subVectors(O[L.a], T), N), l.addScaledVector(d.subVectors(O[L.b], S), N), u.addScaledVector(f.subVectors(O[L.c], P), N)
                                    }
                                }
                                s.add(T), l.add(S), u.add(P), T = s, S = l, P = u
                            }(h = e(this, h, i, a, T, S, P, x)) && (M && M[A] && (C = M[A], m.copy(C[0]), g.copy(C[1]), v.copy(C[2]), h.uv = t(x, T, S, P, m, g, v)), h.face = L, h.faceIndex = A, c.push(h))
                        }
                    }
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    });
    var Sr = 0;
    Xt.prototype = Object.assign(Object.create(st.prototype), {
        constructor: Xt,
        isArrayCamera: !0
    }), Qt.prototype.isFogExp2 = !0, Qt.prototype.clone = function() {
        return new Qt(this.color.getHex(), this.density)
    }, Qt.prototype.toJSON = function(t) {
        return {
            type: "FogExp2",
            color: this.color.getHex(),
            density: this.density
        }
    }, Kt.prototype.isFog = !0, Kt.prototype.clone = function() {
        return new Kt(this.color.getHex(), this.near, this.far)
    }, Kt.prototype.toJSON = function(t) {
        return {
            type: "Fog",
            color: this.color.getHex(),
            near: this.near,
            far: this.far
        }
    }, $t.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: $t,
        copy: function(t, e) {
            return rt.prototype.copy.call(this, t, e), null !== t.background && (this.background = t.background.clone()), null !== t.fog && (this.fog = t.fog.clone()), null !== t.overrideMaterial && (this.overrideMaterial = t.overrideMaterial.clone()), this.autoUpdate = t.autoUpdate, this.matrixAutoUpdate = t.matrixAutoUpdate, this
        },
        toJSON: function(t) {
            var e = rt.prototype.toJSON.call(this, t);
            return null !== this.background && (e.object.background = this.background.toJSON(t)), null !== this.fog && (e.object.fog = this.fog.toJSON()), e
        }
    }), te.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: te,
        isLensFlare: !0,
        copy: function(t) {
            rt.prototype.copy.call(this, t), this.positionScreen.copy(t.positionScreen), this.customUpdateCallback = t.customUpdateCallback;
            for (var e = 0, i = t.lensFlares.length; e < i; e++) this.lensFlares.push(t.lensFlares[e]);
            return this
        },
        add: function(t, e, i, n, r, a) {
            void 0 === e && (e = -1), void 0 === i && (i = 0), void 0 === a && (a = 1), void 0 === r && (r = new H(16777215)), void 0 === n && (n = 1), i = Math.min(i, Math.max(0, i)), this.lensFlares.push({
                texture: t,
                size: e,
                distance: i,
                x: 0,
                y: 0,
                z: 0,
                scale: 1,
                rotation: 0,
                opacity: a,
                color: r,
                blending: n
            })
        },
        updateLensFlares: function() {
            var t, e = this.lensFlares.length,
                i = 2 * -this.positionScreen.x,
                n = 2 * -this.positionScreen.y;
            for (t = 0; t < e; t++) {
                var r = this.lensFlares[t];
                r.x = this.positionScreen.x + i * r.distance, r.y = this.positionScreen.y + n * r.distance, r.wantedRotation = r.x * Math.PI * .25, r.rotation += .25 * (r.wantedRotation - r.rotation)
            }
        }
    }), ee.prototype = Object.create(X.prototype), ee.prototype.constructor = ee, ee.prototype.isSpriteMaterial = !0, ee.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.rotation = t.rotation, this
    }, ie.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: ie,
        isSprite: !0,
        raycast: function() {
            var t = new c,
                e = new c,
                i = new c;
            return function(n, r) {
                e.setFromMatrixPosition(this.matrixWorld), n.ray.closestPointToPoint(e, t), i.setFromMatrixScale(this.matrixWorld);
                var a = i.x * i.y / 4;
                e.distanceToSquared(t) > a || ((a = n.ray.origin.distanceTo(t)) < n.near || a > n.far || r.push({
                    distance: a,
                    point: t.clone(),
                    face: null,
                    object: this
                }))
            }
        }(),
        clone: function() {
            return new this.constructor(this.material).copy(this)
        }
    }), ne.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: ne,
        copy: function(t) {
            rt.prototype.copy.call(this, t, !1);
            for (var e = 0, i = (t = t.levels).length; e < i; e++) {
                var n = t[e];
                this.addLevel(n.object.clone(), n.distance)
            }
            return this
        },
        addLevel: function(t, e) {
            void 0 === e && (e = 0), e = Math.abs(e);
            for (var i = this.levels, n = 0; n < i.length && !(e < i[n].distance); n++);
            i.splice(n, 0, {
                distance: e,
                object: t
            }), this.add(t)
        },
        getObjectForDistance: function(t) {
            for (var e = this.levels, i = 1, n = e.length; i < n && !(t < e[i].distance); i++);
            return e[i - 1].object
        },
        raycast: function() {
            var t = new c;
            return function(e, i) {
                t.setFromMatrixPosition(this.matrixWorld);
                var n = e.ray.origin.distanceTo(t);
                this.getObjectForDistance(n).raycast(e, i)
            }
        }(),
        update: function() {
            var t = new c,
                e = new c;
            return function(i) {
                var n = this.levels;
                if (1 < n.length) {
                    t.setFromMatrixPosition(i.matrixWorld), e.setFromMatrixPosition(this.matrixWorld), i = t.distanceTo(e), n[0].object.visible = !0;
                    for (var r = 1, a = n.length; r < a && i >= n[r].distance; r++) n[r - 1].object.visible = !1, n[r].object.visible = !0;
                    for (; r < a; r++) n[r].object.visible = !1
                }
            }
        }(),
        toJSON: function(t) {
            (t = rt.prototype.toJSON.call(this, t)).object.levels = [];
            for (var e = this.levels, i = 0, n = e.length; i < n; i++) {
                var r = e[i];
                t.object.levels.push({
                    object: r.object.uuid,
                    distance: r.distance
                })
            }
            return t
        }
    }), Object.assign(re.prototype, {
        calculateInverses: function() {
            this.boneInverses = [];
            for (var t = 0, e = this.bones.length; t < e; t++) {
                var i = new h;
                this.bones[t] && i.getInverse(this.bones[t].matrixWorld), this.boneInverses.push(i)
            }
        },
        pose: function() {
            var t, e, i = 0;
            for (e = this.bones.length; i < e; i++)(t = this.bones[i]) && t.matrixWorld.getInverse(this.boneInverses[i]);
            for (i = 0, e = this.bones.length; i < e; i++)(t = this.bones[i]) && (t.parent && t.parent.isBone ? (t.matrix.getInverse(t.parent.matrixWorld), t.matrix.multiply(t.matrixWorld)) : t.matrix.copy(t.matrixWorld), t.matrix.decompose(t.position, t.quaternion, t.scale))
        },
        update: function() {
            var t = new h,
                e = new h;
            return function() {
                for (var i = this.bones, n = this.boneInverses, r = this.boneMatrices, a = this.boneTexture, o = 0, s = i.length; o < s; o++) t.multiplyMatrices(i[o] ? i[o].matrixWorld : e, n[o]), t.toArray(r, 16 * o);
                void 0 !== a && (a.needsUpdate = !0)
            }
        }(),
        clone: function() {
            return new re(this.bones, this.boneInverses)
        }
    }), ae.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: ae,
        isBone: !0
    }), oe.prototype = Object.assign(Object.create(Ct.prototype), {
        constructor: oe,
        isSkinnedMesh: !0,
        initBones: function() {
            var t, e = [];
            if (this.geometry && void 0 !== this.geometry.bones) {
                var i = 0;
                for (t = this.geometry.bones.length; i < t; i++) {
                    var n = this.geometry.bones[i],
                        r = new ae;
                    e.push(r), r.name = n.name, r.position.fromArray(n.pos), r.quaternion.fromArray(n.rotq), void 0 !== n.scl && r.scale.fromArray(n.scl)
                }
                for (i = 0, t = this.geometry.bones.length; i < t; i++) - 1 !== (n = this.geometry.bones[i]).parent && null !== n.parent && void 0 !== e[n.parent] ? e[n.parent].add(e[i]) : this.add(e[i])
            }
            return this.updateMatrixWorld(!0), e
        },
        bind: function(t, e) {
            this.skeleton = t, void 0 === e && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), e = this.matrixWorld), this.bindMatrix.copy(e), this.bindMatrixInverse.getInverse(e)
        },
        pose: function() {
            this.skeleton.pose()
        },
        normalizeSkinWeights: function() {
            var t;
            if (this.geometry && this.geometry.isGeometry)
                for (t = 0; t < this.geometry.skinWeights.length; t++) {
                    var e = 1 / (i = this.geometry.skinWeights[t]).lengthManhattan();
                    1 / 0 !== e ? i.multiplyScalar(e) : i.set(1, 0, 0, 0)
                } else if (this.geometry && this.geometry.isBufferGeometry) {
                    var i = new r,
                        n = this.geometry.attributes.skinWeight;
                    for (t = 0; t < n.count; t++) i.x = n.getX(t), i.y = n.getY(t), i.z = n.getZ(t), i.w = n.getW(t), 1 / 0 !== (e = 1 / i.lengthManhattan()) ? i.multiplyScalar(e) : i.set(1, 0, 0, 0), n.setXYZW(t, i.x, i.y, i.z, i.w)
                }
        },
        updateMatrixWorld: function(t) {
            Ct.prototype.updateMatrixWorld.call(this, t), "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
        },
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), se.prototype = Object.create(X.prototype), se.prototype.constructor = se, se.prototype.isLineBasicMaterial = !0, se.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.linewidth = t.linewidth, this.linecap = t.linecap, this.linejoin = t.linejoin, this
    }, ce.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: ce,
        isLine: !0,
        raycast: function() {
            var t = new h,
                e = new Rt,
                i = new Q;
            return function(n, r) {
                var a = (a = n.linePrecision) * a,
                    o = this.geometry,
                    s = this.matrixWorld;
                if (null === o.boundingSphere && o.computeBoundingSphere(), i.copy(o.boundingSphere), i.applyMatrix4(s), !1 !== n.ray.intersectsSphere(i)) {
                    t.getInverse(s), e.copy(n.ray).applyMatrix4(t);
                    var h = new c,
                        l = new c,
                        u = (s = new c, new c),
                        p = this && this.isLineSegments ? 2 : 1;
                    if (o.isBufferGeometry) {
                        var d = o.index,
                            f = o.attributes.position.array;
                        if (null !== d)
                            for (var m = d.array, g = (o = 0, m.length - 1); o < g; o += p) d = m[o + 1], h.fromArray(f, 3 * m[o]), l.fromArray(f, 3 * d), (d = e.distanceSqToSegment(h, l, u, s)) > a || (u.applyMatrix4(this.matrixWorld), (d = n.ray.origin.distanceTo(u)) < n.near || d > n.far || r.push({
                                distance: d,
                                point: s.clone().applyMatrix4(this.matrixWorld),
                                index: o,
                                face: null,
                                faceIndex: null,
                                object: this
                            }));
                        else
                            for (o = 0, g = f.length / 3 - 1; o < g; o += p) h.fromArray(f, 3 * o), l.fromArray(f, 3 * o + 3), (d = e.distanceSqToSegment(h, l, u, s)) > a || (u.applyMatrix4(this.matrixWorld), (d = n.ray.origin.distanceTo(u)) < n.near || d > n.far || r.push({
                                distance: d,
                                point: s.clone().applyMatrix4(this.matrixWorld),
                                index: o,
                                face: null,
                                faceIndex: null,
                                object: this
                            }))
                    } else if (o.isGeometry)
                        for (l = (h = o.vertices).length, o = 0; o < l - 1; o += p)(d = e.distanceSqToSegment(h[o], h[o + 1], u, s)) > a || (u.applyMatrix4(this.matrixWorld), (d = n.ray.origin.distanceTo(u)) < n.near || d > n.far || r.push({
                            distance: d,
                            point: s.clone().applyMatrix4(this.matrixWorld),
                            index: o,
                            face: null,
                            faceIndex: null,
                            object: this
                        }))
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), he.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: he,
        isLineSegments: !0
    }), le.prototype = Object.assign(Object.create(ce.prototype), {
        constructor: le,
        isLineLoop: !0
    }), ue.prototype = Object.create(X.prototype), ue.prototype.constructor = ue, ue.prototype.isPointsMaterial = !0, ue.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.size = t.size, this.sizeAttenuation = t.sizeAttenuation, this
    }, pe.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: pe,
        isPoints: !0,
        raycast: function() {
            var t = new h,
                e = new Rt,
                i = new Q;
            return function(n, r) {
                function a(t, i) {
                    var a = e.distanceSqToPoint(t);
                    if (a < u) {
                        (t = e.closestPointToPoint(t)).applyMatrix4(h);
                        var s = n.ray.origin.distanceTo(t);
                        s < n.near || s > n.far || r.push({
                            distance: s,
                            distanceToRay: Math.sqrt(a),
                            point: t.clone(),
                            index: i,
                            face: null,
                            object: o
                        })
                    }
                }
                var o = this,
                    s = this.geometry,
                    h = this.matrixWorld,
                    l = n.params.Points.threshold;
                if (null === s.boundingSphere && s.computeBoundingSphere(), i.copy(s.boundingSphere), i.applyMatrix4(h), i.radius += l, !1 !== n.ray.intersectsSphere(i)) {
                    t.getInverse(h), e.copy(n.ray).applyMatrix4(t);
                    var u = (l = l / ((this.scale.x + this.scale.y + this.scale.z) / 3)) * l;
                    l = new c;
                    if (s.isBufferGeometry) {
                        var p = s.index;
                        s = s.attributes.position.array;
                        if (null !== p)
                            for (var d = p.array, f = (p = 0, d.length); p < f; p++) {
                                var m = d[p];
                                l.fromArray(s, 3 * m), a(l, m)
                            } else
                                for (p = 0, d = s.length / 3; p < d; p++) l.fromArray(s, 3 * p), a(l, p)
                    } else
                        for (p = 0, d = (l = s.vertices).length; p < d; p++) a(l[p], p)
                }
            }
        }(),
        clone: function() {
            return new this.constructor(this.geometry, this.material).copy(this)
        }
    }), de.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: de
    }), fe.prototype = Object.create(n.prototype), fe.prototype.constructor = fe, me.prototype = Object.create(n.prototype), me.prototype.constructor = me, me.prototype.isCompressedTexture = !0, ge.prototype = Object.create(n.prototype), ge.prototype.constructor = ge, ge.prototype.isDepthTexture = !0, ve.prototype = Object.create(wt.prototype), ve.prototype.constructor = ve, ye.prototype = Object.create(ht.prototype), ye.prototype.constructor = ye, xe.prototype = Object.create(wt.prototype), xe.prototype.constructor = xe, be.prototype = Object.create(ht.prototype), be.prototype.constructor = be, _e.prototype = Object.create(wt.prototype), _e.prototype.constructor = _e, we.prototype = Object.create(ht.prototype), we.prototype.constructor = we, Me.prototype = Object.create(_e.prototype), Me.prototype.constructor = Me, Ee.prototype = Object.create(ht.prototype), Ee.prototype.constructor = Ee, Te.prototype = Object.create(_e.prototype), Te.prototype.constructor = Te, Se.prototype = Object.create(ht.prototype), Se.prototype.constructor = Se, Ae.prototype = Object.create(_e.prototype), Ae.prototype.constructor = Ae, Re.prototype = Object.create(ht.prototype), Re.prototype.constructor = Re, Le.prototype = Object.create(_e.prototype), Le.prototype.constructor = Le, Pe.prototype = Object.create(ht.prototype), Pe.prototype.constructor = Pe, Ce.prototype = Object.create(wt.prototype), Ce.prototype.constructor = Ce, Ie.prototype = Object.create(ht.prototype), Ie.prototype.constructor = Ie, Ue.prototype = Object.create(wt.prototype), Ue.prototype.constructor = Ue, De.prototype = Object.create(ht.prototype), De.prototype.constructor = De, Ne.prototype = Object.create(wt.prototype), Ne.prototype.constructor = Ne;
    var Ar = {
        area: function(t) {
            for (var e = t.length, i = 0, n = e - 1, r = 0; r < e; n = r++) i += t[n].x * t[r].y - t[r].x * t[n].y;
            return .5 * i
        },
        triangulate: function(t, e) {
            var i = t.length;
            if (3 > i) return null;
            var n, r = [],
                a = [],
                o = [];
            if (0 < Ar.area(t))
                for (n = 0; n < i; n++) a[n] = n;
            else
                for (n = 0; n < i; n++) a[n] = i - 1 - n;
            var s = 2 * i;
            for (n = i - 1; 2 < i;) {
                if (0 >= s--) {
                    console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                    break
                }
                var c = n;
                i <= c && (c = 0), i <= (n = c + 1) && (n = 0);
                var h = n + 1;
                i <= h && (h = 0);
                t: {
                    var l, u = t[a[c]].x,
                        p = t[a[c]].y,
                        d = t[a[n]].x,
                        f = t[a[n]].y,
                        m = t[a[h]].x,
                        g = t[a[h]].y;
                    if (0 >= (d - u) * (g - p) - (f - p) * (m - u)) var v = !1;
                    else {
                        var y = m - d,
                            x = g - f,
                            b = u - m,
                            _ = p - g,
                            w = d - u;
                        for (v = f - p, l = 0; l < i; l++) {
                            var M = t[a[l]].x,
                                E = t[a[l]].y;
                            if (!(M === u && E === p || M === d && E === f || M === m && E === g)) {
                                var T = E - p,
                                    S = M - d,
                                    A = E - f;
                                if (T = w * T - v * (M - u), M = b * (E -= g) - _ * (M -= m), (A = y * A - x * S) >= -Number.EPSILON && M >= -Number.EPSILON && T >= -Number.EPSILON) {
                                    v = !1;
                                    break t
                                }
                            }
                        }
                        v = !0
                    }
                }
                if (v) {
                    for (r.push([t[a[c]], t[a[n]], t[a[h]]]), o.push([a[c], a[n], a[h]]), c = n, h = n + 1; h < i; c++, h++) a[c] = a[h];
                    s = 2 * --i
                }
            }
            return e ? o : r
        },
        triangulateShape: function(t, e) {
            function i(t) {
                var e = t.length;
                2 < e && t[e - 1].equals(t[0]) && t.pop()
            }

            function n(t, e, i) {
                return t.x !== e.x ? t.x < e.x ? t.x <= i.x && i.x <= e.x : e.x <= i.x && i.x <= t.x : t.y < e.y ? t.y <= i.y && i.y <= e.y : e.y <= i.y && i.y <= t.y
            }

            function r(t, e, i, r, a) {
                var o = e.x - t.x,
                    s = e.y - t.y,
                    c = r.x - i.x,
                    h = r.y - i.y,
                    l = t.x - i.x,
                    u = t.y - i.y,
                    p = s * c - o * h,
                    d = s * l - o * u;
                if (Math.abs(p) > Number.EPSILON) {
                    if (0 < p) {
                        if (0 > d || d > p) return [];
                        if (0 > (c = h * l - c * u) || c > p) return []
                    } else {
                        if (0 < d || d < p) return [];
                        if (0 < (c = h * l - c * u) || c < p) return []
                    }
                    return 0 === c ? !a || 0 !== d && d !== p ? [t] : [] : c === p ? !a || 0 !== d && d !== p ? [e] : [] : 0 === d ? [i] : d === p ? [r] : (a = c / p, [{
                        x: t.x + a * o,
                        y: t.y + a * s
                    }])
                }
                return 0 !== d || h * l != c * u ? [] : (s = 0 === o && 0 === s, c = 0 === c && 0 === h, s && c ? t.x !== i.x || t.y !== i.y ? [] : [t] : s ? n(i, r, t) ? [t] : [] : c ? n(t, e, i) ? [i] : [] : (0 !== o ? (t.x < e.x ? (o = t, c = t.x, s = e, t = e.x) : (o = e, c = e.x, s = t, t = t.x), i.x < r.x ? (e = i, p = i.x, h = r, i = r.x) : (e = r, p = r.x, h = i, i = i.x)) : (t.y < e.y ? (o = t, c = t.y, s = e, t = e.y) : (o = e, c = e.y, s = t, t = t.y), i.y < r.y ? (e = i, p = i.y, h = r, i = r.y) : (e = r, p = r.y, h = i, i = i.y)), c <= p ? t < p ? [] : t === p ? a ? [] : [e] : t <= i ? [e, s] : [e, h] : c > i ? [] : c === i ? a ? [] : [o] : t <= i ? [o, s] : [o, h]))
            }

            function a(t, e, i, n) {
                var r = e.x - t.x,
                    a = e.y - t.y;
                e = i.x - t.x, i = i.y - t.y;
                var o = n.x - t.x;
                return n = n.y - t.y, t = r * i - a * e, r = r * n - a * o, Math.abs(t) > Number.EPSILON ? (e = o * i - n * e, 0 < t ? 0 <= r && 0 <= e : 0 <= r || 0 <= e) : 0 < r
            }
            i(t), e.forEach(i);
            var o, s = {},
                c = t.concat(),
                h = 0;
            for (o = e.length; h < o; h++) Array.prototype.push.apply(c, e[h]);
            for (h = 0, o = c.length; h < o; h++) {
                var l = c[h].x + ":" + c[h].y;
                void 0 !== s[l] && console.warn("THREE.ShapeUtils: Duplicate point", l, h), s[l] = h
            }
            for (h = function(t, e) {
                    function i(t, e) {
                        var i = h.length - 1,
                            n = t - 1;
                        0 > n && (n = i);
                        var r = t + 1;
                        return r > i && (r = 0), !!(i = a(h[t], h[n], h[r], y[e])) && (i = y.length - 1, 0 > (n = e - 1) && (n = i), (r = e + 1) > i && (r = 0), !!(i = a(y[e], y[n], y[r], h[t])))
                    }

                    function n(t, e) {
                        var i;
                        for (i = 0; i < h.length; i++) {
                            var n = i + 1;
                            if (n %= h.length, 0 < (n = r(t, e, h[i], h[n], !0)).length) return !0
                        }
                        return !1
                    }

                    function o(t, i) {
                        var n, a;
                        for (n = 0; n < l.length; n++) {
                            var o = e[l[n]];
                            for (a = 0; a < o.length; a++) {
                                var s = a + 1;
                                if (s %= o.length, 0 < (s = r(t, i, o[a], o[s], !0)).length) return !0
                            }
                        }
                        return !1
                    }
                    var s, c, h = t.concat(),
                        l = [];
                    t = [];
                    var u, p = 0;
                    for (s = e.length; p < s; p++) l.push(p);
                    for (var d = 0, f = 2 * l.length; 0 < l.length;) {
                        if (0 > --f) {
                            console.log('THREE.ShapeUtils: Infinite Loop! Holes left:" + indepHoles.length + ", Probably Hole outside Shape!');
                            break
                        }
                        for (c = d; c < h.length; c++) {
                            var m = h[c];
                            for (s = -1, p = 0; p < l.length; p++) {
                                var g = l[p],
                                    v = m.x + ":" + m.y + ":" + g;
                                if (void 0 === t[v]) {
                                    var y = e[g];
                                    for (u = 0; u < y.length; u++)
                                        if (g = y[u], i(c, u) && !n(m, g) && !o(m, g)) {
                                            s = u, l.splice(p, 1), d = h.slice(0, c + 1), g = h.slice(c), u = y.slice(s);
                                            var x = y.slice(0, s + 1);
                                            h = d.concat(u).concat(x).concat(g), d = c;
                                            break
                                        } if (0 <= s) break;
                                    t[v] = !0
                                }
                            }
                            if (0 <= s) break
                        }
                    }
                    return h
                }(t, e), c = Ar.triangulate(h, !1), h = 0, o = c.length; h < o; h++)
                for (e = c[h], t = 0; 3 > t; t++) void 0 !== (l = s[l = e[t].x + ":" + e[t].y]) && (e[t] = l);
            return c.concat()
        },
        isClockWise: function(t) {
            return 0 > Ar.area(t)
        }
    };
    Oe.prototype = Object.create(ht.prototype), Oe.prototype.constructor = Oe, Be.prototype = Object.create(wt.prototype), Be.prototype.constructor = Be, Be.prototype.getArrays = function() {
        var t, e, i;
        return {
            position: t = (t = this.getAttribute("position")) ? Array.prototype.slice.call(t.array) : [],
            uv: e = (e = this.getAttribute("uv")) ? Array.prototype.slice.call(e.array) : [],
            index: i = (i = this.index) ? Array.prototype.slice.call(i.array) : []
        }
    }, Be.prototype.addShapeList = function(t, e) {
        var i = t.length;
        e.arrays = this.getArrays();
        for (var n = 0; n < i; n++) this.addShape(t[n], e);
        this.setIndex(e.arrays.index), this.addAttribute("position", new yt(e.arrays.position, 3)), this.addAttribute("uv", new yt(e.arrays.uv, 2))
    }, Be.prototype.addShape = function(t, e) {
        function n(t, e, i) {
            return e || console.error("THREE.ExtrudeGeometry: vec does not exist"), e.clone().multiplyScalar(i).add(t)
        }

        function r(t, e, n) {
            var r = t.x - e.x,
                a = t.y - e.y,
                o = n.x - t.x,
                s = n.y - t.y,
                c = r * r + a * a;
            if (Math.abs(r * s - a * o) > Number.EPSILON) {
                var h = Math.sqrt(c),
                    l = Math.sqrt(o * o + s * s);
                c = e.x - a / h;
                if (e = e.y + r / h, 2 >= (a = (o = c + r * (s = ((n.x - s / l - c) * s - (n.y + o / l - e) * o) / (r * s - a * o)) - t.x) * o + (r = e + a * s - t.y) * r)) return new i(o, r);
                a = Math.sqrt(a / 2)
            } else t = !1, r > Number.EPSILON ? o > Number.EPSILON && (t = !0) : r < -Number.EPSILON ? o < -Number.EPSILON && (t = !0) : Math.sign(a) === Math.sign(s) && (t = !0), t ? (o = -a, a = Math.sqrt(c)) : (o = r, r = a, a = Math.sqrt(c / 2));
            return new i(o / a, r / a)
        }

        function a(t, e) {
            for (H = t.length; 0 <= --H;) {
                var i = H,
                    n = H - 1;
                0 > n && (n = t.length - 1);
                var r, a = _ + 2 * y;
                for (r = 0; r < a; r++) {
                    var o = z * r,
                        s = e + n + o,
                        c = e + n + (p = z * (r + 1)),
                        p = e + i + p;
                    h(e + i + o), h(s), h(p), h(s), h(c), h(p), o = u.length / 3, l((o = E.generateSideWallUV(C, u, o - 6, o - 3, o - 2, o - 1))[0]), l(o[1]), l(o[3]), l(o[1]), l(o[2]), l(o[3])
                }
            }
        }

        function o(t, e, i) {
            f.push(t), f.push(e), f.push(i)
        }

        function s(t, e, i) {
            h(t), h(e), h(i), t = u.length / 3, l((t = E.generateTopUV(C, u, t - 3, t - 2, t - 1))[0]), l(t[1]), l(t[2])
        }

        function h(t) {
            p.push(u.length / 3), u.push(f[3 * t + 0]), u.push(f[3 * t + 1]), u.push(f[3 * t + 2])
        }

        function l(t) {
            d.push(t.x), d.push(t.y)
        }
        var u = (m = e.arrays ? e.arrays : this.getArrays()).position,
            p = m.index,
            d = m.uv,
            f = [],
            m = void 0 !== e.amount ? e.amount : 100,
            g = void 0 !== e.bevelThickness ? e.bevelThickness : 6,
            v = void 0 !== e.bevelSize ? e.bevelSize : g - 2,
            y = void 0 !== e.bevelSegments ? e.bevelSegments : 3,
            x = void 0 === e.bevelEnabled || e.bevelEnabled,
            b = void 0 !== e.curveSegments ? e.curveSegments : 12,
            _ = void 0 !== e.steps ? e.steps : 1,
            w = e.extrudePath,
            M = !1,
            E = void 0 !== e.UVGenerator ? e.UVGenerator : Oe.WorldUVGenerator;
        if (w) {
            var T = w.getSpacedPoints(_);
            M = !0, x = !1;
            var S = void 0 !== e.frames ? e.frames : w.computeFrenetFrames(_, !1),
                A = new c,
                R = new c,
                L = new c
        }
        x || (v = g = y = 0);
        var P, C = this;
        t = (b = t.extractPoints(b)).shape;
        var I = b.holes;
        if (!Ar.isClockWise(t)) {
            t = t.reverse();
            var U = 0;
            for (P = I.length; U < P; U++) {
                var D = I[U];
                Ar.isClockWise(D) && (I[U] = D.reverse())
            }
        }
        var N = Ar.triangulateShape(t, I),
            O = t;
        for (U = 0, P = I.length; U < P; U++) D = I[U], t = t.concat(D);
        var B, F, z = t.length,
            G = N.length,
            H = (b = [], 0),
            V = O.length,
            k = V - 1;
        for (B = H + 1; H < V; H++, k++, B++) k === V && (k = 0), B === V && (B = 0), b[H] = r(O[H], O[k], O[B]);
        w = [];
        var j = b.concat();
        for (U = 0, P = I.length; U < P; U++) {
            D = I[U];
            var W = [];
            for (H = 0, k = (V = D.length) - 1, B = H + 1; H < V; H++, k++, B++) k === V && (k = 0), B === V && (B = 0), W[H] = r(D[H], D[k], D[B]);
            w.push(W), j = j.concat(W)
        }
        for (k = 0; k < y; k++) {
            V = k / y;
            var X = g * Math.cos(V * Math.PI / 2);
            for (B = v * Math.sin(V * Math.PI / 2), H = 0, V = O.length; H < V; H++) {
                var q = n(O[H], b[H], B);
                o(q.x, q.y, -X)
            }
            for (U = 0, P = I.length; U < P; U++)
                for (D = I[U], W = w[U], H = 0, V = D.length; H < V; H++) o((q = n(D[H], W[H], B)).x, q.y, -X)
        }
        for (B = v, H = 0; H < z; H++) q = x ? n(t[H], j[H], B) : t[H], M ? (R.copy(S.normals[0]).multiplyScalar(q.x), A.copy(S.binormals[0]).multiplyScalar(q.y), L.copy(T[0]).add(R).add(A), o(L.x, L.y, L.z)) : o(q.x, q.y, 0);
        for (V = 1; V <= _; V++)
            for (H = 0; H < z; H++) q = x ? n(t[H], j[H], B) : t[H], M ? (R.copy(S.normals[V]).multiplyScalar(q.x), A.copy(S.binormals[V]).multiplyScalar(q.y), L.copy(T[V]).add(R).add(A), o(L.x, L.y, L.z)) : o(q.x, q.y, m / _ * V);
        for (k = y - 1; 0 <= k; k--) {
            for (V = k / y, X = g * Math.cos(V * Math.PI / 2), B = v * Math.sin(V * Math.PI / 2), H = 0, V = O.length; H < V; H++) o((q = n(O[H], b[H], B)).x, q.y, m + X);
            for (U = 0, P = I.length; U < P; U++)
                for (D = I[U], W = w[U], H = 0, V = D.length; H < V; H++) q = n(D[H], W[H], B), M ? o(q.x, q.y + T[_ - 1].y, T[_ - 1].x + X) : o(q.x, q.y, m + X)
        }! function() {
            var t = u.length / 3;
            if (x) {
                var i = 0 * z;
                for (H = 0; H < G; H++) s((F = N[H])[2] + i, F[1] + i, F[0] + i);
                for (i = z * (_ + 2 * y), H = 0; H < G; H++) s((F = N[H])[0] + i, F[1] + i, F[2] + i)
            } else {
                for (H = 0; H < G; H++) s((F = N[H])[2], F[1], F[0]);
                for (H = 0; H < G; H++) s((F = N[H])[0] + z * _, F[1] + z * _, F[2] + z * _)
            }
            C.addGroup(t, u.length / 3 - t, void 0 !== e.material ? e.material : 0)
        }(),
        function() {
            var t = u.length / 3,
                i = 0;
            for (a(O, i), i += O.length, U = 0, P = I.length; U < P; U++) a(D = I[U], i), i += D.length;
            C.addGroup(t, u.length / 3 - t, void 0 !== e.extrudeMaterial ? e.extrudeMaterial : 1)
        }(), e.arrays || (this.setIndex(p), this.addAttribute("position", new yt(u, 3)), this.addAttribute("uv", new yt(e.arrays.uv, 2)))
    }, Oe.WorldUVGenerator = {
        generateTopUV: function(t, e, n, r, a) {
            t = e[3 * r], r = e[3 * r + 1];
            var o = e[3 * a];
            return a = e[3 * a + 1], [new i(e[3 * n], e[3 * n + 1]), new i(t, r), new i(o, a)]
        },
        generateSideWallUV: function(t, e, n, r, a, o) {
            t = e[3 * n];
            var s = e[3 * n + 1];
            n = e[3 * n + 2];
            var c = e[3 * r],
                h = e[3 * r + 1];
            r = e[3 * r + 2];
            var l = e[3 * a],
                u = e[3 * a + 1];
            a = e[3 * a + 2];
            var p = e[3 * o],
                d = e[3 * o + 1];
            return e = e[3 * o + 2], .01 > Math.abs(s - h) ? [new i(t, 1 - n), new i(c, 1 - r), new i(l, 1 - a), new i(p, 1 - e)] : [new i(s, 1 - n), new i(h, 1 - r), new i(u, 1 - a), new i(d, 1 - e)]
        }
    }, Fe.prototype = Object.create(ht.prototype), Fe.prototype.constructor = Fe, ze.prototype = Object.create(Be.prototype), ze.prototype.constructor = ze, Ge.prototype = Object.create(ht.prototype), Ge.prototype.constructor = Ge, He.prototype = Object.create(wt.prototype), He.prototype.constructor = He, Ve.prototype = Object.create(ht.prototype), Ve.prototype.constructor = Ve, ke.prototype = Object.create(wt.prototype), ke.prototype.constructor = ke, je.prototype = Object.create(ht.prototype), je.prototype.constructor = je, We.prototype = Object.create(wt.prototype), We.prototype.constructor = We, Xe.prototype = Object.create(ht.prototype), Xe.prototype.constructor = Xe, qe.prototype = Object.create(wt.prototype), qe.prototype.constructor = qe, Ye.prototype = Object.create(wt.prototype), Ye.prototype.constructor = Ye, Ze.prototype = Object.create(ht.prototype), Ze.prototype.constructor = Ze, Je.prototype = Object.create(wt.prototype), Je.prototype.constructor = Je, Qe.prototype = Object.create(Ze.prototype), Qe.prototype.constructor = Qe, Ke.prototype = Object.create(Je.prototype), Ke.prototype.constructor = Ke, $e.prototype = Object.create(ht.prototype), $e.prototype.constructor = $e, ti.prototype = Object.create(wt.prototype), ti.prototype.constructor = ti;
    var Rr = Object.freeze({
        WireframeGeometry: ve,
        ParametricGeometry: ye,
        ParametricBufferGeometry: xe,
        TetrahedronGeometry: we,
        TetrahedronBufferGeometry: Me,
        OctahedronGeometry: Ee,
        OctahedronBufferGeometry: Te,
        IcosahedronGeometry: Se,
        IcosahedronBufferGeometry: Ae,
        DodecahedronGeometry: Re,
        DodecahedronBufferGeometry: Le,
        PolyhedronGeometry: be,
        PolyhedronBufferGeometry: _e,
        TubeGeometry: Pe,
        TubeBufferGeometry: Ce,
        TorusKnotGeometry: Ie,
        TorusKnotBufferGeometry: Ue,
        TorusGeometry: De,
        TorusBufferGeometry: Ne,
        TextGeometry: Fe,
        TextBufferGeometry: ze,
        SphereGeometry: Ge,
        SphereBufferGeometry: He,
        RingGeometry: Ve,
        RingBufferGeometry: ke,
        PlaneGeometry: Tt,
        PlaneBufferGeometry: St,
        LatheGeometry: je,
        LatheBufferGeometry: We,
        ShapeGeometry: Xe,
        ShapeBufferGeometry: qe,
        ExtrudeGeometry: Oe,
        ExtrudeBufferGeometry: Be,
        EdgesGeometry: Ye,
        ConeGeometry: Qe,
        ConeBufferGeometry: Ke,
        CylinderGeometry: Ze,
        CylinderBufferGeometry: Je,
        CircleGeometry: $e,
        CircleBufferGeometry: ti,
        BoxGeometry: Mt,
        BoxBufferGeometry: Et
    });
    ei.prototype = Object.create(X.prototype), ei.prototype.constructor = ei, ei.prototype.isShadowMaterial = !0, ii.prototype = Object.create(q.prototype), ii.prototype.constructor = ii, ii.prototype.isRawShaderMaterial = !0, ni.prototype = Object.create(X.prototype), ni.prototype.constructor = ni, ni.prototype.isMeshStandardMaterial = !0, ni.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.defines = {
            STANDARD: ""
        }, this.color.copy(t.color), this.roughness = t.roughness, this.metalness = t.metalness, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.roughnessMap = t.roughnessMap, this.metalnessMap = t.metalnessMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.envMapIntensity = t.envMapIntensity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, ri.prototype = Object.create(ni.prototype), ri.prototype.constructor = ri, ri.prototype.isMeshPhysicalMaterial = !0, ri.prototype.copy = function(t) {
        return ni.prototype.copy.call(this, t), this.defines = {
            PHYSICAL: ""
        }, this.reflectivity = t.reflectivity, this.clearCoat = t.clearCoat, this.clearCoatRoughness = t.clearCoatRoughness, this
    }, ai.prototype = Object.create(X.prototype), ai.prototype.constructor = ai, ai.prototype.isMeshPhongMaterial = !0, ai.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.specular.copy(t.specular), this.shininess = t.shininess, this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, oi.prototype = Object.create(ai.prototype), oi.prototype.constructor = oi, oi.prototype.isMeshToonMaterial = !0, oi.prototype.copy = function(t) {
        return ai.prototype.copy.call(this, t), this.gradientMap = t.gradientMap, this
    }, si.prototype = Object.create(X.prototype), si.prototype.constructor = si, si.prototype.isMeshNormalMaterial = !0, si.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.bumpMap = t.bumpMap, this.bumpScale = t.bumpScale, this.normalMap = t.normalMap, this.normalScale.copy(t.normalScale), this.displacementMap = t.displacementMap, this.displacementScale = t.displacementScale, this.displacementBias = t.displacementBias, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, ci.prototype = Object.create(X.prototype), ci.prototype.constructor = ci, ci.prototype.isMeshLambertMaterial = !0, ci.prototype.copy = function(t) {
        return X.prototype.copy.call(this, t), this.color.copy(t.color), this.map = t.map, this.lightMap = t.lightMap, this.lightMapIntensity = t.lightMapIntensity, this.aoMap = t.aoMap, this.aoMapIntensity = t.aoMapIntensity, this.emissive.copy(t.emissive), this.emissiveMap = t.emissiveMap, this.emissiveIntensity = t.emissiveIntensity, this.specularMap = t.specularMap, this.alphaMap = t.alphaMap, this.envMap = t.envMap, this.combine = t.combine, this.reflectivity = t.reflectivity, this.refractionRatio = t.refractionRatio, this.wireframe = t.wireframe, this.wireframeLinewidth = t.wireframeLinewidth, this.wireframeLinecap = t.wireframeLinecap, this.wireframeLinejoin = t.wireframeLinejoin, this.skinning = t.skinning, this.morphTargets = t.morphTargets, this.morphNormals = t.morphNormals, this
    }, hi.prototype = Object.create(se.prototype), hi.prototype.constructor = hi, hi.prototype.isLineDashedMaterial = !0, hi.prototype.copy = function(t) {
        return se.prototype.copy.call(this, t), this.scale = t.scale, this.dashSize = t.dashSize, this.gapSize = t.gapSize, this
    };
    var Lr = Object.freeze({
            ShadowMaterial: ei,
            SpriteMaterial: ee,
            RawShaderMaterial: ii,
            ShaderMaterial: q,
            PointsMaterial: ue,
            MeshPhysicalMaterial: ri,
            MeshStandardMaterial: ni,
            MeshPhongMaterial: ai,
            MeshToonMaterial: oi,
            MeshNormalMaterial: si,
            MeshLambertMaterial: ci,
            MeshDepthMaterial: Y,
            MeshDistanceMaterial: Z,
            MeshBasicMaterial: At,
            LineDashedMaterial: hi,
            LineBasicMaterial: se,
            Material: X
        }),
        Pr = {
            enabled: !1,
            files: {},
            add: function(t, e) {
                !1 !== this.enabled && (this.files[t] = e)
            },
            get: function(t) {
                if (!1 !== this.enabled) return this.files[t]
            },
            remove: function(t) {
                delete this.files[t]
            },
            clear: function() {
                this.files = {}
            }
        },
        Cr = new li;
    Object.assign(ui.prototype, {
        load: function(t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
            var r = this,
                a = Pr.get(t);
            if (void 0 !== a) return r.manager.itemStart(t), setTimeout(function() {
                e && e(a), r.manager.itemEnd(t)
            }, 0), a;
            if (c = t.match(/^data:(.*?)(;base64)?,(.*)$/)) {
                var o = c[1],
                    s = !!c[2],
                    c = c[3];
                c = window.decodeURIComponent(c);
                s && (c = window.atob(c));
                try {
                    var h = (this.responseType || "").toLowerCase();
                    switch (h) {
                        case "arraybuffer":
                        case "blob":
                            var l = new ArrayBuffer(c.length),
                                u = new Uint8Array(l);
                            for (s = 0; s < c.length; s++) u[s] = c.charCodeAt(s);
                            "blob" === h && (l = new Blob([l], {
                                type: o
                            }));
                            break;
                        case "document":
                            l = (new DOMParser).parseFromString(c, o);
                            break;
                        case "json":
                            l = JSON.parse(c);
                            break;
                        default:
                            l = c
                    }
                    window.setTimeout(function() {
                        e && e(l), r.manager.itemEnd(t)
                    }, 0)
                } catch (e) {
                    window.setTimeout(function() {
                        n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
                    }, 0)
                }
            } else {
                var p = new XMLHttpRequest;
                for (o in p.open("GET", t, !0), p.addEventListener("load", function(i) {
                        var a = i.target.response;
                        Pr.add(t, a), 200 === this.status ? (e && e(a), r.manager.itemEnd(t)) : 0 === this.status ? (console.warn("THREE.FileLoader: HTTP Status 0 received."), e && e(a), r.manager.itemEnd(t)) : (n && n(i), r.manager.itemEnd(t), r.manager.itemError(t))
                    }, !1), void 0 !== i && p.addEventListener("progress", function(t) {
                        i(t)
                    }, !1), p.addEventListener("error", function(e) {
                        n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
                    }, !1), void 0 !== this.responseType && (p.responseType = this.responseType), void 0 !== this.withCredentials && (p.withCredentials = this.withCredentials), p.overrideMimeType && p.overrideMimeType(void 0 !== this.mimeType ? this.mimeType : "text/plain"), this.requestHeader) p.setRequestHeader(o, this.requestHeader[o]);
                p.send(null)
            }
            return r.manager.itemStart(t), p
        },
        setPath: function(t) {
            return this.path = t, this
        },
        setResponseType: function(t) {
            return this.responseType = t, this
        },
        setWithCredentials: function(t) {
            return this.withCredentials = t, this
        },
        setMimeType: function(t) {
            return this.mimeType = t, this
        },
        setRequestHeader: function(t) {
            return this.requestHeader = t, this
        }
    }), Object.assign(pi.prototype, {
        load: function(t, e, i, n) {
            function r(r) {
                h.load(t[r], function(t) {
                    t = o._parser(t, !0), s[r] = {
                        width: t.width,
                        height: t.height,
                        format: t.format,
                        mipmaps: t.mipmaps
                    }, 6 === (a += 1) && (1 === t.mipmapCount && (c.minFilter = 1006), c.format = t.format, c.needsUpdate = !0, e && e(c))
                }, i, n)
            }
            var a, o = this,
                s = [],
                c = new me;
            c.image = s;
            var h = new ui(this.manager);
            if (h.setPath(this.path), h.setResponseType("arraybuffer"), Array.isArray(t))
                for (var l = a = 0, u = t.length; l < u; ++l) r(l);
            else h.load(t, function(t) {
                if ((t = o._parser(t, !0)).isCubemap)
                    for (var i = t.mipmaps.length / t.mipmapCount, n = 0; n < i; n++) {
                        s[n] = {
                            mipmaps: []
                        };
                        for (var r = 0; r < t.mipmapCount; r++) s[n].mipmaps.push(t.mipmaps[n * t.mipmapCount + r]), s[n].format = t.format, s[n].width = t.width, s[n].height = t.height
                    } else c.image.width = t.width, c.image.height = t.height, c.mipmaps = t.mipmaps;
                1 === t.mipmapCount && (c.minFilter = 1006), c.format = t.format, c.needsUpdate = !0, e && e(c)
            }, i, n);
            return c
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Object.assign(di.prototype, {
        load: function(t, e, i, n) {
            var r = this,
                a = new l,
                o = new ui(this.manager);
            return o.setResponseType("arraybuffer"), o.load(t, function(t) {
                (t = r._parser(t)) && (void 0 !== t.image ? a.image = t.image : void 0 !== t.data && (a.image.width = t.width, a.image.height = t.height, a.image.data = t.data), a.wrapS = void 0 !== t.wrapS ? t.wrapS : 1001, a.wrapT = void 0 !== t.wrapT ? t.wrapT : 1001, a.magFilter = void 0 !== t.magFilter ? t.magFilter : 1006, a.minFilter = void 0 !== t.minFilter ? t.minFilter : 1008, a.anisotropy = void 0 !== t.anisotropy ? t.anisotropy : 1, void 0 !== t.format && (a.format = t.format), void 0 !== t.type && (a.type = t.type), void 0 !== t.mipmaps && (a.mipmaps = t.mipmaps), 1 === t.mipmapCount && (a.minFilter = 1006), a.needsUpdate = !0, e && e(a, t))
            }, i, n), a
        }
    }), Object.assign(fi.prototype, {
        crossOrigin: "Anonymous",
        load: function(t, e, i, n) {
            void 0 === t && (t = ""), void 0 !== this.path && (t = this.path + t);
            var r = this,
                a = Pr.get(t);
            return void 0 !== a ? (r.manager.itemStart(t), setTimeout(function() {
                e && e(a), r.manager.itemEnd(t)
            }, 0), a) : ((i = document.createElementNS("http://www.w3.org/1999/xhtml", "img")).addEventListener("load", function() {
                Pr.add(t, this), e && e(this), r.manager.itemEnd(t)
            }, !1), i.addEventListener("error", function(e) {
                n && n(e), r.manager.itemEnd(t), r.manager.itemError(t)
            }, !1), "data:" !== t.substr(0, 5) && void 0 !== this.crossOrigin && (i.crossOrigin = this.crossOrigin), r.manager.itemStart(t), i.src = t, i)
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Object.assign(mi.prototype, {
        crossOrigin: "Anonymous",
        load: function(t, e, i, n) {
            function r(i) {
                o.load(t[i], function(t) {
                    a.images[i] = t, 6 === ++s && (a.needsUpdate = !0, e && e(a))
                }, void 0, n)
            }
            var a = new u,
                o = new fi(this.manager);
            o.setCrossOrigin(this.crossOrigin), o.setPath(this.path);
            var s = 0;
            for (i = 0; i < t.length; ++i) r(i);
            return a
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), Object.assign(gi.prototype, {
        crossOrigin: "Anonymous",
        load: function(t, e, i, r) {
            var a = new fi(this.manager);
            a.setCrossOrigin(this.crossOrigin), a.setPath(this.path);
            var o = new n;
            return o.image = a.load(t, function() {
                var i = 0 < t.search(/\.(jpg|jpeg)$/) || 0 === t.search(/^data\:image\/jpeg/);
                o.format = i ? 1022 : 1023, o.needsUpdate = !0, void 0 !== e && e(o)
            }, i, r), o
        },
        setCrossOrigin: function(t) {
            return this.crossOrigin = t, this
        },
        setPath: function(t) {
            return this.path = t, this
        }
    }), vi.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: vi,
        isLight: !0,
        copy: function(t) {
            return rt.prototype.copy.call(this, t), this.color.copy(t.color), this.intensity = t.intensity, this
        },
        toJSON: function(t) {
            return (t = rt.prototype.toJSON.call(this, t)).object.color = this.color.getHex(), t.object.intensity = this.intensity, void 0 !== this.groundColor && (t.object.groundColor = this.groundColor.getHex()), void 0 !== this.distance && (t.object.distance = this.distance), void 0 !== this.angle && (t.object.angle = this.angle), void 0 !== this.decay && (t.object.decay = this.decay), void 0 !== this.penumbra && (t.object.penumbra = this.penumbra), void 0 !== this.shadow && (t.object.shadow = this.shadow.toJSON()), t
        }
    }), yi.prototype = Object.assign(Object.create(vi.prototype), {
        constructor: yi,
        isHemisphereLight: !0,
        copy: function(t) {
            return vi.prototype.copy.call(this, t), this.groundColor.copy(t.groundColor), this
        }
    }), Object.assign(xi.prototype, {
        copy: function(t) {
            return this.camera = t.camera.clone(), this.bias = t.bias, this.radius = t.radius, this.mapSize.copy(t.mapSize), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        toJSON: function() {
            var t = {};
            return 0 !== this.bias && (t.bias = this.bias), 1 !== this.radius && (t.radius = this.radius), 512 === this.mapSize.x && 512 === this.mapSize.y || (t.mapSize = this.mapSize.toArray()), t.camera = this.camera.toJSON(!1).object, delete t.camera.matrix, t
        }
    }), bi.prototype = Object.assign(Object.create(xi.prototype), {
        constructor: bi,
        isSpotLightShadow: !0,
        update: function(t) {
            var e = this.camera,
                i = 2 * hr.RAD2DEG * t.angle,
                n = this.mapSize.width / this.mapSize.height;
            t = t.distance || e.far, i === e.fov && n === e.aspect && t === e.far || (e.fov = i, e.aspect = n, e.far = t, e.updateProjectionMatrix())
        }
    }), _i.prototype = Object.assign(Object.create(vi.prototype), {
        constructor: _i,
        isSpotLight: !0,
        copy: function(t) {
            return vi.prototype.copy.call(this, t), this.distance = t.distance, this.angle = t.angle, this.penumbra = t.penumbra, this.decay = t.decay, this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), wi.prototype = Object.assign(Object.create(vi.prototype), {
        constructor: wi,
        isPointLight: !0,
        copy: function(t) {
            return vi.prototype.copy.call(this, t), this.distance = t.distance, this.decay = t.decay, this.shadow = t.shadow.clone(), this
        }
    }), Mi.prototype = Object.assign(Object.create(xi.prototype), {
        constructor: Mi
    }), Ei.prototype = Object.assign(Object.create(vi.prototype), {
        constructor: Ei,
        isDirectionalLight: !0,
        copy: function(t) {
            return vi.prototype.copy.call(this, t), this.target = t.target.clone(), this.shadow = t.shadow.clone(), this
        }
    }), Ti.prototype = Object.assign(Object.create(vi.prototype), {
        constructor: Ti,
        isAmbientLight: !0
    }), Si.prototype = Object.assign(Object.create(vi.prototype), {
        constructor: Si,
        isRectAreaLight: !0,
        copy: function(t) {
            return vi.prototype.copy.call(this, t), this.width = t.width, this.height = t.height, this
        },
        toJSON: function(t) {
            return (t = vi.prototype.toJSON.call(this, t)).object.width = this.width, t.object.height = this.height, t
        }
    });
    var Ir = {
        arraySlice: function(t, e, i) {
            return Ir.isTypedArray(t) ? new t.constructor(t.subarray(e, void 0 !== i ? i : t.length)) : t.slice(e, i)
        },
        convertArray: function(t, e, i) {
            return !t || !i && t.constructor === e ? t : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t)
        },
        isTypedArray: function(t) {
            return ArrayBuffer.isView(t) && !(t instanceof DataView)
        },
        getKeyframeOrder: function(t) {
            for (var e = t.length, i = Array(e), n = 0; n !== e; ++n) i[n] = n;
            return i.sort(function(e, i) {
                return t[e] - t[i]
            }), i
        },
        sortedArray: function(t, e, i) {
            for (var n = t.length, r = new t.constructor(n), a = 0, o = 0; o !== n; ++a)
                for (var s = i[a] * e, c = 0; c !== e; ++c) r[o++] = t[s + c];
            return r
        },
        flattenJSON: function(t, e, i, n) {
            for (var r = 1, a = t[0]; void 0 !== a && void 0 === a[n];) a = t[r++];
            if (void 0 !== a) {
                var o = a[n];
                if (void 0 !== o)
                    if (Array.isArray(o))
                        do {
                            void 0 !== (o = a[n]) && (e.push(a.time), i.push.apply(i, o)), a = t[r++]
                        } while (void 0 !== a);
                    else if (void 0 !== o.toArray)
                    do {
                        void 0 !== (o = a[n]) && (e.push(a.time), o.toArray(i, i.length)), a = t[r++]
                    } while (void 0 !== a);
                else
                    do {
                        void 0 !== (o = a[n]) && (e.push(a.time), i.push(o)), a = t[r++]
                    } while (void 0 !== a)
            }
        }
    };
    Object.assign(Ai.prototype, {
        evaluate: function(t) {
            var e = this.parameterPositions,
                i = this._cachedIndex,
                n = e[i],
                r = e[i - 1];
            t: {
                e: {
                    i: {
                        n: if (!(t < n)) {
                            for (var a = i + 2;;) {
                                if (void 0 === n) {
                                    if (t < r) break n;
                                    return this._cachedIndex = i = e.length, this.afterEnd_(i - 1, t, r)
                                }
                                if (i === a) break;
                                if (r = n, t < (n = e[++i])) break e
                            }
                            n = e.length;
                            break i
                        }if (t >= r) break t;
                        for (t < (a = e[1]) && (i = 2, r = a), a = i - 2;;) {
                            if (void 0 === r) return this._cachedIndex = 0, this.beforeStart_(0, t, n);
                            if (i === a) break;
                            if (n = r, t >= (r = e[--i - 1])) break e
                        }
                        n = i,
                        i = 0
                    }
                    for (; i < n;) t < e[r = i + n >>> 1] ? n = r : i = r + 1;
                    if (n = e[i], void 0 === (r = e[i - 1])) return this._cachedIndex = 0,
                    this.beforeStart_(0, t, n);
                    if (void 0 === n) return this._cachedIndex = i = e.length,
                    this.afterEnd_(i - 1, r, t)
                }
                this._cachedIndex = i,
                this.intervalChanged_(i, r, n)
            }
            return this.interpolate_(i, r, t, n)
        },
        settings: null,
        DefaultSettings_: {},
        getSettings_: function() {
            return this.settings || this.DefaultSettings_
        },
        copySampleValue_: function(t) {
            var e = this.resultBuffer,
                i = this.sampleValues,
                n = this.valueSize;
            t *= n;
            for (var r = 0; r !== n; ++r) e[r] = i[t + r];
            return e
        },
        interpolate_: function(t, e, i, n) {
            throw Error("call to abstract method")
        },
        intervalChanged_: function(t, e, i) {}
    }), Object.assign(Ai.prototype, {
        beforeStart_: Ai.prototype.copySampleValue_,
        afterEnd_: Ai.prototype.copySampleValue_
    }), Ri.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Ri,
        DefaultSettings_: {
            endingStart: 2400,
            endingEnd: 2400
        },
        intervalChanged_: function(t, e, i) {
            var n = this.parameterPositions,
                r = t - 2,
                a = t + 1,
                o = n[r],
                s = n[a];
            if (void 0 === o) switch (this.getSettings_().endingStart) {
                case 2401:
                    r = t, o = 2 * e - i;
                    break;
                case 2402:
                    o = e + n[r = n.length - 2] - n[r + 1];
                    break;
                default:
                    r = t, o = i
            }
            if (void 0 === s) switch (this.getSettings_().endingEnd) {
                case 2401:
                    a = t, s = 2 * i - e;
                    break;
                case 2402:
                    a = 1, s = i + n[1] - n[0];
                    break;
                default:
                    a = t - 1, s = e
            }
            t = .5 * (i - e), n = this.valueSize, this._weightPrev = t / (e - o), this._weightNext = t / (s - i), this._offsetPrev = r * n, this._offsetNext = a * n
        },
        interpolate_: function(t, e, i, n) {
            var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize,
                s = (t *= o) - o,
                c = this._offsetPrev,
                h = this._offsetNext,
                l = this._weightPrev,
                u = this._weightNext,
                p = (i - e) / (n - e);
            for (e = -l * (n = (i = p * p) * p) + 2 * l * i - l * p, l = (1 + l) * n + (-1.5 - 2 * l) * i + (-.5 + l) * p + 1, p = (-1 - u) * n + (1.5 + u) * i + .5 * p, u = u * n - u * i, i = 0; i !== o; ++i) r[i] = e * a[c + i] + l * a[s + i] + p * a[t + i] + u * a[h + i];
            return r
        }
    }), Li.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Li,
        interpolate_: function(t, e, i, n) {
            var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize,
                s = (t *= o) - o;
            for (i = 1 - (e = (i - e) / (n - e)), n = 0; n !== o; ++n) r[n] = a[s + n] * i + a[t + n] * e;
            return r
        }
    }), Pi.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Pi,
        interpolate_: function(t, e, i, n) {
            return this.copySampleValue_(t - 1)
        }
    });
    var Ur = {
        TimeBufferType: Float32Array,
        ValueBufferType: Float32Array,
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodDiscrete: function(t) {
            return new Pi(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodLinear: function(t) {
            return new Li(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: function(t) {
            return new Ri(this.times, this.values, this.getValueSize(), t)
        },
        setInterpolation: function(t) {
            switch (t) {
                case 2300:
                    var e = this.InterpolantFactoryMethodDiscrete;
                    break;
                case 2301:
                    e = this.InterpolantFactoryMethodLinear;
                    break;
                case 2302:
                    e = this.InterpolantFactoryMethodSmooth
            }
            if (void 0 === e) {
                if (e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name, void 0 === this.createInterpolant) {
                    if (t === this.DefaultInterpolation) throw Error(e);
                    this.setInterpolation(this.DefaultInterpolation)
                }
                console.warn("THREE.KeyframeTrackPrototype:", e)
            } else this.createInterpolant = e
        },
        getInterpolation: function() {
            switch (this.createInterpolant) {
                case this.InterpolantFactoryMethodDiscrete:
                    return 2300;
                case this.InterpolantFactoryMethodLinear:
                    return 2301;
                case this.InterpolantFactoryMethodSmooth:
                    return 2302
            }
        },
        getValueSize: function() {
            return this.values.length / this.times.length
        },
        shift: function(t) {
            if (0 !== t)
                for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] += t;
            return this
        },
        scale: function(t) {
            if (1 !== t)
                for (var e = this.times, i = 0, n = e.length; i !== n; ++i) e[i] *= t;
            return this
        },
        trim: function(t, e) {
            for (var i = this.times, n = i.length, r = 0, a = n - 1; r !== n && i[r] < t;) ++r;
            for (; - 1 !== a && i[a] > e;) --a;
            return ++a, 0 === r && a === n || (r >= a && (r = (a = Math.max(a, 1)) - 1), t = this.getValueSize(), this.times = Ir.arraySlice(i, r, a), this.values = Ir.arraySlice(this.values, r * t, a * t)), this
        },
        validate: function() {
            var t = !0;
            0 != (i = this.getValueSize()) - Math.floor(i) && (console.error("THREE.KeyframeTrackPrototype: Invalid value size in track.", this), t = !1);
            var e = this.times,
                i = this.values,
                n = e.length;
            0 === n && (console.error("THREE.KeyframeTrackPrototype: Track is empty.", this), t = !1);
            for (var r = null, a = 0; a !== n; a++) {
                var o = e[a];
                if ("number" == typeof o && isNaN(o)) {
                    console.error("THREE.KeyframeTrackPrototype: Time is not a valid number.", this, a, o), t = !1;
                    break
                }
                if (null !== r && r > o) {
                    console.error("THREE.KeyframeTrackPrototype: Out of order keys.", this, a, o, r), t = !1;
                    break
                }
                r = o
            }
            if (void 0 !== i && Ir.isTypedArray(i))
                for (a = 0, e = i.length; a !== e; ++a)
                    if (n = i[a], isNaN(n)) {
                        console.error("THREE.KeyframeTrackPrototype: Value is not a valid number.", this, a, n), t = !1;
                        break
                    } return t
        },
        optimize: function() {
            for (var t, e, i = this.times, n = this.values, r = this.getValueSize(), a = 2302 === this.getInterpolation(), o = 1, s = i.length - 1, c = 1; c < s; ++c) {
                if (t = !1, (u = i[c]) !== i[c + 1] && (1 !== c || u !== u[0]))
                    if (a) t = !0;
                    else
                        for (var h = (e = c * r) - r, l = e + r, u = 0; u !== r; ++u) {
                            var p = n[e + u];
                            if (p !== n[h + u] || p !== n[l + u]) {
                                t = !0;
                                break
                            }
                        }
                if (t) {
                    if (c !== o)
                        for (i[o] = i[c], e = c * r, t = o * r, u = 0; u !== r; ++u) n[t + u] = n[e + u];
                    ++o
                }
            }
            if (0 < s) {
                for (i[o] = i[s], e = s * r, t = o * r, u = 0; u !== r; ++u) n[t + u] = n[e + u];
                ++o
            }
            return o !== i.length && (this.times = Ir.arraySlice(i, 0, o), this.values = Ir.arraySlice(n, 0, o * r)), this
        }
    };
    Ii.prototype = Object.assign(Object.create(Ur), {
        constructor: Ii,
        ValueTypeName: "vector"
    }), Ui.prototype = Object.assign(Object.create(Ai.prototype), {
        constructor: Ui,
        interpolate_: function(t, e, i, n) {
            var r = this.resultBuffer,
                a = this.sampleValues,
                o = this.valueSize;
            for (e = (i - e) / (n - e), i = (t *= o) + o; t !== i; t += 4) s.slerpFlat(r, 0, a, t - o, a, t, e);
            return r
        }
    }), Di.prototype = Object.assign(Object.create(Ur), {
        constructor: Di,
        ValueTypeName: "quaternion",
        DefaultInterpolation: 2301,
        InterpolantFactoryMethodLinear: function(t) {
            return new Ui(this.times, this.values, this.getValueSize(), t)
        },
        InterpolantFactoryMethodSmooth: void 0
    }), Ni.prototype = Object.assign(Object.create(Ur), {
        constructor: Ni,
        ValueTypeName: "number"
    }), Oi.prototype = Object.assign(Object.create(Ur), {
        constructor: Oi,
        ValueTypeName: "string",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Bi.prototype = Object.assign(Object.create(Ur), {
        constructor: Bi,
        ValueTypeName: "bool",
        ValueBufferType: Array,
        DefaultInterpolation: 2300,
        InterpolantFactoryMethodLinear: void 0,
        InterpolantFactoryMethodSmooth: void 0
    }), Fi.prototype = Object.assign(Object.create(Ur), {
        constructor: Fi,
        ValueTypeName: "color"
    }), zi.prototype = Ur, Ur.constructor = zi, Object.assign(zi, {
        parse: function(t) {
            if (void 0 === t.type) throw Error("track type undefined, can not parse");
            var e = zi._getTrackTypeForValueTypeName(t.type);
            if (void 0 === t.times) {
                var i = [],
                    n = [];
                Ir.flattenJSON(t.keys, i, n, "value"), t.times = i, t.values = n
            }
            return void 0 !== e.parse ? e.parse(t) : new e(t.name, t.times, t.values, t.interpolation)
        },
        toJSON: function(t) {
            if (void 0 !== (e = t.constructor).toJSON) e = e.toJSON(t);
            else {
                var e = {
                        name: t.name,
                        times: Ir.convertArray(t.times, Array),
                        values: Ir.convertArray(t.values, Array)
                    },
                    i = t.getInterpolation();
                i !== t.DefaultInterpolation && (e.interpolation = i)
            }
            return e.type = t.ValueTypeName, e
        },
        _getTrackTypeForValueTypeName: function(t) {
            switch (t.toLowerCase()) {
                case "scalar":
                case "double":
                case "float":
                case "number":
                case "integer":
                    return Ni;
                case "vector":
                case "vector2":
                case "vector3":
                case "vector4":
                    return Ii;
                case "color":
                    return Fi;
                case "quaternion":
                    return Di;
                case "bool":
                case "boolean":
                    return Bi;
                case "string":
                    return Oi
            }
            throw Error("Unsupported typeName: " + t)
        }
    }), Object.assign(Gi, {
        parse: function(t) {
            for (var e = [], i = t.tracks, n = 1 / (t.fps || 1), r = 0, a = i.length; r !== a; ++r) e.push(zi.parse(i[r]).scale(n));
            return new Gi(t.name, t.duration, e)
        },
        toJSON: function(t) {
            var e = [],
                i = t.tracks;
            t = {
                name: t.name,
                duration: t.duration,
                tracks: e
            };
            for (var n = 0, r = i.length; n !== r; ++n) e.push(zi.toJSON(i[n]));
            return t
        },
        CreateFromMorphTargetSequence: function(t, e, i, n) {
            for (var r = e.length, a = [], o = 0; o < r; o++) {
                var s = [];
                (h = []).push((o + r - 1) % r, o, (o + 1) % r), s.push(0, 1, 0);
                var c = Ir.getKeyframeOrder(h),
                    h = Ir.sortedArray(h, 1, c);
                s = Ir.sortedArray(s, 1, c);
                n || 0 !== h[0] || (h.push(r), s.push(s[0])), a.push(new Ni(".morphTargetInfluences[" + e[o].name + "]", h, s).scale(1 / i))
            }
            return new Gi(t, -1, a)
        },
        findByName: function(t, e) {
            var i = t;
            for (Array.isArray(t) || (i = t.geometry && t.geometry.animations || t.animations), t = 0; t < i.length; t++)
                if (i[t].name === e) return i[t];
            return null
        },
        CreateClipsFromMorphTargetSequences: function(t, e, i) {
            for (var n, r = {}, a = /^([\w-]*?)([\d]+)$/, o = 0, s = t.length; o < s; o++) {
                var c = t[o],
                    h = c.name.match(a);
                h && 1 < h.length && ((h = r[n = h[1]]) || (r[n] = h = []), h.push(c))
            }
            for (n in t = [], r) t.push(Gi.CreateFromMorphTargetSequence(n, r[n], e, i));
            return t
        },
        parseAnimation: function(t, e) {
            if (!t) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
            var i = function(t, e, i, n, r) {
                    if (0 !== i.length) {
                        var a = [],
                            o = [];
                        Ir.flattenJSON(i, a, o, n), 0 !== a.length && r.push(new t(e, a, o))
                    }
                },
                n = [],
                r = t.name || "default",
                a = t.length || -1,
                o = t.fps || 30;
            t = t.hierarchy || [];
            for (var s = 0; s < t.length; s++) {
                var c = t[s].keys;
                if (c && 0 !== c.length)
                    if (c[0].morphTargets) {
                        a = {};
                        for (var h = 0; h < c.length; h++)
                            if (c[h].morphTargets)
                                for (var l = 0; l < c[h].morphTargets.length; l++) a[c[h].morphTargets[l]] = -1;
                        for (var u in a) {
                            var p = [],
                                d = [];
                            for (l = 0; l !== c[h].morphTargets.length; ++l) {
                                var f = c[h];
                                p.push(f.time), d.push(f.morphTarget === u ? 1 : 0)
                            }
                            n.push(new Ni(".morphTargetInfluence[" + u + "]", p, d))
                        }
                        a = a.length * (o || 1)
                    } else i(Ii, (h = ".bones[" + e[s].name + "]") + ".position", c, "pos", n), i(Di, h + ".quaternion", c, "rot", n), i(Ii, h + ".scale", c, "scl", n)
            }
            return 0 === n.length ? null : new Gi(r, a, n)
        }
    }), Object.assign(Gi.prototype, {
        resetDuration: function() {
            for (var t = 0, e = 0, i = this.tracks.length; e !== i; ++e) {
                var n = this.tracks[e];
                t = Math.max(t, n.times[n.times.length - 1])
            }
            this.duration = t
        },
        trim: function() {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].trim(0, this.duration);
            return this
        },
        optimize: function() {
            for (var t = 0; t < this.tracks.length; t++) this.tracks[t].optimize();
            return this
        }
    }), Object.assign(Hi.prototype, {
        load: function(t, e, i, n) {
            var r = this;
            new ui(r.manager).load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        setTextures: function(t) {
            this.textures = t
        },
        parse: function(t) {
            function e(t) {
                return void 0 === n[t] && console.warn("THREE.MaterialLoader: Undefined texture", t), n[t]
            }
            var n = this.textures,
                r = new Lr[t.type];
            if (void 0 !== t.uuid && (r.uuid = t.uuid), void 0 !== t.name && (r.name = t.name), void 0 !== t.color && r.color.setHex(t.color), void 0 !== t.roughness && (r.roughness = t.roughness), void 0 !== t.metalness && (r.metalness = t.metalness), void 0 !== t.emissive && r.emissive.setHex(t.emissive), void 0 !== t.specular && r.specular.setHex(t.specular), void 0 !== t.shininess && (r.shininess = t.shininess), void 0 !== t.clearCoat && (r.clearCoat = t.clearCoat), void 0 !== t.clearCoatRoughness && (r.clearCoatRoughness = t.clearCoatRoughness), void 0 !== t.uniforms && (r.uniforms = t.uniforms), void 0 !== t.vertexShader && (r.vertexShader = t.vertexShader), void 0 !== t.fragmentShader && (r.fragmentShader = t.fragmentShader), void 0 !== t.vertexColors && (r.vertexColors = t.vertexColors), void 0 !== t.fog && (r.fog = t.fog), void 0 !== t.flatShading && (r.flatShading = t.flatShading), void 0 !== t.blending && (r.blending = t.blending), void 0 !== t.side && (r.side = t.side), void 0 !== t.opacity && (r.opacity = t.opacity), void 0 !== t.transparent && (r.transparent = t.transparent), void 0 !== t.alphaTest && (r.alphaTest = t.alphaTest), void 0 !== t.depthTest && (r.depthTest = t.depthTest), void 0 !== t.depthWrite && (r.depthWrite = t.depthWrite), void 0 !== t.colorWrite && (r.colorWrite = t.colorWrite), void 0 !== t.wireframe && (r.wireframe = t.wireframe), void 0 !== t.wireframeLinewidth && (r.wireframeLinewidth = t.wireframeLinewidth), void 0 !== t.wireframeLinecap && (r.wireframeLinecap = t.wireframeLinecap), void 0 !== t.wireframeLinejoin && (r.wireframeLinejoin = t.wireframeLinejoin), void 0 !== t.skinning && (r.skinning = t.skinning), void 0 !== t.morphTargets && (r.morphTargets = t.morphTargets), void 0 !== t.dithering && (r.dithering = t.dithering), void 0 !== t.visible && (r.visible = t.visible), void 0 !== t.userData && (r.userData = t.userData), void 0 !== t.shading && (r.flatShading = 1 === t.shading), void 0 !== t.size && (r.size = t.size), void 0 !== t.sizeAttenuation && (r.sizeAttenuation = t.sizeAttenuation), void 0 !== t.map && (r.map = e(t.map)), void 0 !== t.alphaMap && (r.alphaMap = e(t.alphaMap), r.transparent = !0), void 0 !== t.bumpMap && (r.bumpMap = e(t.bumpMap)), void 0 !== t.bumpScale && (r.bumpScale = t.bumpScale), void 0 !== t.normalMap && (r.normalMap = e(t.normalMap)), void 0 !== t.normalScale) {
                var a = t.normalScale;
                !1 === Array.isArray(a) && (a = [a, a]), r.normalScale = (new i).fromArray(a)
            }
            return void 0 !== t.displacementMap && (r.displacementMap = e(t.displacementMap)), void 0 !== t.displacementScale && (r.displacementScale = t.displacementScale), void 0 !== t.displacementBias && (r.displacementBias = t.displacementBias), void 0 !== t.roughnessMap && (r.roughnessMap = e(t.roughnessMap)), void 0 !== t.metalnessMap && (r.metalnessMap = e(t.metalnessMap)), void 0 !== t.emissiveMap && (r.emissiveMap = e(t.emissiveMap)), void 0 !== t.emissiveIntensity && (r.emissiveIntensity = t.emissiveIntensity), void 0 !== t.specularMap && (r.specularMap = e(t.specularMap)), void 0 !== t.envMap && (r.envMap = e(t.envMap)), void 0 !== t.reflectivity && (r.reflectivity = t.reflectivity), void 0 !== t.lightMap && (r.lightMap = e(t.lightMap)), void 0 !== t.lightMapIntensity && (r.lightMapIntensity = t.lightMapIntensity), void 0 !== t.aoMap && (r.aoMap = e(t.aoMap)), void 0 !== t.aoMapIntensity && (r.aoMapIntensity = t.aoMapIntensity), void 0 !== t.gradientMap && (r.gradientMap = e(t.gradientMap)), r
        }
    }), Object.assign(Vi.prototype, {
        load: function(t, e, i, n) {
            var r = this;
            new ui(r.manager).load(t, function(t) {
                e(r.parse(JSON.parse(t)))
            }, i, n)
        },
        parse: function(t) {
            var e = new wt,
                i = t.data.index;
            void 0 !== i && (i = new Dr[i.type](i.array), e.setIndex(new lt(i, 1)));
            var n = t.data.attributes;
            for (a in n) {
                var r = n[a];
                i = new Dr[r.type](r.array), e.addAttribute(a, new lt(i, r.itemSize, r.normalized))
            }
            var a = t.data.groups || t.data.drawcalls || t.data.offsets;
            if (void 0 !== a)
                for (i = 0, n = a.length; i !== n; ++i) r = a[i], e.addGroup(r.start, r.count, r.materialIndex);
            return void 0 !== (t = t.data.boundingSphere) && (a = new c, void 0 !== t.center && a.fromArray(t.center), e.boundingSphere = new Q(a, t.radius)), e
        }
    });
    var Dr = {
        Int8Array: Int8Array,
        Uint8Array: Uint8Array,
        Uint8ClampedArray: "undefined" != typeof Uint8ClampedArray ? Uint8ClampedArray : Uint8Array,
        Int16Array: Int16Array,
        Uint16Array: Uint16Array,
        Int32Array: Int32Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array
    };
    ki.Handlers = {
        handlers: [],
        add: function(t, e) {
            this.handlers.push(t, e)
        },
        get: function(t) {
            for (var e = this.handlers, i = 0, n = e.length; i < n; i += 2) {
                var r = e[i + 1];
                if (e[i].test(t)) return r
            }
            return null
        }
    }, Object.assign(ki.prototype, {
        crossOrigin: void 0,
        extractUrlBase: function(t) {
            return 1 === (t = t.split("/")).length ? "./" : (t.pop(), t.join("/") + "/")
        },
        initMaterials: function(t, e, i) {
            for (var n = [], r = 0; r < t.length; ++r) n[r] = this.createMaterial(t[r], e, i);
            return n
        },
        createMaterial: function() {
            var t = {
                    NoBlending: 0,
                    NormalBlending: 1,
                    AdditiveBlending: 2,
                    SubtractiveBlending: 3,
                    MultiplyBlending: 4,
                    CustomBlending: 5
                },
                e = new H,
                i = new gi,
                n = new Hi;
            return function(r, a, o) {
                function s(t, e, n, r, s) {
                    t = a + t;
                    var c = ki.Handlers.get(t);
                    return null !== c ? t = c.load(t) : (i.setCrossOrigin(o), t = i.load(t)), void 0 !== e && (t.repeat.fromArray(e), 1 !== e[0] && (t.wrapS = 1e3), 1 !== e[1] && (t.wrapT = 1e3)), void 0 !== n && t.offset.fromArray(n), void 0 !== r && ("repeat" === r[0] && (t.wrapS = 1e3), "mirror" === r[0] && (t.wrapS = 1002), "repeat" === r[1] && (t.wrapT = 1e3), "mirror" === r[1] && (t.wrapT = 1002)), void 0 !== s && (t.anisotropy = s), e = hr.generateUUID(), h[e] = t, e
                }
                var c, h = {},
                    l = {
                        uuid: hr.generateUUID(),
                        type: "MeshLambertMaterial"
                    };
                for (c in r) {
                    var u = r[c];
                    switch (c) {
                        case "DbgColor":
                        case "DbgIndex":
                        case "opticalDensity":
                        case "illumination":
                            break;
                        case "DbgName":
                            l.name = u;
                            break;
                        case "blending":
                            l.blending = t[u];
                            break;
                        case "colorAmbient":
                        case "mapAmbient":
                            console.warn("THREE.Loader.createMaterial:", c, "is no longer supported.");
                            break;
                        case "colorDiffuse":
                            l.color = e.fromArray(u).getHex();
                            break;
                        case "colorSpecular":
                            l.specular = e.fromArray(u).getHex();
                            break;
                        case "colorEmissive":
                            l.emissive = e.fromArray(u).getHex();
                            break;
                        case "specularCoef":
                            l.shininess = u;
                            break;
                        case "shading":
                            "basic" === u.toLowerCase() && (l.type = "MeshBasicMaterial"), "phong" === u.toLowerCase() && (l.type = "MeshPhongMaterial"), "standard" === u.toLowerCase() && (l.type = "MeshStandardMaterial");
                            break;
                        case "mapDiffuse":
                            l.map = s(u, r.mapDiffuseRepeat, r.mapDiffuseOffset, r.mapDiffuseWrap, r.mapDiffuseAnisotropy);
                            break;
                        case "mapDiffuseRepeat":
                        case "mapDiffuseOffset":
                        case "mapDiffuseWrap":
                        case "mapDiffuseAnisotropy":
                            break;
                        case "mapEmissive":
                            l.emissiveMap = s(u, r.mapEmissiveRepeat, r.mapEmissiveOffset, r.mapEmissiveWrap, r.mapEmissiveAnisotropy);
                            break;
                        case "mapEmissiveRepeat":
                        case "mapEmissiveOffset":
                        case "mapEmissiveWrap":
                        case "mapEmissiveAnisotropy":
                            break;
                        case "mapLight":
                            l.lightMap = s(u, r.mapLightRepeat, r.mapLightOffset, r.mapLightWrap, r.mapLightAnisotropy);
                            break;
                        case "mapLightRepeat":
                        case "mapLightOffset":
                        case "mapLightWrap":
                        case "mapLightAnisotropy":
                            break;
                        case "mapAO":
                            l.aoMap = s(u, r.mapAORepeat, r.mapAOOffset, r.mapAOWrap, r.mapAOAnisotropy);
                            break;
                        case "mapAORepeat":
                        case "mapAOOffset":
                        case "mapAOWrap":
                        case "mapAOAnisotropy":
                            break;
                        case "mapBump":
                            l.bumpMap = s(u, r.mapBumpRepeat, r.mapBumpOffset, r.mapBumpWrap, r.mapBumpAnisotropy);
                            break;
                        case "mapBumpScale":
                            l.bumpScale = u;
                            break;
                        case "mapBumpRepeat":
                        case "mapBumpOffset":
                        case "mapBumpWrap":
                        case "mapBumpAnisotropy":
                            break;
                        case "mapNormal":
                            l.normalMap = s(u, r.mapNormalRepeat, r.mapNormalOffset, r.mapNormalWrap, r.mapNormalAnisotropy);
                            break;
                        case "mapNormalFactor":
                            l.normalScale = [u, u];
                            break;
                        case "mapNormalRepeat":
                        case "mapNormalOffset":
                        case "mapNormalWrap":
                        case "mapNormalAnisotropy":
                            break;
                        case "mapSpecular":
                            l.specularMap = s(u, r.mapSpecularRepeat, r.mapSpecularOffset, r.mapSpecularWrap, r.mapSpecularAnisotropy);
                            break;
                        case "mapSpecularRepeat":
                        case "mapSpecularOffset":
                        case "mapSpecularWrap":
                        case "mapSpecularAnisotropy":
                            break;
                        case "mapMetalness":
                            l.metalnessMap = s(u, r.mapMetalnessRepeat, r.mapMetalnessOffset, r.mapMetalnessWrap, r.mapMetalnessAnisotropy);
                            break;
                        case "mapMetalnessRepeat":
                        case "mapMetalnessOffset":
                        case "mapMetalnessWrap":
                        case "mapMetalnessAnisotropy":
                            break;
                        case "mapRoughness":
                            l.roughnessMap = s(u, r.mapRoughnessRepeat, r.mapRoughnessOffset, r.mapRoughnessWrap, r.mapRoughnessAnisotropy);
                            break;
                        case "mapRoughnessRepeat":
                        case "mapRoughnessOffset":
                        case "mapRoughnessWrap":
                        case "mapRoughnessAnisotropy":
                            break;
                        case "mapAlpha":
                            l.alphaMap = s(u, r.mapAlphaRepeat, r.mapAlphaOffset, r.mapAlphaWrap, r.mapAlphaAnisotropy);
                            break;
                        case "mapAlphaRepeat":
                        case "mapAlphaOffset":
                        case "mapAlphaWrap":
                        case "mapAlphaAnisotropy":
                            break;
                        case "flipSided":
                            l.side = 1;
                            break;
                        case "doubleSided":
                            l.side = 2;
                            break;
                        case "transparency":
                            console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity"), l.opacity = u;
                            break;
                        case "depthTest":
                        case "depthWrite":
                        case "colorWrite":
                        case "opacity":
                        case "reflectivity":
                        case "transparent":
                        case "visible":
                        case "wireframe":
                            l[c] = u;
                            break;
                        case "vertexColors":
                            !0 === u && (l.vertexColors = 2), "face" === u && (l.vertexColors = 1);
                            break;
                        default:
                            console.error("THREE.Loader.createMaterial: Unsupported", c, u)
                    }
                }
                return "MeshBasicMaterial" === l.type && delete l.emissive, "MeshPhongMaterial" !== l.type && delete l.specular, 1 > l.opacity && (l.transparent = !0), n.setTextures(h), n.parse(l)
            }
        }()
    }), Object.assign(ji.prototype, {
        load: function(t, e, i, n) {
            var r = this,
                a = this.texturePath && "string" == typeof this.texturePath ? this.texturePath : ki.prototype.extractUrlBase(t),
                o = new ui(this.manager);
            o.setWithCredentials(this.withCredentials), o.load(t, function(i) {
                var n = (i = JSON.parse(i)).metadata;
                if (void 0 !== n && void 0 !== (n = n.type)) {
                    if ("object" === n.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.ObjectLoader instead.");
                    if ("scene" === n.toLowerCase()) return void console.error("THREE.JSONLoader: " + t + " should be loaded with THREE.SceneLoader instead.")
                }
                i = r.parse(i, a), e(i.geometry, i.materials)
            }, i, n)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        parse: function(t, e) {
            void 0 !== t.data && (t = t.data), t.scale = void 0 !== t.scale ? 1 / t.scale : 1;
            var n, a, o, s = new ht,
                h = t,
                l = h.faces,
                u = h.vertices,
                p = h.normals,
                d = h.colors,
                f = h.scale,
                m = 0;
            if (void 0 !== h.uvs) {
                for (n = 0; n < h.uvs.length; n++) h.uvs[n].length && m++;
                for (n = 0; n < m; n++) s.faceVertexUvs[n] = []
            }
            var g = 0;
            for (o = u.length; g < o;)(n = new c).x = u[g++] * f, n.y = u[g++] * f, n.z = u[g++] * f, s.vertices.push(n);
            for (g = 0, o = l.length; g < o;) {
                var v = 1 & (u = l[g++]),
                    y = 2 & u;
                n = 8 & u;
                var x = 16 & u,
                    b = 32 & u;
                if (f = 64 & u, u &= 128, v) {
                    (v = new ct).a = l[g], v.b = l[g + 1], v.c = l[g + 3];
                    var _ = new ct;
                    if (_.a = l[g + 1], _.b = l[g + 2], _.c = l[g + 3], g += 4, y && (y = l[g++], v.materialIndex = y, _.materialIndex = y), y = s.faces.length, n)
                        for (n = 0; n < m; n++) {
                            var w = h.uvs[n];
                            for (s.faceVertexUvs[n][y] = [], s.faceVertexUvs[n][y + 1] = [], a = 0; 4 > a; a++) {
                                var M = l[g++],
                                    E = w[2 * M];
                                E = new i(E, M = w[2 * M + 1]), 2 !== a && s.faceVertexUvs[n][y].push(E), 0 !== a && s.faceVertexUvs[n][y + 1].push(E)
                            }
                        }
                    if (x && (x = 3 * l[g++], v.normal.set(p[x++], p[x++], p[x]), _.normal.copy(v.normal)), b)
                        for (n = 0; 4 > n; n++) x = 3 * l[g++], b = new c(p[x++], p[x++], p[x]), 2 !== n && v.vertexNormals.push(b), 0 !== n && _.vertexNormals.push(b);
                    if (f && (f = d[f = l[g++]], v.color.setHex(f), _.color.setHex(f)), u)
                        for (n = 0; 4 > n; n++) f = d[f = l[g++]], 2 !== n && v.vertexColors.push(new H(f)), 0 !== n && _.vertexColors.push(new H(f));
                    s.faces.push(v), s.faces.push(_)
                } else {
                    if ((v = new ct).a = l[g++], v.b = l[g++], v.c = l[g++], y && (y = l[g++], v.materialIndex = y), y = s.faces.length, n)
                        for (n = 0; n < m; n++)
                            for (w = h.uvs[n], s.faceVertexUvs[n][y] = [], a = 0; 3 > a; a++) E = new i(E = w[2 * (M = l[g++])], M = w[2 * M + 1]), s.faceVertexUvs[n][y].push(E);
                    if (x && (x = 3 * l[g++], v.normal.set(p[x++], p[x++], p[x])), b)
                        for (n = 0; 3 > n; n++) x = 3 * l[g++], b = new c(p[x++], p[x++], p[x]), v.vertexNormals.push(b);
                    if (f && (f = l[g++], v.color.setHex(d[f])), u)
                        for (n = 0; 3 > n; n++) f = l[g++], v.vertexColors.push(new H(d[f]));
                    s.faces.push(v)
                }
            }
            if (g = void 0 !== (h = t).influencesPerVertex ? h.influencesPerVertex : 2, h.skinWeights)
                for (o = 0, l = h.skinWeights.length; o < l; o += g) s.skinWeights.push(new r(h.skinWeights[o], 1 < g ? h.skinWeights[o + 1] : 0, 2 < g ? h.skinWeights[o + 2] : 0, 3 < g ? h.skinWeights[o + 3] : 0));
            if (h.skinIndices)
                for (o = 0, l = h.skinIndices.length; o < l; o += g) s.skinIndices.push(new r(h.skinIndices[o], 1 < g ? h.skinIndices[o + 1] : 0, 2 < g ? h.skinIndices[o + 2] : 0, 3 < g ? h.skinIndices[o + 3] : 0));
            if (s.bones = h.bones, s.bones && 0 < s.bones.length && (s.skinWeights.length !== s.skinIndices.length || s.skinIndices.length !== s.vertices.length) && console.warn("When skinning, number of vertices (" + s.vertices.length + "), skinIndices (" + s.skinIndices.length + "), and skinWeights (" + s.skinWeights.length + ") should match."), l = (o = t).scale, void 0 !== o.morphTargets)
                for (h = 0, g = o.morphTargets.length; h < g; h++)
                    for (s.morphTargets[h] = {}, s.morphTargets[h].name = o.morphTargets[h].name, s.morphTargets[h].vertices = [], p = s.morphTargets[h].vertices, m = 0, u = (d = o.morphTargets[h].vertices).length; m < u; m += 3)(f = new c).x = d[m] * l, f.y = d[m + 1] * l, f.z = d[m + 2] * l, p.push(f);
            if (void 0 !== o.morphColors && 0 < o.morphColors.length)
                for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), l = s.faces, o = o.morphColors[0].colors, h = 0, g = l.length; h < g; h++) l[h].color.fromArray(o, 3 * h);
            for (h = [], g = [], void 0 !== (o = t).animation && g.push(o.animation), void 0 !== o.animations && (o.animations.length ? g = g.concat(o.animations) : g.push(o.animations)), o = 0; o < g.length; o++)(l = Gi.parseAnimation(g[o], s.bones)) && h.push(l);
            return s.morphTargets && (g = Gi.CreateClipsFromMorphTargetSequences(s.morphTargets, 10), h = h.concat(g)), 0 < h.length && (s.animations = h), s.computeFaceNormals(), s.computeBoundingSphere(), void 0 === t.materials || 0 === t.materials.length ? {
                geometry: s
            } : {
                geometry: s,
                materials: t = ki.prototype.initMaterials(t.materials, e, this.crossOrigin)
            }
        }
    }), Object.assign(Wi.prototype, {
        load: function(t, e, i, n) {
            "" === this.texturePath && (this.texturePath = t.substring(0, t.lastIndexOf("/") + 1));
            var r = this;
            new ui(r.manager).load(t, function(i) {
                var a = null;
                try {
                    a = JSON.parse(i)
                } catch (e) {
                    return void 0 !== n && n(e), void console.error("THREE:ObjectLoader: Can't parse " + t + ".", e.message)
                }
                void 0 === (i = a.metadata) || void 0 === i.type || "geometry" === i.type.toLowerCase() ? console.error("THREE.ObjectLoader: Can't load " + t + ". Use THREE.JSONLoader instead.") : r.parse(a, e)
            }, i, n)
        },
        setTexturePath: function(t) {
            this.texturePath = t
        },
        setCrossOrigin: function(t) {
            this.crossOrigin = t
        },
        parse: function(t, e) {
            var i = this.parseGeometries(t.geometries),
                n = this.parseImages(t.images, function() {
                    void 0 !== e && e(r)
                }),
                r = (n = this.parseTextures(t.textures, n), n = this.parseMaterials(t.materials, n), this.parseObject(t.object, i, n));
            return t.animations && (r.animations = this.parseAnimations(t.animations)), void 0 !== t.images && 0 !== t.images.length || void 0 === e || e(r), r
        },
        parseGeometries: function(t) {
            var e = {};
            if (void 0 !== t)
                for (var i = new ji, n = new Vi, r = 0, a = t.length; r < a; r++) {
                    var o = t[r];
                    switch (o.type) {
                        case "PlaneGeometry":
                        case "PlaneBufferGeometry":
                            var s = new Rr[o.type](o.width, o.height, o.widthSegments, o.heightSegments);
                            break;
                        case "BoxGeometry":
                        case "BoxBufferGeometry":
                        case "CubeGeometry":
                            s = new Rr[o.type](o.width, o.height, o.depth, o.widthSegments, o.heightSegments, o.depthSegments);
                            break;
                        case "CircleGeometry":
                        case "CircleBufferGeometry":
                            s = new Rr[o.type](o.radius, o.segments, o.thetaStart, o.thetaLength);
                            break;
                        case "CylinderGeometry":
                        case "CylinderBufferGeometry":
                            s = new Rr[o.type](o.radiusTop, o.radiusBottom, o.height, o.radialSegments, o.heightSegments, o.openEnded, o.thetaStart, o.thetaLength);
                            break;
                        case "ConeGeometry":
                        case "ConeBufferGeometry":
                            s = new Rr[o.type](o.radius, o.height, o.radialSegments, o.heightSegments, o.openEnded, o.thetaStart, o.thetaLength);
                            break;
                        case "SphereGeometry":
                        case "SphereBufferGeometry":
                            s = new Rr[o.type](o.radius, o.widthSegments, o.heightSegments, o.phiStart, o.phiLength, o.thetaStart, o.thetaLength);
                            break;
                        case "DodecahedronGeometry":
                        case "IcosahedronGeometry":
                        case "OctahedronGeometry":
                        case "TetrahedronGeometry":
                            s = new Rr[o.type](o.radius, o.detail);
                            break;
                        case "RingGeometry":
                        case "RingBufferGeometry":
                            s = new Rr[o.type](o.innerRadius, o.outerRadius, o.thetaSegments, o.phiSegments, o.thetaStart, o.thetaLength);
                            break;
                        case "TorusGeometry":
                        case "TorusBufferGeometry":
                            s = new Rr[o.type](o.radius, o.tube, o.radialSegments, o.tubularSegments, o.arc);
                            break;
                        case "TorusKnotGeometry":
                        case "TorusKnotBufferGeometry":
                            s = new Rr[o.type](o.radius, o.tube, o.tubularSegments, o.radialSegments, o.p, o.q);
                            break;
                        case "LatheGeometry":
                        case "LatheBufferGeometry":
                            s = new Rr[o.type](o.points, o.segments, o.phiStart, o.phiLength);
                            break;
                        case "BufferGeometry":
                            s = n.parse(o);
                            break;
                        case "Geometry":
                            s = i.parse(o, this.texturePath).geometry;
                            break;
                        default:
                            console.warn('THREE.ObjectLoader: Unsupported geometry type "' + o.type + '"');
                            continue
                    }
                    s.uuid = o.uuid, void 0 !== o.name && (s.name = o.name), e[o.uuid] = s
                }
            return e
        },
        parseMaterials: function(t, e) {
            var i = {};
            if (void 0 !== t) {
                var n = new Hi;
                n.setTextures(e), e = 0;
                for (var r = t.length; e < r; e++) {
                    var a = t[e];
                    if ("MultiMaterial" === a.type) {
                        for (var o = [], s = 0; s < a.materials.length; s++) o.push(n.parse(a.materials[s]));
                        i[a.uuid] = o
                    } else i[a.uuid] = n.parse(a)
                }
            }
            return i
        },
        parseAnimations: function(t) {
            for (var e = [], i = 0; i < t.length; i++) {
                var n = Gi.parse(t[i]);
                e.push(n)
            }
            return e
        },
        parseImages: function(t, e) {
            function i(t) {
                return n.manager.itemStart(t), a.load(t, function() {
                    n.manager.itemEnd(t)
                }, void 0, function() {
                    n.manager.itemEnd(t), n.manager.itemError(t)
                })
            }
            var n = this,
                r = {};
            if (void 0 !== t && 0 < t.length) {
                var a = new fi(e = new li(e));
                a.setCrossOrigin(this.crossOrigin), e = 0;
                for (var o = t.length; e < o; e++) {
                    var s = t[e],
                        c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(s.url) ? s.url : n.texturePath + s.url;
                    r[s.uuid] = i(c)
                }
            }
            return r
        },
        parseTextures: function(t, e) {
            function i(t, e) {
                return "number" == typeof t ? t : (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", t), e[t])
            }
            var r = {};
            if (void 0 !== t)
                for (var a = 0, o = t.length; a < o; a++) {
                    var s = t[a];
                    void 0 === s.image && console.warn('THREE.ObjectLoader: No "image" specified for', s.uuid), void 0 === e[s.image] && console.warn("THREE.ObjectLoader: Undefined image", s.image);
                    var c = new n(e[s.image]);
                    c.needsUpdate = !0, c.uuid = s.uuid, void 0 !== s.name && (c.name = s.name), void 0 !== s.mapping && (c.mapping = i(s.mapping, Nr)), void 0 !== s.offset && c.offset.fromArray(s.offset), void 0 !== s.repeat && c.repeat.fromArray(s.repeat), void 0 !== s.wrap && (c.wrapS = i(s.wrap[0], Or), c.wrapT = i(s.wrap[1], Or)), void 0 !== s.minFilter && (c.minFilter = i(s.minFilter, Br)), void 0 !== s.magFilter && (c.magFilter = i(s.magFilter, Br)), void 0 !== s.anisotropy && (c.anisotropy = s.anisotropy), void 0 !== s.flipY && (c.flipY = s.flipY), r[s.uuid] = c
                }
            return r
        },
        parseObject: function() {
            var t = new h;
            return function(e, i, n) {
                function r(t) {
                    return void 0 === i[t] && console.warn("THREE.ObjectLoader: Undefined geometry", t), i[t]
                }

                function a(t) {
                    if (void 0 !== t) {
                        if (Array.isArray(t)) {
                            for (var e = [], i = 0, r = t.length; i < r; i++) {
                                var a = t[i];
                                void 0 === n[a] && console.warn("THREE.ObjectLoader: Undefined material", a), e.push(n[a])
                            }
                            return e
                        }
                        return void 0 === n[t] && console.warn("THREE.ObjectLoader: Undefined material", t), n[t]
                    }
                }
                switch (e.type) {
                    case "Scene":
                        var o = new $t;
                        void 0 !== e.background && Number.isInteger(e.background) && (o.background = new H(e.background)), void 0 !== e.fog && ("Fog" === e.fog.type ? o.fog = new Kt(e.fog.color, e.fog.near, e.fog.far) : "FogExp2" === e.fog.type && (o.fog = new Qt(e.fog.color, e.fog.density)));
                        break;
                    case "PerspectiveCamera":
                        o = new st(e.fov, e.aspect, e.near, e.far), void 0 !== e.focus && (o.focus = e.focus), void 0 !== e.zoom && (o.zoom = e.zoom), void 0 !== e.filmGauge && (o.filmGauge = e.filmGauge), void 0 !== e.filmOffset && (o.filmOffset = e.filmOffset), void 0 !== e.view && (o.view = Object.assign({}, e.view));
                        break;
                    case "OrthographicCamera":
                        o = new ot(e.left, e.right, e.top, e.bottom, e.near, e.far);
                        break;
                    case "AmbientLight":
                        o = new Ti(e.color, e.intensity);
                        break;
                    case "DirectionalLight":
                        o = new Ei(e.color, e.intensity);
                        break;
                    case "PointLight":
                        o = new wi(e.color, e.intensity, e.distance, e.decay);
                        break;
                    case "RectAreaLight":
                        o = new Si(e.color, e.intensity, e.width, e.height);
                        break;
                    case "SpotLight":
                        o = new _i(e.color, e.intensity, e.distance, e.angle, e.penumbra, e.decay);
                        break;
                    case "HemisphereLight":
                        o = new yi(e.color, e.groundColor, e.intensity);
                        break;
                    case "SkinnedMesh":
                        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
                    case "Mesh":
                        o = r(e.geometry);
                        var s = a(e.material);
                        o = o.bones && 0 < o.bones.length ? new oe(o, s) : new Ct(o, s);
                        break;
                    case "LOD":
                        o = new ne;
                        break;
                    case "Line":
                        o = new ce(r(e.geometry), a(e.material), e.mode);
                        break;
                    case "LineLoop":
                        o = new le(r(e.geometry), a(e.material));
                        break;
                    case "LineSegments":
                        o = new he(r(e.geometry), a(e.material));
                        break;
                    case "PointCloud":
                    case "Points":
                        o = new pe(r(e.geometry), a(e.material));
                        break;
                    case "Sprite":
                        o = new ie(a(e.material));
                        break;
                    case "Group":
                        o = new de;
                        break;
                    default:
                        o = new rt
                }
                if (o.uuid = e.uuid, void 0 !== e.name && (o.name = e.name), void 0 !== e.matrix ? (t.fromArray(e.matrix), t.decompose(o.position, o.quaternion, o.scale)) : (void 0 !== e.position && o.position.fromArray(e.position), void 0 !== e.rotation && o.rotation.fromArray(e.rotation), void 0 !== e.quaternion && o.quaternion.fromArray(e.quaternion), void 0 !== e.scale && o.scale.fromArray(e.scale)), void 0 !== e.castShadow && (o.castShadow = e.castShadow), void 0 !== e.receiveShadow && (o.receiveShadow = e.receiveShadow), e.shadow && (void 0 !== e.shadow.bias && (o.shadow.bias = e.shadow.bias), void 0 !== e.shadow.radius && (o.shadow.radius = e.shadow.radius), void 0 !== e.shadow.mapSize && o.shadow.mapSize.fromArray(e.shadow.mapSize), void 0 !== e.shadow.camera && (o.shadow.camera = this.parseObject(e.shadow.camera))), void 0 !== e.visible && (o.visible = e.visible), void 0 !== e.userData && (o.userData = e.userData), void 0 !== e.children) {
                    s = e.children;
                    for (var c = 0; c < s.length; c++) o.add(this.parseObject(s[c], i, n))
                }
                if ("LOD" === e.type)
                    for (e = e.levels, s = 0; s < e.length; s++) {
                        c = e[s];
                        var h = o.getObjectByProperty("uuid", c.object);
                        void 0 !== h && o.addLevel(h, c.distance)
                    }
                return o
            }
        }()
    });
    var Nr = {
            UVMapping: 300,
            CubeReflectionMapping: 301,
            CubeRefractionMapping: 302,
            EquirectangularReflectionMapping: 303,
            EquirectangularRefractionMapping: 304,
            SphericalReflectionMapping: 305,
            CubeUVReflectionMapping: 306,
            CubeUVRefractionMapping: 307
        },
        Or = {
            RepeatWrapping: 1e3,
            ClampToEdgeWrapping: 1001,
            MirroredRepeatWrapping: 1002
        },
        Br = {
            NearestFilter: 1003,
            NearestMipMapNearestFilter: 1004,
            NearestMipMapLinearFilter: 1005,
            LinearFilter: 1006,
            LinearMipMapNearestFilter: 1007,
            LinearMipMapLinearFilter: 1008
        };
    Object.assign(Zi.prototype, {
        getPoint: function() {
            return console.warn("THREE.Curve: .getPoint() not implemented."), null
        },
        getPointAt: function(t) {
            return t = this.getUtoTmapping(t), this.getPoint(t)
        },
        getPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return e
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 5);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPointAt(i / t));
            return e
        },
        getLength: function() {
            var t = this.getLengths();
            return t[t.length - 1]
        },
        getLengths: function(t) {
            if (void 0 === t && (t = this.arcLengthDivisions), this.cacheArcLengths && this.cacheArcLengths.length === t + 1 && !this.needsUpdate) return this.cacheArcLengths;
            this.needsUpdate = !1;
            var e, i = [],
                n = this.getPoint(0),
                r = 0;
            for (i.push(0), e = 1; e <= t; e++) {
                var a = this.getPoint(e / t);
                r += a.distanceTo(n), i.push(r), n = a
            }
            return this.cacheArcLengths = i
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.getLengths()
        },
        getUtoTmapping: function(t, e) {
            var i = this.getLengths(),
                n = i.length;
            e = e || t * i[n - 1];
            for (var r, a = 0, o = n - 1; a <= o;)
                if (0 > (r = i[t = Math.floor(a + (o - a) / 2)] - e)) a = t + 1;
                else {
                    if (!(0 < r)) {
                        o = t;
                        break
                    }
                    o = t - 1
                } return i[t = o] === e ? t / (n - 1) : (t + (e - (a = i[t])) / (i[t + 1] - a)) / (n - 1)
        },
        getTangent: function(t) {
            var e = t - 1e-4;
            return t += 1e-4, 0 > e && (e = 0), 1 < t && (t = 1), e = this.getPoint(e), this.getPoint(t).clone().sub(e).normalize()
        },
        getTangentAt: function(t) {
            return t = this.getUtoTmapping(t), this.getTangent(t)
        },
        computeFrenetFrames: function(t, e) {
            var i, n = new c,
                r = [],
                a = [],
                o = [],
                s = new c,
                l = new h;
            for (i = 0; i <= t; i++) {
                var u = i / t;
                r[i] = this.getTangentAt(u), r[i].normalize()
            }
            a[0] = new c, o[0] = new c, i = Number.MAX_VALUE, u = Math.abs(r[0].x);
            var p = Math.abs(r[0].y),
                d = Math.abs(r[0].z);
            for (u <= i && (i = u, n.set(1, 0, 0)), p <= i && (i = p, n.set(0, 1, 0)), d <= i && n.set(0, 0, 1), s.crossVectors(r[0], n).normalize(), a[0].crossVectors(r[0], s), o[0].crossVectors(r[0], a[0]), i = 1; i <= t; i++) a[i] = a[i - 1].clone(), o[i] = o[i - 1].clone(), s.crossVectors(r[i - 1], r[i]), s.length() > Number.EPSILON && (s.normalize(), n = Math.acos(hr.clamp(r[i - 1].dot(r[i]), -1, 1)), a[i].applyMatrix4(l.makeRotationAxis(s, n))), o[i].crossVectors(r[i], a[i]);
            if (!0 === e)
                for (n = Math.acos(hr.clamp(a[0].dot(a[t]), -1, 1)), n /= t, 0 < r[0].dot(s.crossVectors(a[0], a[t])) && (n = -n), i = 1; i <= t; i++) a[i].applyMatrix4(l.makeRotationAxis(r[i], n * i)), o[i].crossVectors(r[i], a[i]);
            return {
                tangents: r,
                normals: a,
                binormals: o
            }
        }
    }), Ji.prototype = Object.create(Zi.prototype), Ji.prototype.constructor = Ji, Ji.prototype.isLineCurve = !0, Ji.prototype.getPoint = function(t) {
        if (1 === t) return this.v2.clone();
        var e = this.v2.clone().sub(this.v1);
        return e.multiplyScalar(t).add(this.v1), e
    }, Ji.prototype.getPointAt = function(t) {
        return this.getPoint(t)
    }, Ji.prototype.getTangent = function(t) {
        return this.v2.clone().sub(this.v1).normalize()
    }, Qi.prototype = Object.assign(Object.create(Zi.prototype), {
        constructor: Qi,
        add: function(t) {
            this.curves.push(t)
        },
        closePath: function() {
            var t = this.curves[0].getPoint(0),
                e = this.curves[this.curves.length - 1].getPoint(1);
            t.equals(e) || this.curves.push(new Ji(e, t))
        },
        getPoint: function(t) {
            var e = t * this.getLength(),
                i = this.getCurveLengths();
            for (t = 0; t < i.length;) {
                if (i[t] >= e) return e = i[t] - e, i = (t = this.curves[t]).getLength(), t.getPointAt(0 === i ? 0 : 1 - e / i);
                t++
            }
            return null
        },
        getLength: function() {
            var t = this.getCurveLengths();
            return t[t.length - 1]
        },
        updateArcLengths: function() {
            this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths()
        },
        getCurveLengths: function() {
            if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
            for (var t = [], e = 0, i = 0, n = this.curves.length; i < n; i++) e += this.curves[i].getLength(), t.push(e);
            return this.cacheLengths = t
        },
        getSpacedPoints: function(t) {
            void 0 === t && (t = 40);
            for (var e = [], i = 0; i <= t; i++) e.push(this.getPoint(i / t));
            return this.autoClose && e.push(e[0]), e
        },
        getPoints: function(t) {
            t = t || 12;
            for (var e, i = [], n = 0, r = this.curves; n < r.length; n++)
                for (var a = (a = r[n]).getPoints(a && a.isEllipseCurve ? 2 * t : a && a.isLineCurve ? 1 : a && a.isSplineCurve ? t * a.points.length : t), o = 0; o < a.length; o++) {
                    var s = a[o];
                    e && e.equals(s) || (i.push(s), e = s)
                }
            return this.autoClose && 1 < i.length && !i[i.length - 1].equals(i[0]) && i.push(i[0]), i
        },
        createPointsGeometry: function(t) {
            return t = this.getPoints(t), this.createGeometry(t)
        },
        createSpacedPointsGeometry: function(t) {
            return t = this.getSpacedPoints(t), this.createGeometry(t)
        },
        createGeometry: function(t) {
            for (var e = new ht, i = 0, n = t.length; i < n; i++) {
                var r = t[i];
                e.vertices.push(new c(r.x, r.y, r.z || 0))
            }
            return e
        }
    }), Ki.prototype = Object.create(Zi.prototype), Ki.prototype.constructor = Ki, Ki.prototype.isEllipseCurve = !0, Ki.prototype.getPoint = function(t) {
        for (var e = 2 * Math.PI, n = this.aEndAngle - this.aStartAngle, r = Math.abs(n) < Number.EPSILON; 0 > n;) n += e;
        for (; n > e;) n -= e;
        n < Number.EPSILON && (n = r ? 0 : e), !0 !== this.aClockwise || r || (n = n === e ? -e : n - e), e = this.aStartAngle + t * n, t = this.aX + this.xRadius * Math.cos(e);
        var a = this.aY + this.yRadius * Math.sin(e);
        return 0 !== this.aRotation && (e = Math.cos(this.aRotation), n = Math.sin(this.aRotation), t = (r = t - this.aX) * e - (a -= this.aY) * n + this.aX, a = r * n + a * e + this.aY), new i(t, a)
    }, $i.prototype = Object.create(Zi.prototype), $i.prototype.constructor = $i, $i.prototype.isSplineCurve = !0, $i.prototype.getPoint = function(t) {
        var e = (e = ((o = this.points).length - 1) * t) - (t = Math.floor(e)),
            n = o[0 === t ? t : t - 1],
            r = o[t],
            a = o[t > o.length - 2 ? o.length - 1 : t + 1],
            o = o[t > o.length - 3 ? o.length - 1 : t + 2];
        return new i(Xi(e, n.x, r.x, a.x, o.x), Xi(e, n.y, r.y, a.y, o.y))
    }, tn.prototype = Object.create(Zi.prototype), tn.prototype.constructor = tn, tn.prototype.getPoint = function(t) {
        var e = this.v0,
            n = this.v1,
            r = this.v2,
            a = this.v3;
        return new i(Yi(t, e.x, n.x, r.x, a.x), Yi(t, e.y, n.y, r.y, a.y))
    }, en.prototype = Object.create(Zi.prototype), en.prototype.constructor = en, en.prototype.getPoint = function(t) {
        var e = this.v0,
            n = this.v1,
            r = this.v2;
        return new i(qi(t, e.x, n.x, r.x), qi(t, e.y, n.y, r.y))
    };
    var Fr = Object.assign(Object.create(Qi.prototype), {
        fromPoints: function(t) {
            this.moveTo(t[0].x, t[0].y);
            for (var e = 1, i = t.length; e < i; e++) this.lineTo(t[e].x, t[e].y)
        },
        moveTo: function(t, e) {
            this.currentPoint.set(t, e)
        },
        lineTo: function(t, e) {
            var n = new Ji(this.currentPoint.clone(), new i(t, e));
            this.curves.push(n), this.currentPoint.set(t, e)
        },
        quadraticCurveTo: function(t, e, n, r) {
            t = new en(this.currentPoint.clone(), new i(t, e), new i(n, r)), this.curves.push(t), this.currentPoint.set(n, r)
        },
        bezierCurveTo: function(t, e, n, r, a, o) {
            t = new tn(this.currentPoint.clone(), new i(t, e), new i(n, r), new i(a, o)), this.curves.push(t), this.currentPoint.set(a, o)
        },
        splineThru: function(t) {
            var e = new $i(e = [this.currentPoint.clone()].concat(t));
            this.curves.push(e), this.currentPoint.copy(t[t.length - 1])
        },
        arc: function(t, e, i, n, r, a) {
            this.absarc(t + this.currentPoint.x, e + this.currentPoint.y, i, n, r, a)
        },
        absarc: function(t, e, i, n, r, a) {
            this.absellipse(t, e, i, i, n, r, a)
        },
        ellipse: function(t, e, i, n, r, a, o, s) {
            this.absellipse(t + this.currentPoint.x, e + this.currentPoint.y, i, n, r, a, o, s)
        },
        absellipse: function(t, e, i, n, r, a, o, s) {
            t = new Ki(t, e, i, n, r, a, o, s), 0 < this.curves.length && ((e = t.getPoint(0)).equals(this.currentPoint) || this.lineTo(e.x, e.y)), this.curves.push(t), t = t.getPoint(1), this.currentPoint.copy(t)
        }
    });
    nn.prototype = Fr, Fr.constructor = nn, rn.prototype = Object.assign(Object.create(Fr), {
        constructor: rn,
        getPointsHoles: function(t) {
            for (var e = [], i = 0, n = this.holes.length; i < n; i++) e[i] = this.holes[i].getPoints(t);
            return e
        },
        extractAllPoints: function(t) {
            return {
                shape: this.getPoints(t),
                holes: this.getPointsHoles(t)
            }
        },
        extractPoints: function(t) {
            return this.extractAllPoints(t)
        }
    }), Object.assign(an.prototype, {
        moveTo: function(t, e) {
            this.currentPath = new nn, this.subPaths.push(this.currentPath), this.currentPath.moveTo(t, e)
        },
        lineTo: function(t, e) {
            this.currentPath.lineTo(t, e)
        },
        quadraticCurveTo: function(t, e, i, n) {
            this.currentPath.quadraticCurveTo(t, e, i, n)
        },
        bezierCurveTo: function(t, e, i, n, r, a) {
            this.currentPath.bezierCurveTo(t, e, i, n, r, a)
        },
        splineThru: function(t) {
            this.currentPath.splineThru(t)
        },
        toShapes: function(t, e) {
            function i(t) {
                for (var e = [], i = 0, n = t.length; i < n; i++) {
                    var r = t[i],
                        a = new rn;
                    a.curves = r.curves, e.push(a)
                }
                return e
            }

            function n(t, e) {
                for (var i = e.length, n = !1, r = i - 1, a = 0; a < i; r = a++) {
                    var o = e[r],
                        s = e[a],
                        c = s.x - o.x,
                        h = s.y - o.y;
                    if (Math.abs(h) > Number.EPSILON) {
                        if (0 > h && (o = e[a], c = -c, s = e[r], h = -h), !(t.y < o.y || t.y > s.y))
                            if (t.y === o.y) {
                                if (t.x === o.x) return !0
                            } else {
                                if (0 === (r = h * (t.x - o.x) - c * (t.y - o.y))) return !0;
                                0 > r || (n = !n)
                            }
                    } else if (t.y === o.y && (s.x <= t.x && t.x <= o.x || o.x <= t.x && t.x <= s.x)) return !0
                }
                return n
            }
            var r = Ar.isClockWise,
                a = this.subPaths;
            if (0 === a.length) return [];
            if (!0 === e) return i(a);
            if (e = [], 1 === a.length) {
                var o = a[0],
                    s = new rn;
                return s.curves = o.curves, e.push(s), e
            }
            var c = !r(a[0].getPoints());
            c = t ? !c : c;
            s = [];
            var h = [],
                l = [],
                u = 0;
            h[u] = void 0, l[u] = [];
            for (var p = 0, d = a.length; p < d; p++) {
                var f = (o = a[p]).getPoints(),
                    m = r(f);
                (m = t ? !m : m) ? (!c && h[u] && u++, h[u] = {
                    s: new rn,
                    p: f
                }, h[u].s.curves = o.curves, c && u++, l[u] = []) : l[u].push({
                    h: o,
                    p: f[0]
                })
            }
            if (!h[0]) return i(a);
            if (1 < h.length) {
                for (p = !1, t = [], r = 0, a = h.length; r < a; r++) s[r] = [];
                for (r = 0, a = h.length; r < a; r++)
                    for (o = l[r], m = 0; m < o.length; m++) {
                        for (c = o[m], u = !0, f = 0; f < h.length; f++) n(c.p, h[f].p) && (r !== f && t.push({
                            froms: r,
                            tos: f,
                            hole: m
                        }), u ? (u = !1, s[f].push(c)) : p = !0);
                        u && s[r].push(c)
                    }
                0 < t.length && (p || (l = s))
            }
            for (p = 0, r = h.length; p < r; p++)
                for (s = h[p].s, e.push(s), a = 0, o = (t = l[p]).length; a < o; a++) s.holes.push(t[a].h);
            return e
        }
    }), Object.assign(on.prototype, {
        isFont: !0,
        generateShapes: function(t, e, i) {
            void 0 === e && (e = 100), void 0 === i && (i = 4);
            var n = this.data;
            t = String(t).split("");
            var r = e / n.resolution,
                a = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * r,
                o = 0,
                s = 0;
            e = [];
            for (var c = 0; c < t.length; c++) {
                var h = t[c];
                if ("\n" === h) o = 0, s -= a;
                else {
                    var l, u = r,
                        p = o,
                        d = s;
                    if (h = n.glyphs[h] || n.glyphs["?"]) {
                        var f = new an,
                            m = [];
                        if (h.o)
                            for (var g = h._cachedOutline || (h._cachedOutline = h.o.split(" ")), v = 0, y = g.length; v < y;) switch (g[v++]) {
                                case "m":
                                    var x = g[v++] * u + p,
                                        b = g[v++] * u + d;
                                    f.moveTo(x, b);
                                    break;
                                case "l":
                                    x = g[v++] * u + p, b = g[v++] * u + d, f.lineTo(x, b);
                                    break;
                                case "q":
                                    var _ = g[v++] * u + p,
                                        w = g[v++] * u + d,
                                        M = g[v++] * u + p,
                                        E = g[v++] * u + d;
                                    if (f.quadraticCurveTo(M, E, _, w), l = m[m.length - 1]) {
                                        var T = l.x;
                                        l = l.y;
                                        for (var S = 1; S <= i; S++) {
                                            var A = S / i;
                                            qi(A, T, M, _), qi(A, l, E, w)
                                        }
                                    }
                                    break;
                                case "b":
                                    if (_ = g[v++] * u + p, w = g[v++] * u + d, M = g[v++] * u + p, E = g[v++] * u + d, x = g[v++] * u + p, b = g[v++] * u + d, f.bezierCurveTo(M, E, x, b, _, w), l = m[m.length - 1])
                                        for (T = l.x, l = l.y, S = 1; S <= i; S++) Yi(A = S / i, T, M, x, _), Yi(A, l, E, b, w)
                            }
                        u = {
                            offsetX: h.ha * u,
                            path: f
                        }
                    } else u = void 0;
                    o += u.offsetX, e.push(u.path)
                }
            }
            for (i = [], n = 0, t = e.length; n < t; n++) Array.prototype.push.apply(i, e[n].toShapes());
            return i
        }
    }), Object.assign(sn.prototype, {
        load: function(t, e, i, n) {
            var r = this;
            new ui(this.manager).load(t, function(t) {
                try {
                    var i = JSON.parse(t)
                } catch (e) {
                    console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."), i = JSON.parse(t.substring(65, t.length - 2))
                }
                t = r.parse(i), e && e(t)
            }, i, n)
        },
        parse: function(t) {
            return new on(t)
        }
    });
    var zr, Gr, Hr, Vr = {
        getContext: function() {
            return void 0 === zr && (zr = new(window.AudioContext || window.webkitAudioContext)), zr
        },
        setContext: function(t) {
            zr = t
        }
    };
    Object.assign(cn.prototype, {
        load: function(t, e, i, n) {
            var r = new ui(this.manager);
            r.setResponseType("arraybuffer"), r.load(t, function(t) {
                Vr.getContext().decodeAudioData(t, function(t) {
                    e(t)
                })
            }, i, n)
        }
    }), Object.assign(hn.prototype, {
        update: function() {
            var t, e, i, n, r, a, o, s, c = new h,
                l = new h;
            return function(h) {
                if (t !== this || e !== h.focus || i !== h.fov || n !== h.aspect * this.aspect || r !== h.near || a !== h.far || o !== h.zoom || s !== this.eyeSep) {
                    t = this, e = h.focus, i = h.fov, n = h.aspect * this.aspect, r = h.near, a = h.far, o = h.zoom;
                    var u = h.projectionMatrix.clone(),
                        p = (s = this.eyeSep / 2) * r / e,
                        d = r * Math.tan(hr.DEG2RAD * i * .5) / o;
                    l.elements[12] = -s, c.elements[12] = s;
                    var f = -d * n + p,
                        m = d * n + p;
                    u.elements[0] = 2 * r / (m - f), u.elements[8] = (m + f) / (m - f), this.cameraL.projectionMatrix.copy(u), f = -d * n - p, m = d * n - p, u.elements[0] = 2 * r / (m - f), u.elements[8] = (m + f) / (m - f), this.cameraR.projectionMatrix.copy(u)
                }
                this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(l), this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(c)
            }
        }()
    }), ln.prototype = Object.create(rt.prototype), ln.prototype.constructor = ln, un.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: un,
        getInput: function() {
            return this.gain
        },
        removeFilter: function() {
            null !== this.filter && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null)
        },
        getFilter: function() {
            return this.filter
        },
        setFilter: function(t) {
            null !== this.filter ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = t, this.gain.connect(this.filter), this.filter.connect(this.context.destination)
        },
        getMasterVolume: function() {
            return this.gain.gain.value
        },
        setMasterVolume: function(t) {
            this.gain.gain.value = t
        },
        updateMatrixWorld: function() {
            var t = new c,
                e = new s,
                i = new c,
                n = new c;
            return function(r) {
                rt.prototype.updateMatrixWorld.call(this, r), r = this.context.listener;
                var a = this.up;
                this.matrixWorld.decompose(t, e, i), n.set(0, 0, -1).applyQuaternion(e), r.positionX ? (r.positionX.setValueAtTime(t.x, this.context.currentTime), r.positionY.setValueAtTime(t.y, this.context.currentTime), r.positionZ.setValueAtTime(t.z, this.context.currentTime), r.forwardX.setValueAtTime(n.x, this.context.currentTime), r.forwardY.setValueAtTime(n.y, this.context.currentTime), r.forwardZ.setValueAtTime(n.z, this.context.currentTime), r.upX.setValueAtTime(a.x, this.context.currentTime), r.upY.setValueAtTime(a.y, this.context.currentTime), r.upZ.setValueAtTime(a.z, this.context.currentTime)) : (r.setPosition(t.x, t.y, t.z), r.setOrientation(n.x, n.y, n.z, a.x, a.y, a.z))
            }
        }()
    }), pn.prototype = Object.assign(Object.create(rt.prototype), {
        constructor: pn,
        getOutput: function() {
            return this.gain
        },
        setNodeSource: function(t) {
            return this.hasPlaybackControl = !1, this.sourceType = "audioNode", this.source = t, this.connect(), this
        },
        setBuffer: function(t) {
            return this.buffer = t, this.sourceType = "buffer", this.autoplay && this.play(), this
        },
        play: function() {
            if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
            else {
                if (!1 !== this.hasPlaybackControl) {
                    var t = this.context.createBufferSource();
                    return t.buffer = this.buffer, t.loop = this.loop, t.onended = this.onEnded.bind(this), t.playbackRate.setValueAtTime(this.playbackRate, this.startTime), t.start(0, this.startTime), this.isPlaying = !0, this.source = t, this.connect()
                }
                console.warn("THREE.Audio: this Audio has no playback control.")
            }
        },
        pause: function() {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.startTime = this.context.currentTime, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        stop: function() {
            if (!1 !== this.hasPlaybackControl) return this.source.stop(), this.startTime = 0, this.isPlaying = !1, this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        connect: function() {
            if (0 < this.filters.length) {
                this.source.connect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].connect(this.filters[t]);
                this.filters[this.filters.length - 1].connect(this.getOutput())
            } else this.source.connect(this.getOutput());
            return this
        },
        disconnect: function() {
            if (0 < this.filters.length) {
                this.source.disconnect(this.filters[0]);
                for (var t = 1, e = this.filters.length; t < e; t++) this.filters[t - 1].disconnect(this.filters[t]);
                this.filters[this.filters.length - 1].disconnect(this.getOutput())
            } else this.source.disconnect(this.getOutput());
            return this
        },
        getFilters: function() {
            return this.filters
        },
        setFilters: function(t) {
            return t || (t = []), !0 === this.isPlaying ? (this.disconnect(), this.filters = t, this.connect()) : this.filters = t, this
        },
        getFilter: function() {
            return this.getFilters()[0]
        },
        setFilter: function(t) {
            return this.setFilters(t ? [t] : [])
        },
        setPlaybackRate: function(t) {
            if (!1 !== this.hasPlaybackControl) return this.playbackRate = t, !0 === this.isPlaying && this.source.playbackRate.setValueAtTime(this.playbackRate, this.context.currentTime), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getPlaybackRate: function() {
            return this.playbackRate
        },
        onEnded: function() {
            this.isPlaying = !1
        },
        getLoop: function() {
            return !1 === this.hasPlaybackControl ? (console.warn("THREE.Audio: this Audio has no playback control."), !1) : this.loop
        },
        setLoop: function(t) {
            if (!1 !== this.hasPlaybackControl) return this.loop = t, !0 === this.isPlaying && (this.source.loop = this.loop), this;
            console.warn("THREE.Audio: this Audio has no playback control.")
        },
        getVolume: function() {
            return this.gain.gain.value
        },
        setVolume: function(t) {
            return this.gain.gain.value = t, this
        }
    }), dn.prototype = Object.assign(Object.create(pn.prototype), {
        constructor: dn,
        getOutput: function() {
            return this.panner
        },
        getRefDistance: function() {
            return this.panner.refDistance
        },
        setRefDistance: function(t) {
            this.panner.refDistance = t
        },
        getRolloffFactor: function() {
            return this.panner.rolloffFactor
        },
        setRolloffFactor: function(t) {
            this.panner.rolloffFactor = t
        },
        getDistanceModel: function() {
            return this.panner.distanceModel
        },
        setDistanceModel: function(t) {
            this.panner.distanceModel = t
        },
        getMaxDistance: function() {
            return this.panner.maxDistance
        },
        setMaxDistance: function(t) {
            this.panner.maxDistance = t
        },
        updateMatrixWorld: function() {
            var t = new c;
            return function(e) {
                rt.prototype.updateMatrixWorld.call(this, e), t.setFromMatrixPosition(this.matrixWorld), this.panner.setPosition(t.x, t.y, t.z)
            }
        }()
    }), Object.assign(fn.prototype, {
        getFrequencyData: function() {
            return this.analyser.getByteFrequencyData(this.data), this.data
        },
        getAverageFrequency: function() {
            for (var t = 0, e = this.getFrequencyData(), i = 0; i < e.length; i++) t += e[i];
            return t / e.length
        }
    }), Object.assign(mn.prototype, {
        accumulate: function(t, e) {
            var i = this.buffer,
                n = this.valueSize;
            t = t * n + n;
            var r = this.cumulativeWeight;
            if (0 === r) {
                for (r = 0; r !== n; ++r) i[t + r] = i[r];
                r = e
            } else r += e, this._mixBufferRegion(i, t, 0, e / r, n);
            this.cumulativeWeight = r
        },
        apply: function(t) {
            var e = this.valueSize,
                i = this.buffer;
            t = t * e + e;
            var n = this.cumulativeWeight,
                r = this.binding;
            this.cumulativeWeight = 0, 1 > n && this._mixBufferRegion(i, t, 3 * e, 1 - n, e);
            n = e;
            for (var a = e + e; n !== a; ++n)
                if (i[n] !== i[n + e]) {
                    r.setValue(i, t);
                    break
                }
        },
        saveOriginalState: function() {
            var t = this.buffer,
                e = this.valueSize,
                i = 3 * e;
            this.binding.getValue(t, i);
            for (var n = e; n !== i; ++n) t[n] = t[i + n % e];
            this.cumulativeWeight = 0
        },
        restoreOriginalState: function() {
            this.binding.setValue(this.buffer, 3 * this.valueSize)
        },
        _select: function(t, e, i, n, r) {
            if (.5 <= n)
                for (n = 0; n !== r; ++n) t[e + n] = t[i + n]
        },
        _slerp: function(t, e, i, n) {
            s.slerpFlat(t, e, t, e, t, i, n)
        },
        _lerp: function(t, e, i, n, r) {
            for (var a = 1 - n, o = 0; o !== r; ++o) {
                var s = e + o;
                t[s] = t[s] * a + t[i + o] * n
            }
        }
    }), Object.assign(gn.prototype, {
        getValue: function(t, e) {
            this.bind();
            var i = this._bindings[this._targetGroup.nCachedObjects_];
            void 0 !== i && i.getValue(t, e)
        },
        setValue: function(t, e) {
            for (var i = this._bindings, n = this._targetGroup.nCachedObjects_, r = i.length; n !== r; ++n) i[n].setValue(t, e)
        },
        bind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].bind()
        },
        unbind: function() {
            for (var t = this._bindings, e = this._targetGroup.nCachedObjects_, i = t.length; e !== i; ++e) t[e].unbind()
        }
    }), Object.assign(vn, {
        Composite: gn,
        create: function(t, e, i) {
            return t && t.isAnimationObjectGroup ? new vn.Composite(t, e, i) : new vn(t, e, i)
        },
        sanitizeNodeName: function(t) {
            return t.replace(/\s/g, "_").replace(/[^\w-]/g, "")
        },
        parseTrackName: function() {
            var t = new RegExp("^" + /((?:[\w-]+[\/:])*)/.source + /([\w-\.]+)?/.source + /(?:\.([\w-]+)(?:\[(.+)\])?)?/.source + /\.([\w-]+)(?:\[(.+)\])?/.source + "$"),
                e = ["material", "materials", "bones"];
            return function(i) {
                if (!(n = t.exec(i))) throw Error("PropertyBinding: Cannot parse trackName: " + i);
                var n, r = (n = {
                    nodeName: n[2],
                    objectName: n[3],
                    objectIndex: n[4],
                    propertyName: n[5],
                    propertyIndex: n[6]
                }).nodeName && n.nodeName.lastIndexOf(".");
                if (void 0 !== r && -1 !== r) {
                    var a = n.nodeName.substring(r + 1); - 1 !== e.indexOf(a) && (n.nodeName = n.nodeName.substring(0, r), n.objectName = a)
                }
                if (null === n.propertyName || 0 === n.propertyName.length) throw Error("PropertyBinding: can not parse propertyName from trackName: " + i);
                return n
            }
        }(),
        findNode: function(t, e) {
            if (!e || "" === e || "root" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
            if (t.skeleton) {
                var i = function(t) {
                    for (var i = 0; i < t.bones.length; i++) {
                        var n = t.bones[i];
                        if (n.name === e) return n
                    }
                    return null
                }(t.skeleton);
                if (i) return i
            }
            if (t.children) {
                var n = function(t) {
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        if (r.name === e || r.uuid === e || (r = n(r.children))) return r
                    }
                    return null
                };
                if (t = n(t.children)) return t
            }
            return null
        }
    }), Object.assign(vn.prototype, {
        _getValue_unavailable: function() {},
        _setValue_unavailable: function() {},
        BindingType: {
            Direct: 0,
            EntireArray: 1,
            ArrayElement: 2,
            HasFromToArray: 3
        },
        Versioning: {
            None: 0,
            NeedsUpdate: 1,
            MatrixWorldNeedsUpdate: 2
        },
        GetterByBindingType: [function(t, e) {
            t[e] = this.node[this.propertyName]
        }, function(t, e) {
            for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) t[e++] = i[n]
        }, function(t, e) {
            t[e] = this.resolvedProperty[this.propertyIndex]
        }, function(t, e) {
            this.resolvedProperty.toArray(t, e)
        }],
        SetterByBindingTypeAndVersioning: [
            [function(t, e) {
                this.node[this.propertyName] = t[e]
            }, function(t, e) {
                this.node[this.propertyName] = t[e], this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.node[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++]
            }, function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                this.targetObject.needsUpdate = !0
            }, function(t, e) {
                for (var i = this.resolvedProperty, n = 0, r = i.length; n !== r; ++n) i[n] = t[e++];
                this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e]
            }, function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0
            }],
            [function(t, e) {
                this.resolvedProperty.fromArray(t, e)
            }, function(t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0
            }, function(t, e) {
                this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0
            }]
        ],
        getValue: function(t, e) {
            this.bind(), this.getValue(t, e)
        },
        setValue: function(t, e) {
            this.bind(), this.setValue(t, e)
        },
        bind: function() {
            var t = this.node,
                e = this.parsedPath,
                i = e.objectName,
                n = e.propertyName,
                r = e.propertyIndex;
            if (t || (this.node = t = vn.findNode(this.rootNode, e.nodeName) || this.rootNode), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, t) {
                if (i) {
                    var a = e.objectIndex;
                    switch (i) {
                        case "materials":
                            if (!t.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                            if (!t.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                            t = t.material.materials;
                            break;
                        case "bones":
                            if (!t.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                            for (t = t.skeleton.bones, i = 0; i < t.length; i++)
                                if (t[i].name === a) {
                                    a = i;
                                    break
                                } break;
                        default:
                            if (void 0 === t[i]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                            t = t[i]
                    }
                    if (void 0 !== a) {
                        if (void 0 === t[a]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
                        t = t[a]
                    }
                }
                if (void 0 === (a = t[n])) console.error("THREE.PropertyBinding: Trying to update property for track: " + e.nodeName + "." + n + " but it wasn't found.", t);
                else {
                    if (e = this.Versioning.None, void 0 !== t.needsUpdate ? (e = this.Versioning.NeedsUpdate, this.targetObject = t) : void 0 !== t.matrixWorldNeedsUpdate && (e = this.Versioning.MatrixWorldNeedsUpdate, this.targetObject = t), i = this.BindingType.Direct, void 0 !== r) {
                        if ("morphTargetInfluences" === n) {
                            if (!t.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                            if (t.geometry.isBufferGeometry) {
                                if (!t.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                                for (i = 0; i < this.node.geometry.morphAttributes.position.length; i++)
                                    if (t.geometry.morphAttributes.position[i].name === r) {
                                        r = i;
                                        break
                                    }
                            } else {
                                if (!t.geometry.morphTargets) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                                for (i = 0; i < this.node.geometry.morphTargets.length; i++)
                                    if (t.geometry.morphTargets[i].name === r) {
                                        r = i;
                                        break
                                    }
                            }
                        }
                        i = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r
                    } else void 0 !== a.fromArray && void 0 !== a.toArray ? (i = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (i = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = n;
                    this.getValue = this.GetterByBindingType[i], this.setValue = this.SetterByBindingTypeAndVersioning[i][e]
                }
            } else console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.")
        },
        unbind: function() {
            this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound
        }
    }), Object.assign(vn.prototype, {
        _getValue_unbound: vn.prototype.getValue,
        _setValue_unbound: vn.prototype.setValue
    }), Object.assign(yn.prototype, {
        isAnimationObjectGroup: !0,
        add: function(t) {
            for (var e = this._objects, i = e.length, n = this.nCachedObjects_, r = this._indicesByUUID, a = this._paths, o = this._parsedPaths, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
                var u = arguments[h],
                    p = r[d = u.uuid];
                if (void 0 === p) {
                    p = i++, r[d] = p, e.push(u);
                    for (var d = 0, f = c; d !== f; ++d) s[d].push(new vn(u, a[d], o[d]))
                } else if (p < n) {
                    var m = --n;
                    for (r[(f = e[m]).uuid] = p, e[p] = f, r[d] = m, e[m] = u, d = 0, f = c; d !== f; ++d) {
                        var g = s[d],
                            v = g[p];
                        g[p] = g[m], void 0 === v && (v = new vn(u, a[d], o[d])), g[m] = v
                    }
                } else void 0 !== e[p] && console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")
            }
            this.nCachedObjects_ = n
        },
        remove: function(t) {
            for (var e = this._objects, i = this.nCachedObjects_, n = this._indicesByUUID, r = this._bindings, a = r.length, o = 0, s = arguments.length; o !== s; ++o) {
                var c = arguments[o],
                    h = c.uuid,
                    l = n[h];
                if (void 0 !== l && l >= i) {
                    var u = i++;
                    for (n[(p = e[u]).uuid] = l, e[l] = p, n[h] = u, e[u] = c, c = 0, h = a; c !== h; ++c) {
                        var p, d = (p = r[c])[l];
                        p[l] = p[u], p[u] = d
                    }
                }
            }
            this.nCachedObjects_ = i
        },
        uncache: function(t) {
            for (var e, i, n = this._objects, r = n.length, a = this.nCachedObjects_, o = this._indicesByUUID, s = this._bindings, c = s.length, h = 0, l = arguments.length; h !== l; ++h) {
                var u = o[i = arguments[h].uuid];
                if (void 0 !== u)
                    if (delete o[i], u < a) {
                        var p = --a,
                            d = n[p];
                        e = n[i = --r], o[d.uuid] = u, n[u] = d, o[e.uuid] = p, n[p] = e, n.pop();
                        d = 0;
                        for (var f = c; d !== f; ++d) {
                            var m = (e = s[d])[i];
                            e[u] = e[p], e[p] = m, e.pop()
                        }
                    } else
                        for (o[(e = n[i = --r]).uuid] = u, n[u] = e, n.pop(), d = 0, f = c; d !== f; ++d)(e = s[d])[u] = e[i], e.pop()
            }
            this.nCachedObjects_ = a
        },
        subscribe_: function(t, e) {
            var i = this._bindingsIndicesByPath,
                n = i[t],
                r = this._bindings;
            if (void 0 !== n) return r[n];
            var a = this._paths,
                o = this._parsedPaths,
                s = this._objects,
                c = this.nCachedObjects_,
                h = Array(s.length);
            n = r.length;
            for (i[t] = n, a.push(t), o.push(e), r.push(h), i = c, n = s.length; i !== n; ++i) h[i] = new vn(s[i], t, e);
            return h
        },
        unsubscribe_: function(t) {
            var e = this._bindingsIndicesByPath,
                i = e[t];
            if (void 0 !== i) {
                var n = this._paths,
                    r = this._parsedPaths,
                    a = this._bindings,
                    o = a.length - 1,
                    s = a[o];
                e[t[o]] = i, a[i] = s, a.pop(), r[i] = r[o], r.pop(), n[i] = n[o], n.pop()
            }
        }
    }), Object.assign(xn.prototype, {
        play: function() {
            return this._mixer._activateAction(this), this
        },
        stop: function() {
            return this._mixer._deactivateAction(this), this.reset()
        },
        reset: function() {
            return this.paused = !1, this.enabled = !0, this.time = 0, this._loopCount = -1, this._startTime = null, this.stopFading().stopWarping()
        },
        isRunning: function() {
            return this.enabled && !this.paused && 0 !== this.timeScale && null === this._startTime && this._mixer._isActiveAction(this)
        },
        isScheduled: function() {
            return this._mixer._isActiveAction(this)
        },
        startAt: function(t) {
            return this._startTime = t, this
        },
        setLoop: function(t, e) {
            return this.loop = t, this.repetitions = e, this
        },
        setEffectiveWeight: function(t) {
            return this.weight = t, this._effectiveWeight = this.enabled ? t : 0, this.stopFading()
        },
        getEffectiveWeight: function() {
            return this._effectiveWeight
        },
        fadeIn: function(t) {
            return this._scheduleFading(t, 0, 1)
        },
        fadeOut: function(t) {
            return this._scheduleFading(t, 1, 0)
        },
        crossFadeFrom: function(t, e, i) {
            if (t.fadeOut(e), this.fadeIn(e), i) {
                i = this._clip.duration;
                var n = t._clip.duration,
                    r = i / n;
                t.warp(1, n / i, e), this.warp(r, 1, e)
            }
            return this
        },
        crossFadeTo: function(t, e, i) {
            return t.crossFadeFrom(this, e, i)
        },
        stopFading: function() {
            var t = this._weightInterpolant;
            return null !== t && (this._weightInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        setEffectiveTimeScale: function(t) {
            return this.timeScale = t, this._effectiveTimeScale = this.paused ? 0 : t, this.stopWarping()
        },
        getEffectiveTimeScale: function() {
            return this._effectiveTimeScale
        },
        setDuration: function(t) {
            return this.timeScale = this._clip.duration / t, this.stopWarping()
        },
        syncWith: function(t) {
            return this.time = t.time, this.timeScale = t.timeScale, this.stopWarping()
        },
        halt: function(t) {
            return this.warp(this._effectiveTimeScale, 0, t)
        },
        warp: function(t, e, i) {
            var n = this._mixer,
                r = n.time,
                a = this._timeScaleInterpolant,
                o = this.timeScale;
            return null === a && (this._timeScaleInterpolant = a = n._lendControlInterpolant()), n = a.parameterPositions, a = a.sampleValues, n[0] = r, n[1] = r + i, a[0] = t / o, a[1] = e / o, this
        },
        stopWarping: function() {
            var t = this._timeScaleInterpolant;
            return null !== t && (this._timeScaleInterpolant = null, this._mixer._takeBackControlInterpolant(t)), this
        },
        getMixer: function() {
            return this._mixer
        },
        getClip: function() {
            return this._clip
        },
        getRoot: function() {
            return this._localRoot || this._mixer._root
        },
        _update: function(t, e, i, n) {
            if (this.enabled) {
                if (null !== (r = this._startTime)) {
                    if (0 > (e = (t - r) * i) || 0 === i) return;
                    this._startTime = null, e *= i
                }
                if (e *= this._updateTimeScale(t), i = this._updateTime(e), 0 < (t = this._updateWeight(t))) {
                    e = this._interpolants;
                    for (var r = this._propertyBindings, a = 0, o = e.length; a !== o; ++a) e[a].evaluate(i), r[a].accumulate(n, t)
                }
            } else this._updateWeight(t)
        },
        _updateWeight: function(t) {
            var e = 0;
            if (this.enabled) {
                e = this.weight;
                var i = this._weightInterpolant;
                if (null !== i) {
                    var n = i.evaluate(t)[0];
                    e = e * n;
                    t > i.parameterPositions[1] && (this.stopFading(), 0 === n && (this.enabled = !1))
                }
            }
            return this._effectiveWeight = e
        },
        _updateTimeScale: function(t) {
            var e = 0;
            if (!this.paused) {
                e = this.timeScale;
                var i = this._timeScaleInterpolant;
                if (null !== i) {
                    e = e * i.evaluate(t)[0];
                    t > i.parameterPositions[1] && (this.stopWarping(), 0 === e ? this.paused = !0 : this.timeScale = e)
                }
            }
            return this._effectiveTimeScale = e
        },
        _updateTime: function(t) {
            var e = this.time + t;
            if (0 === t) return e;
            var i = this._clip.duration,
                n = this.loop,
                r = this._loopCount;
            if (2200 === n) t: {
                if (-1 === r && (this._loopCount = 0, this._setEndings(!0, !0, !1)), e >= i) e = i;
                else {
                    if (!(0 > e)) break t;
                    e = 0
                }
                this.clampWhenFinished ? this.paused = !0 : this.enabled = !1,
                this._mixer.dispatchEvent({
                    type: "finished",
                    action: this,
                    direction: 0 > t ? -1 : 1
                })
            }
            else {
                if (n = 2202 === n, -1 === r && (0 <= t ? (r = 0, this._setEndings(!0, 0 === this.repetitions, n)) : this._setEndings(0 === this.repetitions, !0, n)), e >= i || 0 > e) {
                    var a = Math.floor(e / i),
                        o = (e = e - i * a, r = r + Math.abs(a), this.repetitions - r);
                    0 > o ? (this.clampWhenFinished ? this.paused = !0 : this.enabled = !1, e = 0 < t ? i : 0, this._mixer.dispatchEvent({
                        type: "finished",
                        action: this,
                        direction: 0 < t ? 1 : -1
                    })) : (0 === o ? (t = 0 > t, this._setEndings(t, !t, n)) : this._setEndings(!1, !1, n), this._loopCount = r, this._mixer.dispatchEvent({
                        type: "loop",
                        action: this,
                        loopDelta: a
                    }))
                }
                if (n && 1 == (1 & r)) return this.time = e, i - e
            }
            return this.time = e
        },
        _setEndings: function(t, e, i) {
            var n = this._interpolantSettings;
            i ? (n.endingStart = 2401, n.endingEnd = 2401) : (n.endingStart = t ? this.zeroSlopeAtStart ? 2401 : 2400 : 2402, n.endingEnd = e ? this.zeroSlopeAtEnd ? 2401 : 2400 : 2402)
        },
        _scheduleFading: function(t, e, i) {
            var n = this._mixer,
                r = n.time,
                a = this._weightInterpolant;
            return null === a && (this._weightInterpolant = a = n._lendControlInterpolant()), n = a.parameterPositions, a = a.sampleValues, n[0] = r, a[0] = e, n[1] = r + t, a[1] = i, this
        }
    }), Object.assign(bn.prototype, e.prototype, {
        _bindAction: function(t, e) {
            var i = t._localRoot || this._root,
                n = t._clip.tracks,
                r = n.length,
                a = t._propertyBindings;
            t = t._interpolants;
            var o = i.uuid,
                s = this._bindingsByRootAndName,
                c = s[o];
            for (void 0 === c && (c = {}, s[o] = c), s = 0; s !== r; ++s) {
                var h = n[s],
                    l = h.name,
                    u = c[l];
                if (void 0 === u) {
                    if (void 0 !== (u = a[s])) {
                        null === u._cacheIndex && (++u.referenceCount, this._addInactiveBinding(u, o, l));
                        continue
                    }++(u = new mn(vn.create(i, l, e && e._propertyBindings[s].binding.parsedPath), h.ValueTypeName, h.getValueSize())).referenceCount, this._addInactiveBinding(u, o, l)
                }
                a[s] = u, t[s].resultBuffer = u.buffer
            }
        },
        _activateAction: function(t) {
            if (!this._isActiveAction(t)) {
                if (null === t._cacheIndex) {
                    var e = (t._localRoot || this._root).uuid,
                        i = t._clip.uuid,
                        n = this._actionsByClip[i];
                    this._bindAction(t, n && n.knownActions[0]), this._addInactiveAction(t, i, e)
                }
                for (i = 0, n = (e = t._propertyBindings).length; i !== n; ++i) {
                    var r = e[i];
                    0 == r.useCount++ && (this._lendBinding(r), r.saveOriginalState())
                }
                this._lendAction(t)
            }
        },
        _deactivateAction: function(t) {
            if (this._isActiveAction(t)) {
                for (var e = t._propertyBindings, i = 0, n = e.length; i !== n; ++i) {
                    var r = e[i];
                    0 == --r.useCount && (r.restoreOriginalState(), this._takeBackBinding(r))
                }
                this._takeBackAction(t)
            }
        },
        _initMemoryManager: function() {
            this._actions = [], this._nActiveActions = 0, this._actionsByClip = {}, this._bindings = [], this._nActiveBindings = 0, this._bindingsByRootAndName = {}, this._controlInterpolants = [], this._nActiveControlInterpolants = 0;
            var t = this;
            this.stats = {
                actions: {
                    get total() {
                        return t._actions.length
                    },
                    get inUse() {
                        return t._nActiveActions
                    }
                },
                bindings: {
                    get total() {
                        return t._bindings.length
                    },
                    get inUse() {
                        return t._nActiveBindings
                    }
                },
                controlInterpolants: {
                    get total() {
                        return t._controlInterpolants.length
                    },
                    get inUse() {
                        return t._nActiveControlInterpolants
                    }
                }
            }
        },
        _isActiveAction: function(t) {
            return null !== (t = t._cacheIndex) && t < this._nActiveActions
        },
        _addInactiveAction: function(t, e, i) {
            var n = this._actions,
                r = this._actionsByClip,
                a = r[e];
            void 0 === a ? (a = {
                knownActions: [t],
                actionByRoot: {}
            }, t._byClipCacheIndex = 0, r[e] = a) : (e = a.knownActions, t._byClipCacheIndex = e.length, e.push(t)), t._cacheIndex = n.length, n.push(t), a.actionByRoot[i] = t
        },
        _removeInactiveAction: function(t) {
            var e = (n = this._actions)[n.length - 1],
                i = t._cacheIndex;
            e._cacheIndex = i, n[i] = e, n.pop(), t._cacheIndex = null;
            var n = t._clip.uuid,
                r = (i = (e = this._actionsByClip)[n]).knownActions,
                a = r[r.length - 1],
                o = t._byClipCacheIndex;
            a._byClipCacheIndex = o, r[o] = a, r.pop(), t._byClipCacheIndex = null, delete i.actionByRoot[(t._localRoot || this._root).uuid], 0 === r.length && delete e[n], this._removeInactiveBindingsForAction(t)
        },
        _removeInactiveBindingsForAction: function(t) {
            for (var e = 0, i = (t = t._propertyBindings).length; e !== i; ++e) {
                var n = t[e];
                0 == --n.referenceCount && this._removeInactiveBinding(n)
            }
        },
        _lendAction: function(t) {
            var e = this._actions,
                i = t._cacheIndex,
                n = this._nActiveActions++,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _takeBackAction: function(t) {
            var e = this._actions,
                i = t._cacheIndex,
                n = --this._nActiveActions,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _addInactiveBinding: function(t, e, i) {
            var n = this._bindingsByRootAndName,
                r = n[e],
                a = this._bindings;
            void 0 === r && (r = {}, n[e] = r), r[i] = t, t._cacheIndex = a.length, a.push(t)
        },
        _removeInactiveBinding: function(t) {
            var e = this._bindings,
                i = (n = t.binding).rootNode.uuid,
                n = n.path,
                r = this._bindingsByRootAndName,
                a = r[i],
                o = e[e.length - 1];
            t = t._cacheIndex, o._cacheIndex = t, e[t] = o, e.pop(), delete a[n];
            t: {
                for (var s in a) break t;delete r[i]
            }
        },
        _lendBinding: function(t) {
            var e = this._bindings,
                i = t._cacheIndex,
                n = this._nActiveBindings++,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _takeBackBinding: function(t) {
            var e = this._bindings,
                i = t._cacheIndex,
                n = --this._nActiveBindings,
                r = e[n];
            t._cacheIndex = n, e[n] = t, r._cacheIndex = i, e[i] = r
        },
        _lendControlInterpolant: function() {
            var t = this._controlInterpolants,
                e = this._nActiveControlInterpolants++,
                i = t[e];
            return void 0 === i && ((i = new Li(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = e, t[e] = i), i
        },
        _takeBackControlInterpolant: function(t) {
            var e = this._controlInterpolants,
                i = t.__cacheIndex,
                n = --this._nActiveControlInterpolants,
                r = e[n];
            t.__cacheIndex = n, e[n] = t, r.__cacheIndex = i, e[i] = r
        },
        _controlInterpolantsResultBuffer: new Float32Array(1),
        clipAction: function(t, e) {
            var i, n = (i = e || this._root).uuid;
            t = null !== (i = "string" == typeof t ? Gi.findByName(i, t) : t) ? i.uuid : t;
            var r = this._actionsByClip[t],
                a = null;
            if (void 0 !== r) {
                if (void 0 !== (a = r.actionByRoot[n])) return a;
                a = r.knownActions[0], null === i && (i = a._clip)
            }
            return null === i ? null : (e = new xn(this, i, e), this._bindAction(e, a), this._addInactiveAction(e, t, n), e)
        },
        existingAction: function(t, e) {
            var i = e || this._root;
            return e = i.uuid, i = "string" == typeof t ? Gi.findByName(i, t) : t, void 0 !== (t = this._actionsByClip[i ? i.uuid : t]) && t.actionByRoot[e] || null
        },
        stopAllAction: function() {
            for (var t = this._actions, e = this._nActiveActions, i = this._bindings, n = this._nActiveBindings, r = this._nActiveBindings = this._nActiveActions = 0; r !== e; ++r) t[r].reset();
            for (r = 0; r !== n; ++r) i[r].useCount = 0;
            return this
        },
        update: function(t) {
            t *= this.timeScale;
            for (var e = this._actions, i = this._nActiveActions, n = this.time += t, r = Math.sign(t), a = this._accuIndex ^= 1, o = 0; o !== i; ++o) e[o]._update(n, t, r, a);
            for (t = this._bindings, e = this._nActiveBindings, o = 0; o !== e; ++o) t[o].apply(a);
            return this
        },
        getRoot: function() {
            return this._root
        },
        uncacheClip: function(t) {
            var e = this._actions;
            t = t.uuid;
            var i = this._actionsByClip;
            if (void 0 !== (n = i[t])) {
                for (var n, r = 0, a = (n = n.knownActions).length; r !== a; ++r) {
                    var o = n[r];
                    this._deactivateAction(o);
                    var s = o._cacheIndex,
                        c = e[e.length - 1];
                    o._cacheIndex = null, o._byClipCacheIndex = null, c._cacheIndex = s, e[s] = c, e.pop(), this._removeInactiveBindingsForAction(o)
                }
                delete i[t]
            }
        },
        uncacheRoot: function(t) {
            t = t.uuid;
            var e = this._actionsByClip;
            for (n in e) {
                var i = e[n].actionByRoot[t];
                void 0 !== i && (this._deactivateAction(i), this._removeInactiveAction(i))
            }
            var n = this._bindingsByRootAndName[t];
            if (void 0 !== n)
                for (var r in n)(t = n[r]).restoreOriginalState(), this._removeInactiveBinding(t)
        },
        uncacheAction: function(t, e) {
            null !== (t = this.existingAction(t, e)) && (this._deactivateAction(t), this._removeInactiveAction(t))
        }
    }), _n.prototype.clone = function() {
        return new _n(void 0 === this.value.clone ? this.value : this.value.clone())
    }, wn.prototype = Object.assign(Object.create(wt.prototype), {
        constructor: wn,
        isInstancedBufferGeometry: !0,
        addGroup: function(t, e, i) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: i
            })
        },
        copy: function(t) {
            null !== (e = t.index) && this.setIndex(e.clone());
            var e = t.attributes;
            for (i in e) this.addAttribute(i, e[i].clone());
            var i = 0;
            for (e = (t = t.groups).length; i < e; i++) {
                var n = t[i];
                this.addGroup(n.start, n.count, n.materialIndex)
            }
            return this
        }
    }), Object.defineProperties(Mn.prototype, {
        count: {
            get: function() {
                return this.data.count
            }
        },
        array: {
            get: function() {
                return this.data.array
            }
        }
    }), Object.assign(Mn.prototype, {
        isInterleavedBufferAttribute: !0,
        setX: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset] = e, this
        },
        setY: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 1] = e, this
        },
        setZ: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 2] = e, this
        },
        setW: function(t, e) {
            return this.data.array[t * this.data.stride + this.offset + 3] = e, this
        },
        getX: function(t) {
            return this.data.array[t * this.data.stride + this.offset]
        },
        getY: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 1]
        },
        getZ: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 2]
        },
        getW: function(t) {
            return this.data.array[t * this.data.stride + this.offset + 3]
        },
        setXY: function(t, e, i) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this
        },
        setXYZ: function(t, e, i, n) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this
        },
        setXYZW: function(t, e, i, n, r) {
            return t = t * this.data.stride + this.offset, this.data.array[t + 0] = e, this.data.array[t + 1] = i, this.data.array[t + 2] = n, this.data.array[t + 3] = r, this
        }
    }), Object.defineProperty(En.prototype, "needsUpdate", {
        set: function(t) {
            !0 === t && this.version++
        }
    }), Object.assign(En.prototype, {
        isInterleavedBuffer: !0,
        setArray: function(t) {
            if (Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.count = void 0 !== t ? t.length / this.stride : 0, this.array = t
        },
        setDynamic: function(t) {
            return this.dynamic = t, this
        },
        copy: function(t) {
            return this.array = new t.array.constructor(t.array), this.count = t.count, this.stride = t.stride, this.dynamic = t.dynamic, this
        },
        copyAt: function(t, e, i) {
            t *= this.stride, i *= e.stride;
            for (var n = 0, r = this.stride; n < r; n++) this.array[t + n] = e.array[i + n];
            return this
        },
        set: function(t, e) {
            return void 0 === e && (e = 0), this.array.set(t, e), this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        onUpload: function(t) {
            return this.onUploadCallback = t, this
        }
    }), Tn.prototype = Object.assign(Object.create(En.prototype), {
        constructor: Tn,
        isInstancedInterleavedBuffer: !0,
        copy: function(t) {
            return En.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    }), Sn.prototype = Object.assign(Object.create(lt.prototype), {
        constructor: Sn,
        isInstancedBufferAttribute: !0,
        copy: function(t) {
            return lt.prototype.copy.call(this, t), this.meshPerAttribute = t.meshPerAttribute, this
        }
    }), Object.assign(An.prototype, {
        linePrecision: 1,
        set: function(t, e) {
            this.ray.set(t, e)
        },
        setFromCamera: function(t, e) {
            e && e.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(e).sub(this.ray.origin).normalize()) : e && e.isOrthographicCamera ? (this.ray.origin.set(t.x, t.y, (e.near + e.far) / (e.near - e.far)).unproject(e), this.ray.direction.set(0, 0, -1).transformDirection(e.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(t, e) {
            var i = [];
            return Ln(t, this, i, e), i.sort(Rn), i
        },
        intersectObjects: function(t, e) {
            var i = [];
            if (!1 === Array.isArray(t)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."), i;
            for (var n = 0, r = t.length; n < r; n++) Ln(t[n], this, i, e);
            return i.sort(Rn), i
        }
    }), Object.assign(Pn.prototype, {
        start: function() {
            this.oldTime = this.startTime = ("undefined" == typeof performance ? Date : performance).now(), this.elapsedTime = 0, this.running = !0
        },
        stop: function() {
            this.getElapsedTime(), this.autoStart = this.running = !1
        },
        getElapsedTime: function() {
            return this.getDelta(), this.elapsedTime
        },
        getDelta: function() {
            var t = 0;
            if (this.autoStart && !this.running) return this.start(), 0;
            if (this.running) {
                var e = ("undefined" == typeof performance ? Date : performance).now();
                t = (e - this.oldTime) / 1e3;
                this.oldTime = e, this.elapsedTime += t
            }
            return t
        }
    }), Object.assign(Cn.prototype, {
        set: function(t, e, i) {
            return this.radius = t, this.phi = e, this.theta = i, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius, this.phi = t.phi, this.theta = t.theta, this
        },
        makeSafe: function() {
            return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this
        },
        setFromVector3: function(t) {
            return this.radius = t.length(), 0 === this.radius ? this.phi = this.theta = 0 : (this.theta = Math.atan2(t.x, t.z), this.phi = Math.acos(hr.clamp(t.y / this.radius, -1, 1))), this
        }
    }), Object.assign(In.prototype, {
        set: function(t, e, i) {
            return this.radius = t, this.theta = e, this.y = i, this
        },
        clone: function() {
            return (new this.constructor).copy(this)
        },
        copy: function(t) {
            return this.radius = t.radius, this.theta = t.theta, this.y = t.y, this
        },
        setFromVector3: function(t) {
            return this.radius = Math.sqrt(t.x * t.x + t.z * t.z), this.theta = Math.atan2(t.x, t.z), this.y = t.y, this
        }
    }), Un.prototype = Object.create(rt.prototype), Un.prototype.constructor = Un, Un.prototype.isImmediateRenderObject = !0, Dn.prototype = Object.create(he.prototype), Dn.prototype.constructor = Dn, Dn.prototype.update = function() {
        var t = new c,
            e = new c,
            i = new K;
        return function() {
            var n, r = ["a", "b", "c"];
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            var a = this.object.matrixWorld,
                o = this.geometry.attributes.position;
            if ((n = this.object.geometry) && n.isGeometry)
                for (var s = n.vertices, c = n.faces, h = n = 0, l = c.length; h < l; h++)
                    for (var u = c[h], p = 0, d = u.vertexNormals.length; p < d; p++) {
                        var f = u.vertexNormals[p];
                        t.copy(s[u[r[p]]]).applyMatrix4(a), e.copy(f).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(n, t.x, t.y, t.z), n += 1, o.setXYZ(n, e.x, e.y, e.z), n += 1
                    } else if (n && n.isBufferGeometry)
                        for (r = n.attributes.position, s = n.attributes.normal, p = n = 0, d = r.count; p < d; p++) t.set(r.getX(p), r.getY(p), r.getZ(p)).applyMatrix4(a), e.set(s.getX(p), s.getY(p), s.getZ(p)), e.applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), o.setXYZ(n, t.x, t.y, t.z), n += 1, o.setXYZ(n, e.x, e.y, e.z), n += 1;
            o.needsUpdate = !0
        }
    }(), Nn.prototype = Object.create(rt.prototype), Nn.prototype.constructor = Nn, Nn.prototype.dispose = function() {
        this.cone.geometry.dispose(), this.cone.material.dispose()
    }, Nn.prototype.update = function() {
        var t = new c,
            e = new c;
        return function() {
            this.light.updateMatrixWorld();
            var i = this.light.distance ? this.light.distance : 1e3,
                n = i * Math.tan(this.light.angle);
            this.cone.scale.set(n, n, i), t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), this.cone.lookAt(e.sub(t)), void 0 !== this.color ? this.cone.material.color.set(this.color) : this.cone.material.color.copy(this.light.color)
        }
    }(), On.prototype = Object.create(he.prototype), On.prototype.constructor = On, On.prototype.onBeforeRender = function() {
        var t = new c,
            e = new h,
            i = new h;
        return function() {
            var n = this.bones,
                r = this.geometry,
                a = r.getAttribute("position");
            i.getInverse(this.root.matrixWorld);
            for (var o = 0, s = 0; o < n.length; o++) {
                var c = n[o];
                c.parent && c.parent.isBone && (e.multiplyMatrices(i, c.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(s, t.x, t.y, t.z), e.multiplyMatrices(i, c.parent.matrixWorld), t.setFromMatrixPosition(e), a.setXYZ(s + 1, t.x, t.y, t.z), s += 2)
            }
            r.getAttribute("position").needsUpdate = !0
        }
    }(), Bn.prototype = Object.create(Ct.prototype), Bn.prototype.constructor = Bn, Bn.prototype.dispose = function() {
        this.geometry.dispose(), this.material.dispose()
    }, Bn.prototype.update = function() {
        void 0 !== this.color ? this.material.color.set(this.color) : this.material.color.copy(this.light.color)
    }, Fn.prototype = Object.create(rt.prototype), Fn.prototype.constructor = Fn, Fn.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, Fn.prototype.update = function() {
        var t = .5 * this.light.width,
            e = .5 * this.light.height,
            i = this.line.geometry.attributes.position,
            n = i.array;
        n[0] = t, n[1] = -e, n[2] = 0, n[3] = t, n[4] = e, n[5] = 0, n[6] = -t, n[7] = e, n[8] = 0, n[9] = -t, n[10] = -e, n[11] = 0, n[12] = t, n[13] = -e, n[14] = 0, i.needsUpdate = !0, void 0 !== this.color ? this.line.material.color.set(this.color) : this.line.material.color.copy(this.light.color)
    }, zn.prototype = Object.create(rt.prototype), zn.prototype.constructor = zn, zn.prototype.dispose = function() {
        this.children[0].geometry.dispose(), this.children[0].material.dispose()
    }, zn.prototype.update = function() {
        var t = new c,
            e = new H,
            i = new H;
        return function() {
            var n = this.children[0];
            if (void 0 !== this.color) this.material.color.set(this.color);
            else {
                var r = n.geometry.getAttribute("color");
                e.copy(this.light.color), i.copy(this.light.groundColor);
                for (var a = 0, o = r.count; a < o; a++) {
                    var s = a < o / 2 ? e : i;
                    r.setXYZ(a, s.r, s.g, s.b)
                }
                r.needsUpdate = !0
            }
            n.lookAt(t.setFromMatrixPosition(this.light.matrixWorld).negate())
        }
    }(), Gn.prototype = Object.create(he.prototype), Gn.prototype.constructor = Gn, Hn.prototype = Object.create(he.prototype), Hn.prototype.constructor = Hn, Vn.prototype = Object.create(he.prototype), Vn.prototype.constructor = Vn, Vn.prototype.update = function() {
        var t = new c,
            e = new c,
            i = new K;
        return function() {
            this.object.updateMatrixWorld(!0), i.getNormalMatrix(this.object.matrixWorld);
            for (var n, r = this.object.matrixWorld, a = this.geometry.attributes.position, o = (n = this.object.geometry).vertices, s = 0, c = 0, h = (n = n.faces).length; c < h; c++) {
                var l = n[c],
                    u = l.normal;
                t.copy(o[l.a]).add(o[l.b]).add(o[l.c]).divideScalar(3).applyMatrix4(r), e.copy(u).applyMatrix3(i).normalize().multiplyScalar(this.size).add(t), a.setXYZ(s, t.x, t.y, t.z), s += 1, a.setXYZ(s, e.x, e.y, e.z), s += 1
            }
            a.needsUpdate = !0
        }
    }(), kn.prototype = Object.create(rt.prototype), kn.prototype.constructor = kn, kn.prototype.dispose = function() {
        this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose()
    }, kn.prototype.update = function() {
        var t = new c,
            e = new c,
            i = new c;
        return function() {
            t.setFromMatrixPosition(this.light.matrixWorld), e.setFromMatrixPosition(this.light.target.matrixWorld), i.subVectors(e, t), this.lightPlane.lookAt(i), void 0 !== this.color ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(i), this.targetLine.scale.z = i.length()
        }
    }(), jn.prototype = Object.create(he.prototype), jn.prototype.constructor = jn, jn.prototype.update = function() {
        function t(t, a, o, s) {
            if (n.set(a, o, s).unproject(r), void 0 !== (t = i[t]))
                for (a = e.getAttribute("position"), o = 0, s = t.length; o < s; o++) a.setXYZ(t[o], n.x, n.y, n.z)
        }
        var e, i, n = new c,
            r = new at;
        return function() {
            e = this.geometry, i = this.pointMap, r.projectionMatrix.copy(this.camera.projectionMatrix), t("c", 0, 0, -1), t("t", 0, 0, 1), t("n1", -1, -1, -1), t("n2", 1, -1, -1), t("n3", -1, 1, -1), t("n4", 1, 1, -1), t("f1", -1, -1, 1), t("f2", 1, -1, 1), t("f3", -1, 1, 1), t("f4", 1, 1, 1), t("u1", .7, 1.1, -1), t("u2", -.7, 1.1, -1), t("u3", 0, 2, -1), t("cf1", -1, 0, 1), t("cf2", 1, 0, 1), t("cf3", 0, -1, 1), t("cf4", 0, 1, 1), t("cn1", -1, 0, -1), t("cn2", 1, 0, -1), t("cn3", 0, -1, -1), t("cn4", 0, 1, -1), e.getAttribute("position").needsUpdate = !0
        }
    }(), Wn.prototype = Object.create(he.prototype), Wn.prototype.constructor = Wn, Wn.prototype.update = function() {
        var t = new J;
        return function(e) {
            if (void 0 !== e && console.warn("THREE.BoxHelper: .update() has no longer arguments."), void 0 !== this.object && t.setFromObject(this.object), !t.isEmpty()) {
                e = t.min;
                var i = t.max,
                    n = this.geometry.attributes.position,
                    r = n.array;
                r[0] = i.x, r[1] = i.y, r[2] = i.z, r[3] = e.x, r[4] = i.y, r[5] = i.z, r[6] = e.x, r[7] = e.y, r[8] = i.z, r[9] = i.x, r[10] = e.y, r[11] = i.z, r[12] = i.x, r[13] = i.y, r[14] = e.z, r[15] = e.x, r[16] = i.y, r[17] = e.z, r[18] = e.x, r[19] = e.y, r[20] = e.z, r[21] = i.x, r[22] = e.y, r[23] = e.z, n.needsUpdate = !0, this.geometry.computeBoundingSphere()
            }
        }
    }(), Wn.prototype.setFromObject = function(t) {
        return this.object = t, this.update(), this
    }, Xn.prototype = Object.create(he.prototype), Xn.prototype.constructor = Xn, Xn.prototype.onBeforeRender = function() {
        var t = this.box;
        t.isEmpty() || (t.getCenter(this.position), t.getSize(this.scale), this.scale.multiplyScalar(.5))
    }, qn.prototype = Object.create(ce.prototype), qn.prototype.constructor = qn, qn.prototype.onBeforeRender = function() {
        var t = -this.plane.constant;
        1e-8 > Math.abs(t) && (t = 1e-8), this.scale.set(.5 * this.size, .5 * this.size, t), this.lookAt(this.plane.normal), this.updateMatrixWorld()
    }, Yn.prototype = Object.create(rt.prototype), Yn.prototype.constructor = Yn, Yn.prototype.setDirection = function() {
        var t, e = new c;
        return function(i) {
            .99999 < i.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > i.y ? this.quaternion.set(1, 0, 0, 0) : (e.set(i.z, 0, -i.x).normalize(), t = Math.acos(i.y), this.quaternion.setFromAxisAngle(e, t))
        }
    }(), Yn.prototype.setLength = function(t, e, i) {
        void 0 === e && (e = .2 * t), void 0 === i && (i = .2 * e), this.line.scale.set(1, Math.max(0, t - e), 1), this.line.updateMatrix(), this.cone.scale.set(i, e, i), this.cone.position.y = t, this.cone.updateMatrix()
    }, Yn.prototype.setColor = function(t) {
        this.line.material.color.copy(t), this.cone.material.color.copy(t)
    }, Zn.prototype = Object.create(he.prototype), Zn.prototype.constructor = Zn;
    var kr = new c,
        jr = new Jn,
        Wr = new Jn,
        Xr = new Jn;
    Qn.prototype = Object.create(Zi.prototype), Qn.prototype.constructor = Qn, Qn.prototype.getPoint = function(t) {
        var e = this.points;
        if (t *= (o = e.length) - (this.closed ? 0 : 1), t -= s = Math.floor(t), this.closed ? s += 0 < s ? 0 : (Math.floor(Math.abs(s) / e.length) + 1) * e.length : 0 === t && s === o - 1 && (s = o - 2, t = 1), this.closed || 0 < s) var i = e[(s - 1) % o];
        else kr.subVectors(e[0], e[1]).add(e[0]), i = kr;
        var n = e[s % o],
            r = e[(s + 1) % o];
        if (this.closed || s + 2 < o ? e = e[(s + 2) % o] : (kr.subVectors(e[o - 1], e[o - 2]).add(e[o - 1]), e = kr), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var a = "chordal" === this.type ? .5 : .25,
                o = Math.pow(i.distanceToSquared(n), a),
                s = Math.pow(n.distanceToSquared(r), a);
            a = Math.pow(r.distanceToSquared(e), a);
            1e-4 > s && (s = 1), 1e-4 > o && (o = s), 1e-4 > a && (a = s), jr.initNonuniformCatmullRom(i.x, n.x, r.x, e.x, o, s, a), Wr.initNonuniformCatmullRom(i.y, n.y, r.y, e.y, o, s, a), Xr.initNonuniformCatmullRom(i.z, n.z, r.z, e.z, o, s, a)
        } else "catmullrom" === this.type && (o = void 0 !== this.tension ? this.tension : .5, jr.initCatmullRom(i.x, n.x, r.x, e.x, o), Wr.initCatmullRom(i.y, n.y, r.y, e.y, o), Xr.initCatmullRom(i.z, n.z, r.z, e.z, o));
        return new c(jr.calc(t), Wr.calc(t), Xr.calc(t))
    }, Kn.prototype = Object.create(Zi.prototype), Kn.prototype.constructor = Kn, Kn.prototype.getPoint = function(t) {
        var e = this.v0,
            i = this.v1,
            n = this.v2,
            r = this.v3;
        return new c(Yi(t, e.x, i.x, n.x, r.x), Yi(t, e.y, i.y, n.y, r.y), Yi(t, e.z, i.z, n.z, r.z))
    }, $n.prototype = Object.create(Zi.prototype), $n.prototype.constructor = $n, $n.prototype.getPoint = function(t) {
        var e = this.v0,
            i = this.v1,
            n = this.v2;
        return new c(qi(t, e.x, i.x, n.x), qi(t, e.y, i.y, n.y), qi(t, e.z, i.z, n.z))
    }, tr.prototype = Object.create(Zi.prototype), tr.prototype.constructor = tr, tr.prototype.getPoint = function(t) {
        if (1 === t) return this.v2.clone();
        var e = new c;
        return e.subVectors(this.v2, this.v1), e.multiplyScalar(t), e.add(this.v1), e
    }, er.prototype = Object.create(Ki.prototype), er.prototype.constructor = er, Zi.create = function(t, e) {
        return console.log("THREE.Curve.create() has been deprecated"), t.prototype = Object.create(Zi.prototype), t.prototype.constructor = t, t.prototype.getPoint = e, t
    }, ir.prototype = Object.create(Qn.prototype), nr.prototype = Object.create(Qn.prototype), rr.prototype = Object.create(Qn.prototype), Object.assign(rr.prototype, {
        initFromArray: function(t) {
            console.error("THREE.Spline: .initFromArray() has been removed.")
        },
        getControlPointsArray: function(t) {
            console.error("THREE.Spline: .getControlPointsArray() has been removed.")
        },
        reparametrizeByArcLength: function(t) {
            console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")
        }
    }), Gn.prototype.setColors = function() {
        console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")
    }, On.prototype.update = function() {
        console.error("THREE.SkeletonHelper: update() no longer needs to be called.")
    }, Object.assign(V.prototype, {
        center: function(t) {
            return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        size: function(t) {
            return console.warn("THREE.Box2: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Object.assign(J.prototype, {
        center: function(t) {
            return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."), this.getCenter(t)
        },
        empty: function() {
            return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."), this.isEmpty()
        },
        isIntersectionBox: function(t) {
            return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        },
        size: function(t) {
            return console.warn("THREE.Box3: .size() has been renamed to .getSize()."), this.getSize(t)
        }
    }), Lt.prototype.center = function(t) {
        return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."), this.getCenter(t)
    }, hr.random16 = function() {
        return console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead."), Math.random()
    }, Object.assign(K.prototype, {
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."), t.applyMatrix3(this)
        },
        multiplyVector3Array: function(t) {
            console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")
        },
        applyToBuffer: function(t, e, i) {
            return console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function(t, e, i) {
            console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")
        }
    }), Object.assign(h.prototype, {
        extractPosition: function(t) {
            return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."), this.copyPosition(t)
        },
        flattenToArrayOffset: function(t, e) {
            return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."), this.toArray(t, e)
        },
        getPosition: function() {
            var t;
            return function() {
                return void 0 === t && (t = new c), console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."), t.setFromMatrixColumn(this, 3)
            }
        }(),
        setRotationFromQuaternion: function(t) {
            return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."), this.makeRotationFromQuaternion(t)
        },
        multiplyToArray: function() {
            console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")
        },
        multiplyVector3: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector4: function(t) {
            return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        multiplyVector3Array: function(t) {
            console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")
        },
        rotateAxis: function(t) {
            console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."), t.transformDirection(this)
        },
        crossVector: function(t) {
            return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."), t.applyMatrix4(this)
        },
        translate: function() {
            console.error("THREE.Matrix4: .translate() has been removed.")
        },
        rotateX: function() {
            console.error("THREE.Matrix4: .rotateX() has been removed.")
        },
        rotateY: function() {
            console.error("THREE.Matrix4: .rotateY() has been removed.")
        },
        rotateZ: function() {
            console.error("THREE.Matrix4: .rotateZ() has been removed.")
        },
        rotateByAxis: function() {
            console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
        },
        applyToBuffer: function(t, e, i) {
            return console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead."), this.applyToBufferAttribute(t)
        },
        applyToVector3Array: function(t, e, i) {
            console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")
        },
        makeFrustum: function(t, e, i, n, r, a) {
            return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."), this.makePerspective(t, e, n, i, r, a)
        }
    }), $.prototype.isIntersectionLine = function(t) {
        return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."), this.intersectsLine(t)
    }, s.prototype.multiplyVector3 = function(t) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."), t.applyQuaternion(this)
    }, Object.assign(Rt.prototype, {
        isIntersectionBox: function(t) {
            return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."), this.intersectsBox(t)
        },
        isIntersectionPlane: function(t) {
            return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."), this.intersectsPlane(t)
        },
        isIntersectionSphere: function(t) {
            return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."), this.intersectsSphere(t)
        }
    }), Object.assign(rn.prototype, {
        extrude: function(t) {
            return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."), new Oe(this, t)
        },
        makeGeometry: function(t) {
            return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."), new Xe(this, t)
        }
    }), Object.assign(i.prototype, {
        fromAttribute: function(t, e, i) {
            return console.error("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
        }
    }), Object.assign(c.prototype, {
        setEulerFromRotationMatrix: function() {
            console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
        },
        setEulerFromQuaternion: function() {
            console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
        },
        getPositionFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."), this.setFromMatrixPosition(t)
        },
        getScaleFromMatrix: function(t) {
            return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."), this.setFromMatrixScale(t)
        },
        getColumnFromMatrix: function(t, e) {
            return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."), this.setFromMatrixColumn(e, t)
        },
        applyProjection: function(t) {
            return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."), this.applyMatrix4(t)
        },
        fromAttribute: function(t, e, i) {
            return console.error("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
        }
    }), Object.assign(r.prototype, {
        fromAttribute: function(t, e, i) {
            return console.error("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."), this.fromBufferAttribute(t, e, i)
        }
    }), ht.prototype.computeTangents = function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    }, Object.assign(rt.prototype, {
        getChildByName: function(t) {
            return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."), this.getObjectByName(t)
        },
        renderDepth: function() {
            console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
        },
        translate: function(t, e) {
            return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."), this.translateOnAxis(e, t)
        }
    }), Object.defineProperties(rt.prototype, {
        eulerOrder: {
            get: function() {
                return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order
            },
            set: function(t) {
                console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."), this.rotation.order = t
            }
        },
        useQuaternion: {
            get: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            },
            set: function() {
                console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
            }
        }
    }), Object.defineProperties(ne.prototype, {
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."), this.levels
            }
        }
    }), Object.defineProperty(re.prototype, "useVertexTexture", {
        get: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        },
        set: function() {
            console.warn("THREE.Skeleton: useVertexTexture has been removed.")
        }
    }), Object.defineProperty(Zi.prototype, "__arcLengthDivisions", {
        get: function() {
            return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions
        },
        set: function(t) {
            console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."), this.arcLengthDivisions = t
        }
    }), st.prototype.setLens = function(t, e) {
        console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."), void 0 !== e && (this.filmGauge = e), this.setFocalLength(t)
    }, Object.defineProperties(vi.prototype, {
        onlyShadow: {
            set: function() {
                console.warn("THREE.Light: .onlyShadow has been removed.")
            }
        },
        shadowCameraFov: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."), this.shadow.camera.fov = t
            }
        },
        shadowCameraLeft: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."), this.shadow.camera.left = t
            }
        },
        shadowCameraRight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."), this.shadow.camera.right = t
            }
        },
        shadowCameraTop: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."), this.shadow.camera.top = t
            }
        },
        shadowCameraBottom: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."), this.shadow.camera.bottom = t
            }
        },
        shadowCameraNear: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."), this.shadow.camera.near = t
            }
        },
        shadowCameraFar: {
            set: function(t) {
                console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."), this.shadow.camera.far = t
            }
        },
        shadowCameraVisible: {
            set: function() {
                console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")
            }
        },
        shadowBias: {
            set: function(t) {
                console.warn("THREE.Light: .shadowBias is now .shadow.bias."), this.shadow.bias = t
            }
        },
        shadowDarkness: {
            set: function() {
                console.warn("THREE.Light: .shadowDarkness has been removed.")
            }
        },
        shadowMapWidth: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."), this.shadow.mapSize.width = t
            }
        },
        shadowMapHeight: {
            set: function(t) {
                console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."), this.shadow.mapSize.height = t
            }
        }
    }), Object.defineProperties(lt.prototype, {
        length: {
            get: function() {
                return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."), this.array.length
            }
        }
    }), Object.assign(wt.prototype, {
        addIndex: function(t) {
            console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."), this.setIndex(t)
        },
        addDrawCall: function(t, e, i) {
            void 0 !== i && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."), console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."), this.addGroup(t, e)
        },
        clearDrawCalls: function() {
            console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."), this.clearGroups()
        },
        computeTangents: function() {
            console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
        },
        computeOffsets: function() {
            console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
        }
    }), Object.defineProperties(wt.prototype, {
        drawcalls: {
            get: function() {
                return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."), this.groups
            }
        },
        offsets: {
            get: function() {
                return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."), this.groups
            }
        }
    }), Object.defineProperties(_n.prototype, {
        dynamic: {
            set: function() {
                console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")
            }
        },
        onUpdate: {
            value: function() {
                return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."), this
            }
        }
    }), Object.defineProperties(X.prototype, {
        wrapAround: {
            get: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            },
            set: function() {
                console.warn("THREE.Material: .wrapAround has been removed.")
            }
        },
        wrapRGB: {
            get: function() {
                return console.warn("THREE.Material: .wrapRGB has been removed."), new H
            }
        },
        shading: {
            get: function() {
                console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.")
            },
            set: function(t) {
                console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."), this.flatShading = 1 === t
            }
        }
    }), Object.defineProperties(ai.prototype, {
        metal: {
            get: function() {
                return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."), !1
            },
            set: function() {
                console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")
            }
        }
    }), Object.defineProperties(q.prototype, {
        derivatives: {
            get: function() {
                return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives
            },
            set: function(t) {
                console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."), this.extensions.derivatives = t
            }
        }
    }), Object.assign(Jt.prototype, {
        getCurrentRenderTarget: function() {
            return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."), this.getRenderTarget()
        },
        getMaxAnisotropy: function() {
            return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."), this.capabilities.getMaxAnisotropy()
        },
        getPrecision: function() {
            return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."), this.capabilities.precision
        },
        supportsFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."), this.extensions.get("OES_texture_float")
        },
        supportsHalfFloatTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."), this.extensions.get("OES_texture_half_float")
        },
        supportsStandardDerivatives: function() {
            return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."), this.extensions.get("OES_standard_derivatives")
        },
        supportsCompressedTextureS3TC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."), this.extensions.get("WEBGL_compressed_texture_s3tc")
        },
        supportsCompressedTexturePVRTC: function() {
            return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."), this.extensions.get("WEBGL_compressed_texture_pvrtc")
        },
        supportsBlendMinMax: function() {
            return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."), this.extensions.get("EXT_blend_minmax")
        },
        supportsVertexTextures: function() {
            return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."), this.capabilities.vertexTextures
        },
        supportsInstancedArrays: function() {
            return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."), this.extensions.get("ANGLE_instanced_arrays")
        },
        enableScissorTest: function(t) {
            console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."), this.setScissorTest(t)
        },
        initMaterial: function() {
            console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
        },
        addPrePlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
        },
        addPostPlugin: function() {
            console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
        },
        updateShadowMap: function() {
            console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
        }
    }), Object.defineProperties(Jt.prototype, {
        shadowMapEnabled: {
            get: function() {
                return this.shadowMap.enabled
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."), this.shadowMap.enabled = t
            }
        },
        shadowMapType: {
            get: function() {
                return this.shadowMap.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."), this.shadowMap.type = t
            }
        },
        shadowMapCullFace: {
            get: function() {
                return this.shadowMap.cullFace
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."), this.shadowMap.cullFace = t
            }
        }
    }), Object.defineProperties(et.prototype, {
        cullFace: {
            get: function() {
                return this.renderReverseSided ? 2 : 1
            },
            set: function(t) {
                t = 1 !== t, console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to " + t + "."), this.renderReverseSided = t
            }
        }
    }), Object.defineProperties(a.prototype, {
        wrapS: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."), this.texture.wrapS = t
            }
        },
        wrapT: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."), this.texture.wrapT = t
            }
        },
        magFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."), this.texture.magFilter = t
            }
        },
        minFilter: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."), this.texture.minFilter = t
            }
        },
        anisotropy: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."), this.texture.anisotropy = t
            }
        },
        offset: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."), this.texture.offset = t
            }
        },
        repeat: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."), this.texture.repeat = t
            }
        },
        format: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."), this.texture.format = t
            }
        },
        type: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."), this.texture.type = t
            }
        },
        generateMipmaps: {
            get: function() {
                return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps
            },
            set: function(t) {
                console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."), this.texture.generateMipmaps = t
            }
        }
    }), pn.prototype.load = function(t) {
        console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
        var e = this;
        return (new cn).load(t, function(t) {
            e.setBuffer(t)
        }), this
    }, fn.prototype.getData = function() {
        return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."), this.getFrequencyData()
    }, ln.prototype.updateCubeMap = function(t, e) {
        return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."), this.update(t, e)
    }, t.WebGLRenderTargetCube = o, t.WebGLRenderTarget = a, t.WebGLRenderer = Jt, t.ShaderLib = wr, t.UniformsLib = xr, t.UniformsUtils = br, t.ShaderChunk = _r, t.FogExp2 = Qt, t.Fog = Kt, t.Scene = $t, t.LensFlare = te, t.Sprite = ie, t.LOD = ne, t.SkinnedMesh = oe, t.Skeleton = re, t.Bone = ae, t.Mesh = Ct, t.LineSegments = he, t.LineLoop = le, t.Line = ce, t.Points = pe, t.Group = de, t.VideoTexture = fe, t.DataTexture = l, t.CompressedTexture = me, t.CubeTexture = u, t.CanvasTexture = j, t.DepthTexture = ge, t.Texture = n, t.CompressedTextureLoader = pi, t.DataTextureLoader = di, t.CubeTextureLoader = mi, t.TextureLoader = gi, t.ObjectLoader = Wi, t.MaterialLoader = Hi, t.BufferGeometryLoader = Vi, t.DefaultLoadingManager = Cr, t.LoadingManager = li, t.JSONLoader = ji, t.ImageLoader = fi, t.FontLoader = sn, t.FileLoader = ui, t.Loader = ki, t.Cache = Pr, t.AudioLoader = cn, t.SpotLightShadow = bi, t.SpotLight = _i, t.PointLight = wi, t.RectAreaLight = Si, t.HemisphereLight = yi, t.DirectionalLightShadow = Mi, t.DirectionalLight = Ei, t.AmbientLight = Ti, t.LightShadow = xi, t.Light = vi, t.StereoCamera = hn, t.PerspectiveCamera = st, t.OrthographicCamera = ot, t.CubeCamera = ln, t.ArrayCamera = Xt, t.Camera = at, t.AudioListener = un, t.PositionalAudio = dn, t.AudioContext = Vr, t.AudioAnalyser = fn, t.Audio = pn, t.VectorKeyframeTrack = Ii, t.StringKeyframeTrack = Oi, t.QuaternionKeyframeTrack = Di, t.NumberKeyframeTrack = Ni, t.ColorKeyframeTrack = Fi, t.BooleanKeyframeTrack = Bi, t.PropertyMixer = mn, t.PropertyBinding = vn, t.KeyframeTrack = zi, t.AnimationUtils = Ir, t.AnimationObjectGroup = yn, t.AnimationMixer = bn, t.AnimationClip = Gi, t.Uniform = _n, t.InstancedBufferGeometry = wn, t.BufferGeometry = wt, t.GeometryIdCount = function() {
        return Tr++
    }, t.Geometry = ht, t.InterleavedBufferAttribute = Mn, t.InstancedInterleavedBuffer = Tn, t.InterleavedBuffer = En, t.InstancedBufferAttribute = Sn, t.Face3 = ct, t.Object3D = rt, t.Raycaster = An, t.Layers = nt, t.EventDispatcher = e, t.Clock = Pn, t.QuaternionLinearInterpolant = Ui, t.LinearInterpolant = Li, t.DiscreteInterpolant = Pi, t.CubicInterpolant = Ri, t.Interpolant = Ai, t.Triangle = Pt, t.Math = hr, t.Spherical = Cn, t.Cylindrical = In, t.Plane = $, t.Frustum = tt, t.Sphere = Q, t.Ray = Rt, t.Matrix4 = h, t.Matrix3 = K, t.Box3 = J, t.Box2 = V, t.Line3 = Lt, t.Euler = it, t.Vector4 = r, t.Vector3 = c, t.Vector2 = i, t.Quaternion = s, t.Color = H, t.ImmediateRenderObject = Un, t.VertexNormalsHelper = Dn, t.SpotLightHelper = Nn, t.SkeletonHelper = On, t.PointLightHelper = Bn, t.RectAreaLightHelper = Fn, t.HemisphereLightHelper = zn, t.GridHelper = Gn, t.PolarGridHelper = Hn, t.FaceNormalsHelper = Vn, t.DirectionalLightHelper = kn, t.CameraHelper = jn, t.BoxHelper = Wn, t.Box3Helper = Xn, t.PlaneHelper = qn, t.ArrowHelper = Yn, t.AxisHelper = Zn, t.CatmullRomCurve3 = Qn, t.CubicBezierCurve3 = Kn, t.QuadraticBezierCurve3 = $n, t.LineCurve3 = tr, t.ArcCurve = er, t.EllipseCurve = Ki, t.SplineCurve = $i, t.CubicBezierCurve = tn, t.QuadraticBezierCurve = en, t.LineCurve = Ji, t.Shape = rn, t.Path = nn, t.ShapePath = an, t.Font = on, t.CurvePath = Qi, t.Curve = Zi, t.ShapeUtils = Ar, t.SceneUtils = {
        createMultiMaterialObject: function(t, e) {
            for (var i = new de, n = 0, r = e.length; n < r; n++) i.add(new Ct(t, e[n]));
            return i
        },
        detach: function(t, e, i) {
            t.applyMatrix(e.matrixWorld), e.remove(t), i.add(t)
        },
        attach: function(t, e, i) {
            t.applyMatrix((new h).getInverse(i.matrixWorld)), e.remove(t), i.add(t)
        }
    }, t.WebGLUtils = Zt, t.WireframeGeometry = ve, t.ParametricGeometry = ye, t.ParametricBufferGeometry = xe, t.TetrahedronGeometry = we, t.TetrahedronBufferGeometry = Me, t.OctahedronGeometry = Ee, t.OctahedronBufferGeometry = Te, t.IcosahedronGeometry = Se, t.IcosahedronBufferGeometry = Ae, t.DodecahedronGeometry = Re, t.DodecahedronBufferGeometry = Le, t.PolyhedronGeometry = be, t.PolyhedronBufferGeometry = _e, t.TubeGeometry = Pe, t.TubeBufferGeometry = Ce, t.TorusKnotGeometry = Ie, t.TorusKnotBufferGeometry = Ue, t.TorusGeometry = De, t.TorusBufferGeometry = Ne, t.TextGeometry = Fe, t.TextBufferGeometry = ze, t.SphereGeometry = Ge, t.SphereBufferGeometry = He, t.RingGeometry = Ve, t.RingBufferGeometry = ke, t.PlaneGeometry = Tt, t.PlaneBufferGeometry = St, t.LatheGeometry = je, t.LatheBufferGeometry = We, t.ShapeGeometry = Xe, t.ShapeBufferGeometry = qe, t.ExtrudeGeometry = Oe, t.ExtrudeBufferGeometry = Be, t.EdgesGeometry = Ye, t.ConeGeometry = Qe, t.ConeBufferGeometry = Ke, t.CylinderGeometry = Ze, t.CylinderBufferGeometry = Je, t.CircleGeometry = $e, t.CircleBufferGeometry = ti, t.BoxGeometry = Mt, t.BoxBufferGeometry = Et, t.ShadowMaterial = ei, t.SpriteMaterial = ee, t.RawShaderMaterial = ii, t.ShaderMaterial = q, t.PointsMaterial = ue, t.MeshPhysicalMaterial = ri, t.MeshStandardMaterial = ni, t.MeshPhongMaterial = ai, t.MeshToonMaterial = oi, t.MeshNormalMaterial = si, t.MeshLambertMaterial = ci, t.MeshDepthMaterial = Y, t.MeshDistanceMaterial = Z, t.MeshBasicMaterial = At, t.LineDashedMaterial = hi, t.LineBasicMaterial = se, t.Material = X, t.Float64BufferAttribute = xt, t.Float32BufferAttribute = yt, t.Uint32BufferAttribute = vt, t.Int32BufferAttribute = gt, t.Uint16BufferAttribute = mt, t.Int16BufferAttribute = ft, t.Uint8ClampedBufferAttribute = dt, t.Uint8BufferAttribute = pt, t.Int8BufferAttribute = ut, t.BufferAttribute = lt, t.REVISION = "87", t.MOUSE = {
        LEFT: 0,
        MIDDLE: 1,
        RIGHT: 2
    }, t.CullFaceNone = 0, t.CullFaceBack = 1, t.CullFaceFront = 2, t.CullFaceFrontBack = 3, t.FrontFaceDirectionCW = 0, t.FrontFaceDirectionCCW = 1, t.BasicShadowMap = 0, t.PCFShadowMap = 1, t.PCFSoftShadowMap = 2, t.FrontSide = 0, t.BackSide = 1, t.DoubleSide = 2, t.FlatShading = 1, t.SmoothShading = 2, t.NoColors = 0, t.FaceColors = 1, t.VertexColors = 2, t.NoBlending = 0, t.NormalBlending = 1, t.AdditiveBlending = 2, t.SubtractiveBlending = 3, t.MultiplyBlending = 4, t.CustomBlending = 5, t.AddEquation = 100, t.SubtractEquation = 101, t.ReverseSubtractEquation = 102, t.MinEquation = 103, t.MaxEquation = 104, t.ZeroFactor = 200, t.OneFactor = 201, t.SrcColorFactor = 202, t.OneMinusSrcColorFactor = 203, t.SrcAlphaFactor = 204, t.OneMinusSrcAlphaFactor = 205, t.DstAlphaFactor = 206, t.OneMinusDstAlphaFactor = 207, t.DstColorFactor = 208, t.OneMinusDstColorFactor = 209, t.SrcAlphaSaturateFactor = 210, t.NeverDepth = 0, t.AlwaysDepth = 1, t.LessDepth = 2, t.LessEqualDepth = 3, t.EqualDepth = 4, t.GreaterEqualDepth = 5, t.GreaterDepth = 6, t.NotEqualDepth = 7, t.MultiplyOperation = 0, t.MixOperation = 1, t.AddOperation = 2, t.NoToneMapping = 0, t.LinearToneMapping = 1, t.ReinhardToneMapping = 2, t.Uncharted2ToneMapping = 3, t.CineonToneMapping = 4, t.UVMapping = 300, t.CubeReflectionMapping = 301, t.CubeRefractionMapping = 302, t.EquirectangularReflectionMapping = 303, t.EquirectangularRefractionMapping = 304, t.SphericalReflectionMapping = 305, t.CubeUVReflectionMapping = 306, t.CubeUVRefractionMapping = 307, t.RepeatWrapping = 1e3, t.ClampToEdgeWrapping = 1001, t.MirroredRepeatWrapping = 1002, t.NearestFilter = 1003, t.NearestMipMapNearestFilter = 1004, t.NearestMipMapLinearFilter = 1005, t.LinearFilter = 1006, t.LinearMipMapNearestFilter = 1007, t.LinearMipMapLinearFilter = 1008, t.UnsignedByteType = 1009, t.ByteType = 1010, t.ShortType = 1011, t.UnsignedShortType = 1012, t.IntType = 1013, t.UnsignedIntType = 1014, t.FloatType = 1015, t.HalfFloatType = 1016, t.UnsignedShort4444Type = 1017, t.UnsignedShort5551Type = 1018, t.UnsignedShort565Type = 1019, t.UnsignedInt248Type = 1020, t.AlphaFormat = 1021, t.RGBFormat = 1022, t.RGBAFormat = 1023, t.LuminanceFormat = 1024, t.LuminanceAlphaFormat = 1025, t.RGBEFormat = 1023, t.DepthFormat = 1026, t.DepthStencilFormat = 1027, t.RGB_S3TC_DXT1_Format = 2001, t.RGBA_S3TC_DXT1_Format = 2002, t.RGBA_S3TC_DXT3_Format = 2003, t.RGBA_S3TC_DXT5_Format = 2004, t.RGB_PVRTC_4BPPV1_Format = 2100, t.RGB_PVRTC_2BPPV1_Format = 2101, t.RGBA_PVRTC_4BPPV1_Format = 2102, t.RGBA_PVRTC_2BPPV1_Format = 2103, t.RGB_ETC1_Format = 2151, t.LoopOnce = 2200, t.LoopRepeat = 2201, t.LoopPingPong = 2202, t.InterpolateDiscrete = 2300, t.InterpolateLinear = 2301, t.InterpolateSmooth = 2302, t.ZeroCurvatureEnding = 2400, t.ZeroSlopeEnding = 2401, t.WrapAroundEnding = 2402, t.TrianglesDrawMode = 0, t.TriangleStripDrawMode = 1, t.TriangleFanDrawMode = 2, t.LinearEncoding = 3e3, t.sRGBEncoding = 3001, t.GammaEncoding = 3007, t.RGBEEncoding = 3002, t.LogLuvEncoding = 3003, t.RGBM7Encoding = 3004, t.RGBM16Encoding = 3005, t.RGBDEncoding = 3006, t.BasicDepthPacking = 3200, t.RGBADepthPacking = 3201, t.CubeGeometry = Mt, t.Face4 = function(t, e, i, n, r, a, o) {
        return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."), new ct(t, e, i, r, a, o)
    }, t.LineStrip = 0, t.LinePieces = 1, t.MeshFaceMaterial = function(t) {
        return console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead."), t
    }, t.MultiMaterial = function(t) {
        return void 0 === t && (t = []), console.warn("THREE.MultiMaterial has been removed. Use an Array instead."), t.isMultiMaterial = !0, t.materials = t, t.clone = function() {
            return t.slice()
        }, t
    }, t.PointCloud = function(t, e) {
        return console.warn("THREE.PointCloud has been renamed to THREE.Points."), new pe(t, e)
    }, t.Particle = function(t) {
        return console.warn("THREE.Particle has been renamed to THREE.Sprite."), new ie(t)
    }, t.ParticleSystem = function(t, e) {
        return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."), new pe(t, e)
    }, t.PointCloudMaterial = function(t) {
        return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."), new ue(t)
    }, t.ParticleBasicMaterial = function(t) {
        return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."), new ue(t)
    }, t.ParticleSystemMaterial = function(t) {
        return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."), new ue(t)
    }, t.Vertex = function(t, e, i) {
        return console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead."), new c(t, e, i)
    }, t.DynamicBufferAttribute = function(t, e) {
        return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."), new lt(t, e).setDynamic(!0)
    }, t.Int8Attribute = function(t, e) {
        return console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead."), new ut(t, e)
    }, t.Uint8Attribute = function(t, e) {
        return console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead."), new pt(t, e)
    }, t.Uint8ClampedAttribute = function(t, e) {
        return console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead."), new dt(t, e)
    }, t.Int16Attribute = function(t, e) {
        return console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead."), new ft(t, e)
    }, t.Uint16Attribute = function(t, e) {
        return console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead."), new mt(t, e)
    }, t.Int32Attribute = function(t, e) {
        return console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead."), new gt(t, e)
    }, t.Uint32Attribute = function(t, e) {
        return console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead."), new vt(t, e)
    }, t.Float32Attribute = function(t, e) {
        return console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead."), new yt(t, e)
    }, t.Float64Attribute = function(t, e) {
        return console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead."), new xt(t, e)
    }, t.ClosedSplineCurve3 = ir, t.SplineCurve3 = nr, t.Spline = rr, t.BoundingBoxHelper = function(t, e) {
        return console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead."), new Wn(t, e)
    }, t.EdgesHelper = function(t, e) {
        return console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead."), new he(new Ye(t.geometry), new se({
            color: void 0 !== e ? e : 16777215
        }))
    }, t.WireframeHelper = function(t, e) {
        return console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead."), new he(new ve(t.geometry), new se({
            color: void 0 !== e ? e : 16777215
        }))
    }, t.XHRLoader = function(t) {
        return console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader."), new ui(t)
    }, t.BinaryTextureLoader = function(t) {
        return console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader."), new di(t)
    }, t.GeometryUtils = {
        merge: function(t, e, i) {
            if (console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead."), e.isMesh) {
                e.matrixAutoUpdate && e.updateMatrix();
                var n = e.matrix;
                e = e.geometry
            }
            t.merge(e, n, i)
        },
        center: function(t) {
            return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."), t.center()
        }
    }, t.ImageUtils = {
        crossOrigin: void 0,
        loadTexture: function(t, e, i, n) {
            console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
            var r = new gi;
            return r.setCrossOrigin(this.crossOrigin), t = r.load(t, i, void 0, n), e && (t.mapping = e), t
        },
        loadTextureCube: function(t, e, i, n) {
            console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
            var r = new mi;
            return r.setCrossOrigin(this.crossOrigin), t = r.load(t, i, void 0, n), e && (t.mapping = e), t
        },
        loadCompressedTexture: function() {
            console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
        },
        loadCompressedTextureCube: function() {
            console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
        }
    }, t.Projector = function() {
        console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."), this.projectVector = function(t, e) {
            console.warn("THREE.Projector: .projectVector() is now vector.project()."), t.project(e)
        }, this.unprojectVector = function(t, e) {
            console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."), t.unproject(e)
        }, this.pickingRay = function() {
            console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
        }
    }, t.CanvasRenderer = function() {
        console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"), this.domElement = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas"), this.clear = function() {}, this.render = function() {}, this.setClearColor = function() {}, this.setSize = function() {}
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    })
});