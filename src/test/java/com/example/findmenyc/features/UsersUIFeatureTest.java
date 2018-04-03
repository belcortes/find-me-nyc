package com.example.findmenyc.features;

import com.example.findmenyc.models.User;
import com.example.findmenyc.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

import static com.codeborne.selenide.CollectionCondition.size;
import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class UsersUIFeatureTest {

    @Autowired
    private UserRepository userRepository;

    @Before
    public void setUp() {
        userRepository.deleteAll();
    }

    @After
    public void tearDown() {
        userRepository.deleteAll();
    }

    @Test
    public void shouldAllowViewDeleteAndAdminOnlyEditFunctionalityForAUser() throws Exception {

        User firstUser = new User(
                "user1",
                "First",
                "User",
                "first search",
                false
        );
        firstUser = userRepository.save(firstUser);
        Long firstUserId = firstUser.getId();

        User secondUser = new User(
                "user2",
                "Second",
                "User",
                "second search",
                true
        );
        secondUser = userRepository.save(secondUser);
        Long secondUserId = secondUser.getId();

        System.setProperty("selenide.browser", "Chrome");

        open("http://localhost:3000/admin");

        $$("[data-user-display]").shouldHave(size(2));

        // Test that all data shows up for each user
        $("#user-" + firstUserId + "-user-name").shouldHave(text("user1"));
        $("#user-" + firstUserId + "-first-name").shouldHave(text("First"));
        $("#user-" + firstUserId + "-last-name").shouldHave(text("User"));
        $("#user-" + firstUserId + "-last-search").shouldHave(text("first search"));
        $("#user-" + firstUserId + "-admin").shouldHave(text("No"));

        $("#user-" + secondUserId + "-user-name").shouldHave(text("user2"));
        $("#user-" + secondUserId + "-first-name").shouldHave(text("Second"));
        $("#user-" + secondUserId + "-last-name").shouldHave(text("User"));
        $("#user-" + secondUserId + "-last-search").shouldHave(text("second search"));
        $("#user-" + secondUserId + "-admin").shouldHave(text("Yes"));

        // Test admin attribute update for second user
//        $("#user-" + secondUserId + "-admin").selectOption("No");
//        $("#user-" + secondUserId + "-admin").shouldHave(text("No"));
//
//        refresh();
//
//        $("#user-" + secondUserId + "-admin").shouldHave(text("No"));

        // Test Deleting the first user
        $("#user-" + firstUserId).should(exist);
        $$("[data-user-display]").shouldHave(size(2));

        $("#delete-user-" + firstUserId).click();
        $("#user-" + firstUserId).shouldNot(exist);

        $$("[data-user-display]").shouldHave(size(1));

    }

    @Test
    public void shouldAllowSignupFunctionalityForAUser() throws Exception {

        System.setProperty("selenide.browser", "Chrome");

        open("http://localhost:3000/signup");

        $("#signup-form").should(appear);

        // Add a new user
        $("#new-user-user-name").sendKeys("third_user");
        $("#new-user-first-name").sendKeys("Third");
        $("#new-user-last-name").sendKeys("User");
        $("#new-user-submit").click();

        // Make sure we're now on the users page again
        $("#users-wrapper").should(appear);

        // Now there should be three Users
        $$("[data-user-display]").shouldHave(size(1));

        refresh();

        // Now there should be three Users again after the refresh
        $$("[data-user-display]").shouldHave(size(1));

        // Check that the data is showing up for the third User
        Long thirdUserId = 1L;
        $("#user-" + thirdUserId + "-user-name").shouldHave(text("third_user"));
        $("#user-" + thirdUserId + "-first-name").shouldHave(text("Third"));
        $("#user-" + thirdUserId + "-last-name").shouldHave(text("User"));

    }

    @Test
    public void shouldAllowSearchFunctionalityForAUser() throws Exception {
        System.setProperty("selenide.browser", "Chrome");

        open("http://localhost:3000/search");

        $("#search-form").should(appear);

        $("#search-input").sendKeys("new search");
        $("#search-submit").click();

        $("#result-list").should(appear);
        $("#result-item").should(appear);
    }
}
