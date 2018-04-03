package com.example.findmenyc.features;

import com.example.findmenyc.models.User;
import com.example.findmenyc.repositories.UserRepository;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.stream.Stream;

import static io.restassured.RestAssured.given;
import static io.restassured.RestAssured.when;
import static io.restassured.http.ContentType.JSON;
import static org.hamcrest.Matchers.containsString;
import static org.hamcrest.Matchers.is;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.DEFINED_PORT)
public class DemoApplicationTests {

	@Autowired
	private UserRepository userRepository;

	User secondUser;

	@Before
	public void setUp() {
		userRepository.deleteAll();

		User firstUser = new User(
				"user1",
				"First",
				"User",
				"first search",
				false
		);

		secondUser = new User(
				"user2",
				"Second",
				"User",
				"second search",
				true
		);

		Stream.of(firstUser, secondUser)
				.forEach(user -> {
					userRepository.save(user);
				});
	}

	@After
	public void tearDown() {
		userRepository.deleteAll();
	}

	@Test
	public void shouldAllowFullCrudForAUser() throws Exception {

		User userNotYetInDb = new User(
				"new_user",
				"Third",
				"User",
				"third search",
				false
		);

		// Test adding a new user
		given()
				.contentType(JSON)
				.and().body(userNotYetInDb)
				.when()
				.post("http://localhost:8080/users")
				.then()
				.statusCode(is(200))
				.and().body(containsString("new_user"));

		// Test get all Users
		when()
				.get("http://localhost:8080/users/")
				.then()
				.statusCode(is(200))
				.and().body(containsString("user1"))
				.and().body(containsString("user2"))
				.and().body(containsString("new_user"));

		// Test finding one user by ID
		when()
				.get("http://localhost:8080/users/" + secondUser.getId())
				.then()
				.statusCode(is(200))
				.and().body(containsString("Second"))
				.and().body(containsString("User"));


		// Test updating a user
		secondUser.setFirstName("changed_name");

		given()
				.contentType(JSON)
				.and().body(secondUser)
				.when()
				.patch("http://localhost:8080/users/" + secondUser.getId())
				.then()
				.statusCode(is(200))
				.and().body(containsString("changed_name"));

		// Test deleting a user
		when()
				.delete("http://localhost:8080/users/" + secondUser.getId())
				.then()
				.statusCode(is(200));



	}
}
