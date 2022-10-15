package io.agileintelligence.ppmtool.services;


import io.agileintelligence.ppmtool.domain.User;
import io.agileintelligence.ppmtool.exceptions.UsernameException;
import io.agileintelligence.ppmtool.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User saveOrUpdateUser(User user){
        try{
            user.setUsername(user.getUsername());

            return userRepository.save(user);
        }catch (Exception e){
            throw new UsernameException("Username: '"+user.getUsername()+"' already exists");
        }
    }

}
