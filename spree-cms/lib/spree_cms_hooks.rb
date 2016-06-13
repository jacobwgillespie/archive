class SpreeCmsHooks < Spree::ThemeSupport::HookListener
  insert_after :admin_tabs do
    %(<%=  tab(:posts)  %>)
  end
  
  insert_after :admin_tabs do
    %(<%=  tab(:pages)  %>)
  end
  
  insert_after :admin_user_form_fields, "admin/users/display_name"
end
