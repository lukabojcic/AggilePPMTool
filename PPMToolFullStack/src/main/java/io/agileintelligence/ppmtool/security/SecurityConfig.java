package io.agileintelligence.ppmtool.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(
        securedEnabled = true, //For future configuration of Administrative rights (LOOK INTO)
        jsr250Enabled = true,
        prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JWTAuthenticationEntryPoint unauthorizedHandler;

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable() //Disable, using JWT token.
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS).and() //REST API - Doesn't save session, server doesn't hold session - Redux holds state
                .authorizeRequests()
                .antMatchers(
                        "/",
                        "/favicon.ico",
                        "/**/*.png",
                        "/**/*.gif",
                        "/**/*.svg",
                        "/**/*.html",
                        "/**/*.jpg",
                        "/**/*.css",
                        "/**/*.js"
                ).permitAll()
                .antMatchers("/api/users/**").permitAll()
                .anyRequest().authenticated();

    }
}
