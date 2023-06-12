package com.flock.journal.user;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public class GrantedAuthorityDeserializer extends
    JsonDeserializer<Collection<? extends GrantedAuthority>> {

  @Override
  public Collection<? extends GrantedAuthority> deserialize(JsonParser jsonParser,
      DeserializationContext deserializationContext)
      throws IOException {
    List<String> authorityStrings = jsonParser.readValueAs(List.class);
    List<GrantedAuthority> authorities = new ArrayList<>();

    for (String authorityString : authorityStrings) {
      authorities.add(new SimpleGrantedAuthority(authorityString));
    }

    return authorities;
  }
}
